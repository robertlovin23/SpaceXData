import React from 'react'
import medium from '../../api/medium'
import RocketList from '../rocket/RocketList'

class RocketPage extends React.Component{
    constructor() {
        super()
        this.state={
            rockets: []
        }
    }

    componentDidMount = async () => {
        const response = await medium.get('/rockets')
        this.setState({
            rockets: response.data
        })
        console.log(response.data)
    }
    render() {
        if(!this.state.rockets.length) {
            return(
            <div className="noTopPad" style={{paddingTop: "0rem 0"}}>
                <div className="padArea"style={{paddingTop:'100px',marginTop: "-1rem", width: '100%!important'}}></div>
                <div style={{height: "100%!important"}}>
                  <div style={{height: "100px", marginTop: "50px", marginBottom: "50px"}} className="ui active centered inline text loader">
                    Loading...
                  </div>
                </div>
              </div>
            )
        }
        else{
            return(
            <div>
                <div className="rocketArea"style={{paddingTop:'100px',marginTop: "-1rem",marginBottom:"0rem", width: '100%!important'}}>
                </div>
                <RocketList rockets={this.state.rockets}/>
            </div>
        )}
    }
}

export default RocketPage;