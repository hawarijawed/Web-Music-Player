import { createContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/assets";
import axios from 'axios';
export const PlayerContext = createContext();

//Context provider function
const PlayerContextProvider = (props)=>{

    const url = 'http://localhost:8000';
    const audioRef = useRef();
    const seekBG = useRef();
    const seekBar = useRef();

    const [songsData, setSongsData] = useState([]);
    const [albumData, setAlbumData] = useState([]);
    const [track, setTrack] = useState(songsData[0]);
    const [playStats, setPlayStats] = useState(false);
    
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            min: 0,
        },
        totalTime:{
            second:0,
            min:0,
        }
    });

    const play = ()=>{
        audioRef.current.play();
        setPlayStats(true);
    }

    const pause = ()=>{
        audioRef.current.pause();
        setPlayStats(false);
    }

    const playwitId = async (id)=>{
        await songsData.map((item)=>{
            if(id === item._id){
                setTrack(item);
            }
        })

        await audioRef.current.play();
        setPlayStats(true);
    }

    //Shuffle Logic
    const [shuffle, setShuffle] = useState(true);
    const shuffleTrack = ()=>{
        let shuffledTracks  = [...songsData].sort(()=>Math.random()-0.5);
        return shuffledTracks;
    };

    const toggleShuffle = () =>{
        
        if(!shuffle){
            setLoop(false)
        }

        setShuffle(!shuffle);

    };
    const previous = async ()=>{
        songsData.map(async(item, index)=>{
            if(shuffle){
                const shuffledTracks  = shuffleTrack();
                const prevTrackIndex = Math.floor(Math.random() * shuffledTracks.length);
                await setTrack(shuffledTracks[prevTrackIndex]);
            }
            else if(index >0){
                await setTrack(songsData[index - 1]);
            }
            else{
                await setTrack(songsData[songsData.length-1]);
            }
            await audioRef.current.play();
            setPlayStats(true);
        })
        
    }   

    const next = async ()=>{
        songsData.map(async(item, index) =>{
            if(shuffle){
                const shuffledTracks  = shuffleTrack();
                const nextTrackIndex = Math.floor(Math.random() * shuffledTracks.length);
                await setTrack(shuffledTracks[nextTrackIndex]);
            }
            
            else if(track.id<songsData.length-1){
                await setTrack(songsData[track.id + 1]);
                
            }
            else{
                await setTrack(songsData[0]);
            }
            await audioRef.current.play();
            setPlayStats(true);
        })
        
    };


    const [loop, setLoop] = useState(false);
    const toggleLoop = ()=>{
        if (!loop) {
            setShuffle(false); // Disable shuffle if loop is enabled
        }
        setLoop(!loop);
    }
    const seekSong = async (e)=>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBG.current.offsetWidth)*audioRef.current.duration)
    }

    const getSongData = async ()=>{
        try {
            const response = await axios.get(`${url}/api/song/list`);

            setSongsData(response.data.songs);
            setTrack(response.data.songs[0]);
        } catch (error) {
            
        }
    }

    const getAlbumData = async ()=>{
        try {
            const response = await axios.get(`${url}/api/album/list`);

            setAlbumData(response.data.albums);
            
        } catch (error) {
            
        }
    }
    

    useEffect(()=>{
        audioRef.current.loop = loop;
        audioRef.current.onended = () =>{
            if(loop){
                audioRef.current.play();
            }
            else{
                next();
            }
        };

    },[loop, next]);

    useEffect(() => {
        // Check if audioRef.current is not null before setting the event handler
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                // Logic for seek bar
                if (audioRef.current.duration > 0) {
                    seekBar.current.style.width = Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
                    setTime({
                        currentTime: {
                            second: Math.floor(audioRef.current.currentTime % 60),
                            minute: Math.floor(audioRef.current.currentTime / 60),
                        },
                        totalTime: {
                            second: Math.floor(audioRef.current.duration % 60),
                            minute: Math.floor(audioRef.current.duration / 60),
                        }
                    });
                }
            };
        }
    }, [audioRef]);

    useEffect(()=>{
        getAlbumData(),
        getSongData()
    },[])
    const contextValue = {
        audioRef,
        seekBG,
        seekBar,
        track, setTrack,
        playStats, setPlayStats,
        time, setTime,
        play, pause,
        playwitId,
        previous, next,
        seekSong,
        shuffle,
        toggleShuffle,
        loop,
        toggleLoop,
        songsData,
        albumData
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;