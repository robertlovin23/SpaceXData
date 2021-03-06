import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
        return(
            <div className="ui inverted stackable menu" style={{color: 'white'}}>
                <Link to="/" className="item">
                    <h3 style={{textTransform:"uppercase"}}>SpaceX Data</h3>
                </Link>
                <div className="right menu">
                    <Link to="/launches" className="item">
                        Launches
                    </Link>
                    <Link to="/launchpad" className="item">
                        Launchpads
                    </Link>
                    <Link to="/rockets" className="item">
                        Rockets
                    </Link>
                </div>
            </div>
        )
}

export default Header;