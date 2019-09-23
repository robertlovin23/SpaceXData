import React from 'react'
import LaunchItem from './LaunchItem'
import '../../App.css'

const RocketList = ({ rockets }) => {
    const dataList = rockets.map((rocket, index) => {
         return (
            <LaunchItem rocket={rocket} key={index}/>
        )
    })
    return (
        <div className="ui divided items container" id="launchItem">{dataList}</div>
    )
}

export default RocketList;