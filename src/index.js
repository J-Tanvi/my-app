import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <div className="topnav">
          <Link className="active" to="/">EmoQuest</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <h1>EmoQuest</h1>
      <h3>Welcome to EmoQuest! Start your emotional journey today!</h3>
    </div>
  );
}

function Journal() {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState(localStorage.getItem("mood") || "😊");
  const titleRef = useRef();
  const contentRef = useRef();

  // Load saved journal entries from localStorage
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  // Save journal entries to localStorage
  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    const title = titleRef.current.value.trim();
    const content = contentRef.current.value.trim();
    if (title && content) {
      const newEntry = { id: Date.now(), title, content, mood };
      setEntries([...entries, newEntry]);
      titleRef.current.value = "";
      contentRef.current.value = "";
    }
  };

  const setMoodAndSave = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem("mood", selectedMood);
  };

  return (
    <div className="content">
      <h1>My Journal</h1>
      
      {/* Mood Selector */}
      <div className="mood-selector">
        <p>How are you feeling today?</p>
        {["😊", "😢", "😡", "😴", "😎", "🤩"].map((emoji) => (
          <button key={emoji} onClick={() => setMoodAndSave(emoji)}>
            {emoji}
          </button>
        ))}
        <p>Your current mood: {mood}</p>
      </div>

      {/* Entry Form */}
      <div className="entry-form">
        <input ref={titleRef} type="text" placeholder="Entry Title" />
        <textarea ref={contentRef} placeholder="Write your journal entry..."></textarea>
        <button onClick={addEntry}>Add Entry</button>
      </div>

      {/* Journal Entries */}
      <div className="entries">
        {entries.map(entry => (
          <div key={entry.id} className="journal-entry">
            <h2>{entry.title} {entry.mood}</h2>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content">
      <h1>About EmoQuest</h1>
      <p>This is a fun journaling app for kids to express their feelings and thoughts!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
