import React from 'react'
import {AspectRatio} from 'react-aspect-ratio'
import ReactPlayer from 'react-player'
import video from './videos/Videofile.mp4'

function Video(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    console.log(height,width)
    return(
    <>
    <video src={video} height={window.innerHeight} width={window.innerWidth} autoPlay controls>

    </video>
    </>
    );
}
export default Video