import React from 'react'

const CenterBox = ({infos}) => {
    const infoList = infos.map((info,index) => {
        return( 
            <div key={index}>
                {info.ceo}
            </div>
        )
    })
    return(
        <div>
            {infoList}
        </div>
    )
}

export default CenterBox;