import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Define the script logic
    const initializeChatbot = () => {
      (function(w, d, s, ...args) {
        var div = d.createElement('div');
        div.id = 'aichatbot';
        d.body.appendChild(div);
        w.chatbotConfig = args;
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s);
        j.defer = true;
        j.type = 'module';
        j.src = 'https://aichatbot.sendbird.com/index.js';
        f.parentNode.insertBefore(j, f);
      })(
        window,
        document,
        'script',
        '3A34D25F-9246-40C2-822D-3D7DE644EC1A',
        '0fQ4FzwmM5ZrxS_glKv3u',
        {
          apiHost: 'https://api-cf-us-1.sendbird.com',
          botAvatarUrl: 'https://img.freepik.com/vetores-premium/robo-chatbot_131590-505.jpg', // Add your image URL here
          botName: 'AI Assistant' // Optional: Name your chatbot
        }
      );
    };

    initializeChatbot(); // Call the function to initialize the chatbot
  }, []); // Empty dependency array ensures the effect runs only once

  return null; // No UI to render for this component
};

export default Chatbot;
