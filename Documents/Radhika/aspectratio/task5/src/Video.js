import React,{useRef,useEffect} from 'react'
//import {AspectRatio} from 'react-aspect-ratio'
//import ReactPlayer from 'react-player'
import video from './videos/Videofile.mp4'
import Sample from './videos/Sample.mp4'

function Video(){
    let height = window.innerHeight;
    let width = window.innerWidth;
    
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);

    useEffect(() => {
        let options = {
          rootMargin: "0px",
          threshold: [0.25, 0.75]
        };
        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            });
          };
          let handlePlay2 = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoRef2.current.play();
              } else {
                videoRef2.current.pause();
              }
            });
          };
      
          let observer = new IntersectionObserver(handlePlay, options);
          let observer2 = new IntersectionObserver(handlePlay2, options);

      
          observer.observe(videoRef.current);
          observer2.observe(videoRef2.current);

        });
    console.log(height,width)
    return(
    <>
    <video ref={videoRef} src={video} height={window.innerHeight} width={window.innerWidth} loop></video>
    <video ref={videoRef2} src={Sample} height={window.innerHeight} width={window.innerWidth} loop></video>
    </>
    );
}
export default Video