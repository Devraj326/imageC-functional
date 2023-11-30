import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    let [count,setCount] = useState(0);

    
    let forward = () =>{
    if(count < 2){
        setCount(count = count +1)
    } else{
        setCount(count = 0)
    }
    }
    
     let backward = () =>{
    if(count>0){
        setCount(count = count - 1)
    } else{
        setCount(count = 2)
    }
    }
       
        return(
            <div className="body">
                <div className="main">
                    <div onClick={backward} className="arrl"><ArrowBackIosIcon/></div>
                    <div className="name">
                        <div className="imgs">
                            <img src={images[count].img} />
                            <div className="center">
                              {images[count].title}
                            </div>
                            <div className="sub">
                              {images[count].subtitle}
                            </div>
                        </div>
                    </div>
                    <div onClick={forward} className="arrr"><ArrowForwardIosIcon/></div>
                </div>
            </div>
        )
      
}



export default Carousel;