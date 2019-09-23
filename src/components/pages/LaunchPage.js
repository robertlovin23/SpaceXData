import React from 'react'
import SearchBar from '../launch/SearchBar'
import RocketList from '../launch/ArticleList'
import medium from '../../api/medium'

class LaunchPage extends React.Component{
    constructor(){
      super()
      this.state = {
          rockets: [],
          start_date: "",
          end_date: "",
          rocket_name: "",
          nationality: "",
          customer: ""
      }
    }
    submitTerm = (start_term,end_term,rocket_name, nationality, customer) => {
      const startDate = start_term; 
      const endDate = end_term;
        this.setState({
          start: startDate,
          end: endDate
        })
        this.componentDidMount(startDate,endDate,rocket_name,nationality, customer)
    }
    componentDidMount = async (startDate,endDate,rocket_name,nationality,customer) => {
        const response = await medium.get(`/launches` ,{
          params: {
            start: startDate,
            end: endDate,
            rocket_name: rocket_name,
            nationality: nationality,
            customer: customer
          }
        })
        this.setState({
          rockets: response.data
        })
        console.log(response.data)
      }
    render() {
      if(!this.state.rockets.length) {
          return(
          <div>
            <SearchBar onSearchSubmit={this.submitTerm}/>
              <div >
                <div style={{height: "100px", marginTop: "50px", marginBottom: "50px"}} className="ui active centered inline text loader">
                  No Results...
                </div>
              </div>
            </div>
          )
      }
      else if(this.state.rocket_name.length === null){
        return(
          <div>
            No Results Found
          </div>
        )
      }
      else{
      return(
      <div>
        <SearchBar onSearchSubmit={this.submitTerm}/>
        <RocketList rockets={this.state.rockets}/>
      </div>
      )
      }
    }
  }

export default LaunchPage;