import React from 'react';
import './CNGVehicles.css';
import cng1 from '../../assets/cng1.png'
import cng2 from '../../assets/cng2.png'

const CNGVehicles = () => {
  return (
 <div>
    <div className="backhead">
      <img className='cng1' src={cng1} alt="" />
      <div className="cngcon1"> CNG RetroFitment</div>
      <div className="cngcon2">Fueling the </div>
      <div className="cngcon3">Future.</div>
      <div className="cngcon4">Make the switch to CNG for a greener tomorrow—experience cleaner energy, lower emissions, cost-effective fuel, and extended engine longevity while driving towards a more sustainable world.
</div>
    </div>

    <div className="backhead2">
     <div className="cngcon5">Unlock Advantages with</div>
     <div className="cngcon6">CNGFirst Transformation!</div>
</div>

<div className="backhead3">
  <div className="cngcon7">Worry-Free Warranty</div>
  <div className="cngcon8">Enjoy a 1-year warranty from the installation date, guaranteeing reliability, peace of mind, and optimal performance for your vehicle.</div>
<div className="cngcon9">Pan India 24/7 Roadside Assistance</div>
<div className="cngcon10">Get 1-year nationwide support, ensuring help is just a call away for emergencies or breakdowns, anytime, anywhere in India.</div>
<div className="cngcon11">Financing Up to 90%</div>
<div className="cngcon12">Affordable financing solutions with up to 90% coverage, making it hassle-free to convert your vehicle to CNG today.</div>

</div>


<div className="backhead4">
            <div className="cngf1">Our Reach</div>
            <div className="cngf2">Driving Towards a Greener Future</div>
            <div className="cngf3">We’re committed to creating a cleaner, greener environment! Our CNG conversion services are now available in 6 states and over 7 cities, providing eco-friendly solutions for all types of vehicles—from three-wheelers and everyday cars to heavy-duty commercial vehicles.</div>
<button className='button4'>Find a CNG</button>
<img className='cng2' src={cng2} alt="" />



</div>

    </div>
  );
;}

export default CNGVehicles;