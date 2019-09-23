import React from 'react'
import medium from '../../api/medium'
import '../../../src/App.css'
import NextLaunch from '../main/NextLaunch'
// import CenterBox from'../../components/CenterBox'

class MainPage extends React.Component{
    constructor(){
        super()
        this.state={
            infos: {}
        }
    }
     componentDidMount = async () => {
         const response = await medium.get('/info')
         this.setState({
            infos: response.data
         })
         console.log(this.state.infos)
     }

    render() {
        const stats = this.state.infos
            return(
            <div>
                <div className="mainArea ui centered grid" style={{width: '100%!important', paddingTop:"100px"}}>
                    <div className="six wide column" id="mainColumn" style={{textAlign: "left", alignContent: "center", display: "inlineblock"}}>
                        <h1 style={{textAlign: 'center',color:'white'}}>Welcome to Space X!</h1>
                        <p style={{textAlign: 'center', color:"white"}}>{stats.summary}</p>
                    </div>
                    <div className="ui container" style={{color:'white'}}>
                        <h1 >Next Mission: </h1>
                            <NextLaunch />
                    </div>
                </div>
            </div>
            )
        }
    }
                                

export default MainPage;