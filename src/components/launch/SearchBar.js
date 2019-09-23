import React from 'react'
import '../../../src/App.css'

class SearchBar extends React.Component{
        state = {
            start_term: "2006",
            end_term: "2018",
            rocket_name: "Falcon 9",
            nationality: "",
            customer: ""

        }
    onStartChange = (event) => {
        this.setState({
            start_term: event.target.value
        })
    }
    onEndChange = (event) => {
        this.setState({
            end_term: event.target.value
        })
    }
    rocketNameChange = (event) => {
        this.setState({
            rocket_name: event.target.value
        })
    }
    nationalityChange = (event) => {
        this.setState({
            nationality: event.target.value
        })
    }
    customerChange = (event) => {
        this.setState({
            customer: event.target.value
        })
    }
    onSearchSubmit = (event) => {
        if(this.state.start_term && this.state.end_term === null){
            event.preventDefault();
            this.props.onSearchSubmit(
                this.state.rocket_name
            )
        }
        else {
            event.preventDefault();
            this.props.onSearchSubmit(
                this.state.start_term, 
                this.state.end_term, 
                this.state.rocket_name,
                this.state.nationality,
                this.state.customer
        )}
    }
    render() {
        return(
        <div className="searchArea searchBar" style={{paddingTop:'100px', width: '100%!important'}}>
            <h1 style={{textAlign: 'center', color: 'white'}}>Space X Launches</h1>
            <div className="ui container segment">
                <form className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>Start Date:</label>
                            <div className="field">
                            <select value={this.state.start_term} onChange={this.onStartChange}>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                            </select>
                            </div>
                        </div>
                        <div className="field">
                            <label>End Date:</label>
                            <div className="field">
                                <select value={this.state.end_term} onChange={this.onEndChange}>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                        <label>Nationality</label>
                            <input type="text" 
                            placeholder="Search..." 
                            value={this.state.nationality}  
                            onChange={this.nationalityChange}
                            style={{width:"100%"}}>       
                            </input>
                        </div>
                        <div className="field">
                        <label>Customer</label>
                            <input type="text" 
                            placeholder="Search..." 
                            value={this.state.customer}  
                            onChange={this.customerChange}
                            style={{width:"100%"}}>       
                            </input>
                        </div>
                    </div>
                    <label>Rocket Type</label>
                        <select style={{marginBottom: '10px'}} value={this.state.rocket_name} onChange={this.rocketNameChange}>
                            <option value="Falcon 9">Falcon 9</option>
                            <option value="Falcon 1">Falcon 1</option>
                            <option value="Falcon Heavy">Falcon Heavy</option>
                        </select>

                    <button className="ui button primary" onClick={this.onSearchSubmit}>Submit</button>
                </form>
            </div>
        </div>
        )
    }
}

export default SearchBar;