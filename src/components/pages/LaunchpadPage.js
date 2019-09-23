import React from 'react'
import medium from '../../api/medium'
import PadList from '../pad/PadList'
import '../../../src/App.css'

class LaunchpadPage extends React.Component{
    constructor(){
        super()
        this.state={
            pads: []
        }
    }
    componentDidMount =  async () => {
        const response = await medium.get('/launchpads')
        this.setState({
            pads: response.data
        })
        console.log(response.data)
    }
    render() {
        if(!this.state.pads.length) {
            return(
            <div>
                <div className="padArea"style={{paddingTop:'100px', width: '100%!important'}}></div>
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
                    <div className="padArea" style={{paddingTop:'100px',marginTop: "-1rem", width: '100%!important'}}>
                    </div>
                    <PadList pads={this.state.pads}/>
                </div>
            
        )}
    }
}

export default LaunchpadPage;