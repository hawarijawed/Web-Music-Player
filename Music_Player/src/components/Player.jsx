import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from './PlayerContext'

const Player = () => {

  const {seekBar, seekBG, playStats, play, pause,track,time, previous,next,seekSong,shuffle,
    toggleShuffle,
    loop,
    toggleLoop,} = useContext(PlayerContext);

  return track ? (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image}/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}...</p>
            </div>
        </div>
      
      <div className='flex flex-col item-center gap-1 m-auto'>
        <div className='flex gap-4 items-center justify-center'>
            <img onClick={toggleShuffle} className={`w-4 cursor-pointer ${shuffle ? "opacity-100" : "opacity-50"}`} src={assets.shuffle_icon} />
            <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} />
            {playStats?
              <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />
              :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />
            }
            <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} />
            <img
              onClick={toggleLoop}
              className={`w-4 cursor-pointer ${loop ? "opacity-100" : "opacity-50"}`}
              src={assets.loop_icon}
            />
        </div>

        {/* Time stamp logic */}
        <div className="flex items-center gap-5">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBG} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 border-none w-10 bg-green-700 rounded-full" />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className='hidden lg:flex item-center gap-2 opacity-75'>
            <img className='w-4' src={assets.mic_icon}/>
            <img className='w-4' src={assets.queue_icon}/>
            <img className='w-4' src={assets.speaker_icon}/>
            <img className='w-4' src={assets.volume_icon}/>
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img className='w-4' src={assets.mini_player_icon}/>
            <img className='w-4' src={assets.zoom_icon}/>
        </div>

      
    </div>
  ):null
}

export default Player
