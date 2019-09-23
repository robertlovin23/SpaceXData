import React from 'react'

const RocketItem = ({ rocket }) => {
    return(
        <div key={rocket.id} className="column" style={{display: 'inline-block', weight: '80%', paddingBottom: "20px"}}>
            <div className="ui card">
            <div className="ui content">
                <div className="header">
                    {rocket.rocket_name}
                </div>
                <div className="meta">
                    <span className="active">Active: {rocket.active.toString()}</span>
                </div>
                <div className="description">
                    <p>{rocket.description}</p>
                    <h4>Stats:</h4>
                    <ul>
                        <li>Height: {rocket.height.feet} ft</li>
                        <li>Mass: {rocket.mass.lb} lb</li>
                        <li>Diameter: {rocket.diameter.feet} ft</li>
                        <li>Stages: {rocket.stages.toString()}</li>
                        <li>Boosters: {rocket.boosters.toString()}</li>
                        <li>Success Rate: {rocket.success_rate_pct.toString()}%</li>
                    </ul>
                    <h4>Engine:</h4>
                    <ul>
                        <li>Number of Engines: {rocket.engines.number}</li>
                        <li>Type: {rocket.engines.type}</li>
                        <li>Layout: {rocket.engines.layout}</li>
                        <li>Propellant 1: {rocket.engines.propellant_1}</li>
                        <li>Propellant 2: {rocket.engines.propellant_2}</li>
                        <li>Thrust at Sea Level: {rocket.engines.thrust_sea_level.kN} kN</li>
                    </ul>
                    <h4>Payload: </h4>
                    <ul>
                        <li>Payload Option 1: {rocket.second_stage.payloads.option_1}</li>
                        <li>Payload Option 2: {rocket.second_stage.payloads.option_2}</li>
                    </ul>
                    <h4>Payload Weights: </h4>
                    <ul>
                    {
                        rocket.payload_weights.map((payload_weight,index) => {
                            return(
                                <div key={index}>
                                    <li>Name: {payload_weight.name}</li>
                                    <li>Weight: {payload_weight.lb} lb</li>
                                </div> 
                                )
                        })
                    }
                    </ul>
                    <h4>Landing Legs:</h4>
                    <ul>
                        <li>Number: {rocket.landing_legs.number}</li>
                        <li>Material: {rocket.landing_legs.material}</li>
                    </ul>
                </div>
                <div className="button">
                    <a className="ui primary button" href={rocket.wikipedia}>Read more about the {rocket.rocket_name} on Wikipedia</a>
                </div>

            </div>
            </div>
        </div>
    )
}
export default RocketItem;