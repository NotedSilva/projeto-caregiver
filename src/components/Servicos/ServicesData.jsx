import '../Servicos/ServicesStyles.css'
import React from 'react';

function ServicesData(props){
    return(
        <div className="s-card">
            <div className="s-image">
                <img src={props.image} alt="img"></img>
            </div>
            <h4>{props.heading}</h4> 
            <p>{props.text}</p>
        </div>
    )
}

export default React.memo(ServicesData);