import React from "react";
import "./Services.css"; 
import { GiCarWheel } from "react-icons/gi";
import { GiCarKey } from "react-icons/gi";
import { FaWrench  } from 'react-icons/fa';
import { BsFuelPumpDiesel } from "react-icons/bs";
import { PiCarBattery } from "react-icons/pi";
import { GiTowTruck } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { GiCarBattery } from "react-icons/gi";
import { LuBike } from "react-icons/lu";
import { BiSolidCar } from "react-icons/bi";

const Services = () => {
    return (
        <div className="content1">
            <div className="headcontent1">.</div>
            <div className="ficon1"><GiCarWheel size={80} color="rgb(224, 101, 218)" /></div>
            <div className="content2">Tyre Puncture</div>
            <div className="content21">Tube or tubeless puncture</div>
            <div className="content3">
                <div className="ficon2"><GiCarKey size={80} color="rgb(224, 101, 218)"/></div>
                <div className="content31">Key Lockout</div>
                <div className="content32">All-in-one unlocking assistance</div>
            </div>
            <div className="content4">
                <div className="ficon3"><FaWrench size={70} color="rgb(224, 101, 218)"/></div>
                <div className="content41">Instant Repair</div>
                <div className="content42">Quick and reliable instant repair service</div>
            </div>
            <div className="content5">
                <div className="ficon5"><BsFuelPumpDiesel size={70} color="rgb(224, 101, 218)"/></div>
                <div className="content51">Fuel Delivery</div>
                <div className="content52">On-demand fuel delivery at your location</div>
            </div>

<div className="content6">
    <div className="ficon6"><PiCarBattery size={90} color="rgb(224, 101, 218)"/></div>
    <div className="content61">Battery JumpStart</div>
    <div className="content62">Fast and reliable battery jumpstart service</div>
</div>

<div className="content7">
    <div className="ficon7"><GiTowTruck size={90} color="rgb(224, 101, 218)"/></div>
    <div className="content71">Towing Assistance</div>
    <div className="content72">Dependable towing assistance whenever you need it</div>
</div>
 <div className="content8">
    <div className="ficon8"><FaBoxOpen size={80} color="rgb(224, 101, 218)"/></div>
    <div className="content81">Available parts</div>
    <div className="content82">Wide range of available parts for your needs</div>
 </div>

 <div className="content9">
    <div className="ficon9"><GiCarBattery size={80} color="rgb(224, 101, 218)"/></div>
    <div className="content91">NewBattery Change</div>
    <div className="content92">Efficient new battery replacement service</div>
 </div>
  <div className="content10">
    <div className="ficon10"><LuBike size={80} color="rgb(224, 101, 218)" /></div>
    <div className="subcontent1">BikeExpress Services</div>
    <div className="subcontent2"> convenient BikeExpress services for allyour biking needs</div>
  </div>

 <div className="content11">
    <div className="ficon11"><BiSolidCar size={80} color="rgb(224, 101, 218)"/></div>
    <div className="content111">Starting Problem</div>
    <div className="content112">Make your Vehicles moving</div>
 </div>

        </div>
    );
};

export default Services;
