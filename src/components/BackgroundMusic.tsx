'use client';

import { useState, useEffect } from 'react'

export default function BackgroundMusic() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/music')
      .then(response => response.json())
      .then(data => setAudioUrl(data.url))
      .catch(error => console.error('Error fetching music:', error));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {audioUrl && (
        <audio controls autoPlay loop>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  )
}

