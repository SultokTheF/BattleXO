import React, {useEffect} from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <>
      
    </>
  )
}

export default Home