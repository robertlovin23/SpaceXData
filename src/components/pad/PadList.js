import React from 'react'
import PadItem from './PadItem'

const PadList = ({pads}) => {
    const padList = pads.map((pad,index) => {
        return(
            <PadItem pad={pad} key={index}/>
        )
    })
    return(
        <div className="ui container">
            <div className="ui relaxed grid" style={{marginBottom: "0rem"}}>
                <h1 style={{textAlign: 'center', marginTop:'30px'}}>Launch Pad's</h1>
                <div className="doubling four column row">
                    {padList}
                </div>
            </div>
        </div>
    )
}

export default PadList;