import ProgressBar from "progressbar.js";
import Shape from 'progressbar.js/shape';
import { useEffect, useRef } from 'react';


const ProfileProgress =({progress}:{progress:number})=>{
    useEffect(()=>{
      console.log("9a")
        startProgress();
    },[progress])
    const progressHtmlRef = useRef<HTMLDivElement>(null);

    const profileBar = useRef<Shape| null>(null);

    const startProgress=()=>{
          if (! profileBar.current) {
            profileBar.current = new ProgressBar.Circle(progressHtmlRef.current, {
              color: '#051A35',
              strokeWidth: 10,
              trailWidth: 0,
              easing: 'linear',
              text: {
                autoStyleContainer: false
              },
              from: { color: '#FCE74C' },
              to: { color: '#FCE74C' },
              // Set default step function for all animate calls
              step: function(state, circle) {
                circle.path?.setAttribute("stroke", state.color);
                circle.path?.setAttribute("stroke-width", "6");
                var value = Math.round(circle.value() * 100);
                profileBar.current?.setText(""+value+"%")
    
              }
          });
          }
          
        profileBar.current.set(0);
        profileBar.current.animate( progress );
    }

    return (
        <div id="profileProgress"  ref={progressHtmlRef}></div>
    );
}



export default ProfileProgress;