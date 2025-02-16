import React, {useState, useEffect, useRef} from 'react';
import ChatBotIcon from "./components/ChatBotIcon"
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {

    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "..."), {role: "model", text, isError}]);
    }
    history = history.map(({role, text}) => ({role, parts: [{text}]}))
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({contents: history})
    }

    try {

      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");

      console.log("API Response:", data);
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      upadateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

      {/* body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              Hi! I'm Chatbot. <br />How can I help you today?
            </p>
          </div>

        {/* Chat History */}
          {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat}/>
          ))}
          
        </div>
        {/* Footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
        </div>
      </div>
    </div>
  );
};

export default App

