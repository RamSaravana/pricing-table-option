import React from 'react';
import './PriceTable.css';
import {} from 'bootstrap';
import {} from 'react-bootstrap';
import data from './PricingData';


function PriceTable() {

    return (
        <div className="background">
        <div className="pricing py-5">
        <div className="container">
        <div className="row">
            {/* table starts */}
            {data.map((data)=>{
            return(
            <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                    {/* tier */}
                <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
                    {/* price */}
                <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
                <hr/>
                <ul className="fa-ul">
                    {/* available features */}
                {data.feature.available.map((available)=>{
                return <li><span className="fa-li"><i className="fas fa-check"></i></span>✔ {available}</li>                    
                })}    
                    {/* Not-available features */}
                {data.feature.notAvailable != null ? (data.feature.notAvailable.map((notAvailable)=>{
                return <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>⤫ {notAvailable}</li>
                })): null }
                </ul>
                <div className="d-grid">
                    <button className="btn"><a href="/#" >BUTTON</a></button>
                </div>
            </div>
            </div>
            </div>
            )})}
        </div>            
        </div>  
        </div>  
            <div class="attribution">© Coded by <a href="https://www.linkedin.com/in/ramsaravanaraja/" title="RamSaravana_Linkedin_Profile" target="_blank" rel="noreferrer">RamSaravanaRaja</a></div>        
        </div>
    )
}

export default PriceTable;
