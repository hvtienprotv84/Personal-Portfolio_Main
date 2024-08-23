import React, { useEffect, useState } from 'react';
import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate2.css";
import clsx from 'clsx';
import { useTheme } from 'next-themes';

const SongCarousel = () => {
  const { theme } = useTheme(); 
  const [borderColor, setBorderColor] = useState('');

  useEffect(() => {
    // Cập nhật màu sắc dựa trên theme
    setBorderColor(theme === 'dark' ? 'border-[#0E1016]' : 'border-[#e4ded7]');
  }, [theme]);  
  return (
    <div className={clsx("animate_right absolute bottom-5 flex w-[1100%] border-[1px] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]",
        borderColor  
      )}>
      <div className="mx-auto flex w-[50%] justify-around gap-1 bg-auto lg:my-[1px]">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;
