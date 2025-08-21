'use client' // Only needed if using client-side hooks like useEffect

import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    console.log('Analytics page loaded!');
    // Reset scroll or animation here
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fade-in bg-sky-500 bottom-1">
      <div style={{ border: '2px solid blue', padding: '20px', background: '#f0f8ff' }}>
        <p style={{ color: 'blue' }}>This template wraps the Analytics page.</p>
      </div>
      {children}
    </div>
  );
}
