// Filename - contactUs.jsx

import React from "react";

const contactUs = () => {
    return (
        <div>
            <h1>Chatbot Page</h1>
            <iframe
                src="/dist/index.html"  // Pointing to the HTML file in the public/dist folder
                width="100%"
                height="100vh"  // Full viewport height
                title="Chatbot"
                style={{ border: 'none' }}
            />
    </div>
    );
};

export default contactUs;
