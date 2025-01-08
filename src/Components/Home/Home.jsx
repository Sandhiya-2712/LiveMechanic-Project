
    import React from 'react'
    import './Home.css'
    import electricimage from '../../assets/electricimage.png'
    import { FaWrench  } from 'react-icons/fa';
    import { FaTaxi } from "react-icons/fa";
    import { MdOutlineElectricBike } from "react-icons/md";
    import { FaTruckFast } from "react-icons/fa6";
    import { RiMapPinTimeFill } from "react-icons/ri";
    
    
    const Home = () => {
      return (
        <>
        <div className="background">
         <div className='background-content1'>24/7</div>
         <div className="background-content2"> Near by <span className='span1'>All Vechicles</span>  Services</div>
         <div className="background-content3">Any <span>time &</span> Anywhere</div>
    
         <button className='button1'>Live Mechanic</button>
         
        </div>
        <div className='difination-heading'>
        <div className="difination">
         Electric vehicles (EVs) have seen significant adoption this year, becoming a mainstream choice for many people. With increasing fuel costs, EVs offer an economical alternative powered by electricity. Governments worldwide are promoting EV usage through subsidies and tax incentives. Charging infrastructure has expanded, making EVs more convenient for daily use. Advances in battery technology have increased range and reduced charging times. People appreciate EVs for their low environmental impact, as they produce zero tailpipe emissions.  
         </div>
         <img className='electric1' src={electricimage} alt="" />
         <div className="heading22">ReadyMechanic</div>
            <div className="icon1">
              <FaWrench size={80} color='rgb(231, 155, 227)'/>
              <FaTaxi size={80} color='rgb(231, 155, 227)'/>
              <MdOutlineElectricBike size={80} color='rgb(231, 155, 227)'/>
              <FaTruckFast size={80} color='rgb(231, 155, 227)'/>
              <RiMapPinTimeFill size={80} color='rgb(231, 155, 227)'/>
    
    </div>
    
    <div className="background2">
      
    </div>
         </div>
         
         
    
        </>
        
        
        
     
    
    
  );
};
export default Home;


