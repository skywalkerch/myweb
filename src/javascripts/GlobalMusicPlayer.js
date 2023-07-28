import React, { useEffect, useRef, useState } from 'react';
import { Lrc } from 'react-lrc';

const GlobalMusicPlayer = () => {
  const audioRef = useRef(null);
  const songUrl = 'https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/202307271153623.flac'; // 替换为你的歌曲URL
  const lrcUrl = 'path/to/your/lyrics.lrc'; // 替换为你的歌词文件路径

  const [lrc, setLrc] = useState('');

  useEffect(() => {
    fetch(lrcUrl)
      .then(response => response.text())
      .then(data => setLrc(data))
      .catch(error => {
        console.error('Failed to load lyrics:', error);
      });
  }, []);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio.play().catch(error => {
        console.error('Failed to start playback:', error);
      });
    };

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateCurrentTime);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Playback started successfully
        })
        .catch(() => {
          // User hasn't interacted with the document yet, so we wait for interaction to play the audio
          document.addEventListener('click', playAudio);
        });
    }

    return () => {
      // Clean up event listeners when the component unmounts
      document.removeEventListener('click', playAudio);
      audio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, []);

  const lineRenderer = (line, index, active) => {
    return (
      <div key={index} style={{ color: active ? 'red' : 'black' }}>
        {line.txt}
      </div>
    );
  };

  return (
    <div>
      <audio ref={audioRef} src={songUrl}  />
      {lrc && <Lrc lrc={lrc} currentTime={currentTime} lineRenderer={lineRenderer} />}
    </div>
  );
};

export default GlobalMusicPlayer;
