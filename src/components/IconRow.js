import React from 'react'
import "../style/iconrow.css"
import pic1 from "./img/william-daigneault-pT9TTuuzivQ-unsplash.jpg";
import pic2 from "./img/joseph-pearson-U4pn9whHc-I-unsplash.jpg";
import pic3 from './img/Belen.png'

function IconRow() {
    return (
        <div className="container-fluid">
        <div className="row" style={{margin: 50}}>
            <div className="col-md-4">
                <img src={pic1}
                     className="circular-img"
                />
            </div>
            <div className="col-md-4">
                <img src={pic3}
                     className="circular-img"/>
            </div>
            <div className="col-md-4">
                <img src={pic2} className="circular-img"/>
            </div>
        </div>
        </div>
    )
}

export default IconRow