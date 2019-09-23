import React from 'react'
import RocketItem from './RocketItem'

const RocketList = ({ rockets }) => {
    const rocketList = rockets.map((rocket,index)=> {
        return(
            <RocketItem rocket={rocket} key={index}/>
            )
        })   
        return(
            <div className="ui container">
                <div className="ui relaxed grid">
                    <h1 style={{textAlign: 'center', marginTop:'30px'}}>Rockets</h1>
                    <div className="doubling four column row">
                        {rocketList}
                    </div>
                </div>
            </div>
        )
    }
export default RocketList;