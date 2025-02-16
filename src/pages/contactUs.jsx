import React, { useEffect, useRef, useState } from 'react';

function Contactus() {
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Only load once, on the first mount
    const onLoad = () => {
        setIframeLoaded(true);
        const iframeDoc = iframe.contentWindow.document;
        const script = iframeDoc.createElement('script');
        script.src = '/dist/assets/index-tBXWpilH.js';  // Path to your Vite JS build
        script.async = true;
        iframeDoc.body.appendChild(script);
    };
    if (!iframeLoaded) {
      iframe.addEventListener('load', onLoad);
    }

    // Cleanup event listener on unmount
    return () => {
      iframe.removeEventListener('load', onLoad);
    };
  }, [iframeLoaded]);  // Only re-run if iframeLoaded changes

  return (
    <div>
      <h1>Chatbot Page</h1>
      <iframe
        ref={iframeRef}
        src="/dist/index.html"  // Ensure this is correct
        width="100%"
        height="1000vh"
        title="Chatbot"
        style={{ border: 'none' }}
      />
    </div>
  );
}

export default React.memo(Contactus);  // Prevent unnecessary re-renders