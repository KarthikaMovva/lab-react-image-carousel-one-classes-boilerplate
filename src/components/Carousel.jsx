import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
// let imgid = this.state.index;
//   let imglink = images[imgid].img;
constructor(){
    super();
    this.state={
        index : 0,
    };
}

  increasebutton = ()=>{
    let imgid = this.state.index;
    if(imgid==images.length-1){
        this.setState({index : 0});
    }
    else{
        this.setState({index : imgid+1})
    }
  }
  decreasebutton = () => {
    let imgid = this.state.index;
    if(imgid==0){
        this.setState({index : images.length-1});
    }
    else{
        this.setState({index : imgid-1});
    }
    }
 render(){
    let imgid = this.state.index;
    let imglink = images[imgid].img;
    let imgname = images[imgid].title;
    let imgques = images[imgid].subtitle;

    return(
        <div>
        <ArrowBackIosIcon onClick={this.decreasebutton} className="left Button"/>
        <img src={imglink} alt="" />
        <div className="picture">{imgname}</div>
        <div className="question">{imgques}</div>
        <ArrowForwardIosIcon onClick={this.increasebutton} className="right Button"/>
       </div>
    )
 }

   
}

export default Carousel;