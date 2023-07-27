import React, { useEffect, useRef, useState } from 'react';
import { Lrc } from 'react-lrc';

const GlobalMusicPlayer = () => {
  const audioRef = useRef(null);
  const songUrl = 'https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/202307271153623.flac'; // 替换为你的歌曲URL
  const lrc = `[00:00.00] 作词 : 代舒预鉴
  [00:01.00] 作曲 : 顾小佳
  [00:02.00] 编曲 : 刘也
  [00:03.00] 制作人 : 郑翰文/沈炳@FLOWSIXTEEN
  [00:16.91]写一首情歌
  [00:19.36]不分什么时候和场合
  [00:23.97]这一首情歌
  [00:26.42]就是我想唱给你的
  [00:32.16]小的感动隐藏在日常
  [00:37.68]我也的确不太善言说
  [00:41.35]所以你 听好了
  [00:53.19]就让我在你身边
  [00:56.79]写下时光的信笺
  [01:01.28]就对于我而言
  [01:07.03]你最特别
  [01:08.61]交汇视线
  [01:10.36]也不需要 什么语言
  [01:13.90]有些感觉是最浪漫的出现
  [01:22.51]这首歌 唱久一点
  [01:25.74]你也在意我多一些
  [01:30.35]分享你的世界
  [01:36.14]你最特别
  [01:37.65]交汇视线
  [01:39.33]也不需要 什么语言
  [01:43.17]有些感觉是最浪漫的出现
  [02:06.00]写一首情歌
  [02:08.11]不分什么时候和场合
  [02:12.86]这一首情歌
  [02:15.42]就是我想唱给你的
  [02:21.34]小的感动隐藏在日常
  [02:26.81]我也的确不太善言说
  [02:30.45]所以你 听好了
  [02:42.65]就让我在你身边
  [02:46.00]写下时光的信笺
  [02:50.35]就对于我而言
  [02:56.02]你最特别
  [02:57.84]交汇视线
  [02:59.70]也不需要 什么语言
  [03:03.28]有些感觉是最浪漫的出现
  [03:11.54]这首歌 唱久一点
  [03:15.00]你也在意我多一些
  [03:19.45]分享你的世界
  [03:25.08]你最特别
  [03:26.66]交汇视线
  [03:28.56]也不需要 什么语言
  [03:32.21]有些感觉是最浪漫的出现
  [03:40.02] 混音 : 顾雄
  [03:47.83] 母带 : 顾雄
  [03:55.64] 监制 : 桑玉泓/陈佳馨
  [04:03.46] 统筹 : 刘莹莹/张宏悦
  [04:11.27] 封面 : 甘露
  [04:19.08] 总企划 : 郑翰文/沈炳@FLOWSIXTEEN
  `;

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
      <audio ref={audioRef} src={songUrl} />
      <Lrc lrc={lrc} currentTime={currentTime} lineRenderer={lineRenderer} />
    </div>
  );
};

export default GlobalMusicPlayer;
