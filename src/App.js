import React from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
     countries:[],
     stats:[],
     searchField:''
    }
  }
  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries')
    const countries = await resp.json()
    this.setState({countries})
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`) 
      const data = await resp.json()
      if(data.length)
      this.setState(prevState => (
        {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
      ))
    })
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }
  render(){ // rendering components
    const {stats,searchField} = this.state
    const filteredCountries = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className="App">
        <h1>Covid Tracker</h1>
        <SearchBox placeholder="Enter Country Name" handleChange={this.handleChange}/>
        <CountryList stats = {filteredCountries}/>
    </div>
    )
  }
}

export default App;
