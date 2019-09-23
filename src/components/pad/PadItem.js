import React from 'react'
import "../../App.css"

const PadItem = ({ pad }) => {
    return(
         <div key={pad.id} className="column" id="padItem" style={{marginBottom: "20px"}}>
            <div className="ui card">
                <div className="ui content">
                    <div className="header">{pad.location.name}</div>
               </div>
               <div className="content">
                    <div className="ui sub header">
                        Status: {pad.status}
                        <br/>
                        Location: {pad.location.region}
                        <br/>
                    </div>
                    <div className="description">
                        {pad.details}
                    </div>
                    <div>
                        <a style={{marginTop: "10px", textDecoration: 'none'}} href={pad.wikipedia} className="ui button primary">Read More</a>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default PadItem;