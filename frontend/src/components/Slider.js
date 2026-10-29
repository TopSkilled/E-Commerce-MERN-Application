import {React,useEffect,useState}  from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
const Slider = () => {
     const SliderData = [
        {
          title: 'Jackets & Coats',
          subtitle :'Quality Matters.'
        },
        {
            title: 'Find The Best Outfit',
            subtitle :'With 30% Off'
        },
        {
 
            title: 'The Best Shoes',
            subtitle :'Comfort For your long day'
        },
        {
 
            title: 'Next Season Is here',
            subtitle :'Enjoy your summer with us.'
        }
      ];
    const [current, setCurrent] = useState(0);   //index of the current Slide
    const length = SliderData.length;    //length of the slide  tottaly 4 slides
    const [auto,setauto] = useState(true);   //indicates whether the slide need to auto play or not
    const intervaltime = 6000;        //duration of inbetween slides 6ms
    let slideinterval;              //declarimg a variable for hold the interval reference for auto-playing the slider.
    const nextslide = () =>{
        clearInterval(slideinterval);    //it clear the time interval when the user manually navigates
        slideinterval = setInterval(nextslide,intervaltime);   //setting a new interval timing that is a auto interval
        setTimeout(()=>setCurrent(current === length - 1 ? 0 : current + 1))
 
    }
    const prevslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === 0 ? length - 1 : current - 1))         
   }
   useEffect(()=>{
     setauto(true)
    if(auto){
      slideinterval = setInterval(nextslide,intervaltime);
      }
    return ()=>{ 
      setauto(false);
      clearInterval(slideinterval);
    }
   })
 
    return (
        <div className = 'slider'>
            {SliderData.map((slide,index) =>{   //looping  the slide one by one using map function
                return(
                    <div key = {index} className={index === current ? 'slide current' : 'slide'}>
                    <h1 className = 'titleslider'>{slide.title}</h1>
                    <h3 className = 'subtitleslider'>{slide.subtitle}</h3>
                    <div className = 'content'> <Link to= '/Shop'> <ShopNowBtn /></Link>  </div>
                    </div>
                );
 
            })}
            <IoIosArrowForward className ='next' size ='32' onClick = {nextslide}/>
            <IoIosArrowBack className = 'prev' size ='32' onClick = {prevslide}/>
        </div>
    )
}
 
export default Slider