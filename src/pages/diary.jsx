import React, { useState, useEffect, useRef } from 'react';

const Diary = () => {
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

  // Add a new journal entry
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

  // Set mood and save it to localStorage
  const setMoodAndSave = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem("mood", selectedMood);
  };

  return (
    <div>
      <h1>Journal</h1>

      {/* Mood Selector */}
      <div className="mood-selector">
        <p>How are you feeling today?</p>
        {["😊", "😢", "😡", "😴", "😎", "🤩"].map((emoji) => (
          <button key={emoji} onClick={() => setMoodAndSave(emoji)}>
            {emoji}
          </button>
        ))}
        <p>Your current mood: {mood}</p>
        <br></br>
      </div>

      {/* Entry Form */}
      <div className="entry-form">
        <input ref={titleRef} type="text" placeholder="Entry Title" />
        <br></br>
        <br></br>
        <textarea ref={contentRef} 
        style={{ width: "100%", height: "200px" }}
        placeholder="Write your journal entry..."></textarea>
        <br></br>
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
};

export default Diary;
