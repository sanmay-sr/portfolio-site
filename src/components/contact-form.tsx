import React from 'react';

export const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdAIehQiDcSU0ENVSzGXpQ90DSa7Z59ivUw0bFMFe3jcjkFSA/viewform?embedded=true"
        width="100%"
        height="828"
        style={{ border: 'none' }}
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
} 