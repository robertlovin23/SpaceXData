import React from 'react'
import {Button, Header, Modal} from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import '../../App.css'

const LaunchItem = ({ rocket }) => {
    return(
            <div key={rocket.mission_number} className="ui item">
                <div className="image">
                    <img src={rocket.links.mission_patch} alt={rocket.mission_name}/>
                </div>
                <div className="content">
                    <a href={rocket.links.article_link} className="header">{rocket.mission_name}</a>
                    <div className="description">
                        <span>{rocket.details}</span>
                        <br></br>
                        <div style={{display:'inline-block', marginTop:'10px'}} className="ui horizontal list">
                            <div className="item">
                                <h5>Rocket Type: </h5>{rocket.rocket.rocket_name}
                            </div>
                            <div className="item">
                                <h5>Launch Year:</h5>{rocket.launch_year}
                            </div>
                            <div className="item">
                                <h5>Launch Site:</h5>{rocket.launch_site.site_name}
                            </div>
                        </div>   
                        <br></br>
                        <div style={{display:'inline-block', marginTop:'10px'}} className="ui horizontal list">
                            <div className="item">
                                <h5>Customer: </h5>{rocket.rocket.second_stage.payloads[0].customers}
                            </div>
                            <div className="item">
                                <h5>Nationality:</h5>{rocket.rocket.second_stage.payloads[0].nationality}
                            </div>
                            <div className="item">
                                <h5>Payload Type:</h5>{rocket.rocket.second_stage.payloads[0].payload_type}
                            </div>
                        </div>                  
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <Modal trigger={<Button className="ui primary button">Watch Video</Button>}>
                            <Modal.Header>Watch Video</Modal.Header>
                            <Modal.Content>
                                <ReactPlayer width="100%!important" height="500px" url={rocket.links.video_link} title={rocket.rocket.rocket_name} allowFullScreen></ReactPlayer>
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </div>
    )
}

export default LaunchItem;