import React from 'react'
import medium from '../../api/medium'

class NextLaunch extends React.Component{
    constructor(){
        super();
        this.state={
            nextLaunch: {}
        }
    }
    componentDidMount = async () => {
        const response = await medium.get('/launches/next')
        this.setState({
            nextLaunch: response.data
        })
        console.log(this.state.nextLaunch)
    }
    render() {
        const nextLaunch = this.state.nextLaunch;
        const date = new Date(nextLaunch.launch_date_local)
        const day = date.getDate()+ 1;
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.toLocaleTimeString('en-US')
        console.log(day,month,year)
        if(!this.state.nextLaunch){
            return(
                <div style={{width: '100%!important'}}>
                    <div className="ui container" style={{paddingTop: '150px'}}>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div style={{height: "100px", marginTop: "50px", marginBottom: "50px"}} className="ui active centered inline text loader">
                                        Loading...
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="ui centered grid">
                    <div className="eight wide column" id="launchColumn" style={{textAlign: "left"}}>
                        <h1>{nextLaunch.mission_name}</h1>
                        <h3>Launching on {month}/{day}/{year} at {hours}</h3>
                        <div>
                            <p>{nextLaunch.details}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default NextLaunch;