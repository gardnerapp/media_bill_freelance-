import React from "react";
import "../style/Card.css";


function Card() {
    return (
        <div className="container-fluid">
        <div className="row" style={{marginTop: 50, marginBottom: 50}}>
            <div className="col-lg-4">

            </div>

            <div className="col-lg-4 myCol">
                <h2 className="quote">
                    Hello, my name Is Jonathan Belen. I am a producer with over 5 years of experience in content
                    creation!
                </h2>

            </div>
            <div className="col-lg-4">

            </div>
        </div>
        </div>
    )
}

export default Card

