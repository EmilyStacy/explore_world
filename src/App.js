
import './App.css';
import { Component } from 'react';
import ExportForm from './ExploreForm';
//import Config from './config'
import Homepage from './HomePage';
import ReturnPage from './ReturnPage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      hasError: false,
      countryInfo: [],
      showReturnPage:false 
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.returnHome = this.returnHome.bind(this);
}

handleSearch(input) { 
  const url = process.env.REACT_APP_REST_COUNTRY+ input;
  fetch(url)
  .then(response => {
    if(response.ok && response.body!==null && response.body!==0){
      console.log("response is" + response.json);
      return response.json();
    }})
    .then(responseJson => {
      let tempArr = [];
      tempArr.push({"name": responseJson[0].name,
                   "capital":responseJson[0].capital?responseJson[0].capital:"N/A",
                   "countryCode": responseJson[0].alpha2Code ,
                   "countryFullCode": responseJson[0].alpha3Code ,
                   "flagURL": responseJson[0].flag,
                   "timezones": responseJson[0].timezones,
                   "language" :  responseJson[0].languages[0]?responseJson[0].languages[0].name:"N/A",
                   "regional_blocs": responseJson[0].regionalBlocs[0] ? responseJson[0].regionalBlocs[0].name : " N/A",
                   "currencies": responseJson[0].currencies
                  }
                   );

      this.setState({
        countryInfo: tempArr,
        showReturnPage: true
      });
      console.log(this.state.countryInfo);
    })
    .catch(error => {
      this.setState({hasError:true}) ;
    });
  };
  
  returnHome(){
    this.setState({
      input: '',
      hasError: false,
      countryInfo: [],
      showReturnPage:false
    })
    console.log("state is" + this.state.showReturnPage);
  };
  // getHolidays(countryCode);

  // getYouTube(countryFullCode); 

// handleSubmit = e => {
//   e.preventDefault();
// }
  render(){
  return (
    <div>
    {!this.state.showReturnPage&&<Homepage/>}
    <div className="centerDiv" id="mainDiv">
    {!this.state.showReturnPage&&<h1 className="kidDiv white">Explore the world</h1>}
    {!this.state.showReturnPage&&<ExportForm  onHandleSearch = {this.handleSearch}/>}
    {!this.state.showReturnPage&&<div id = "#js-error-message" className = {this.state.hasError?"js-error-message":"hidden"} > Something went wrong: The input is invalid.Try another word.</div>}
    {this.state.showReturnPage&&<ReturnPage onReturnHome = {this.returnHome} countryList = {this.state.countryInfo}/>}
  {!this.state.showReturnPage&&<footer>
        <p className="footer" id="footer">photo by <a href="https://unsplash.com/photos/DBYV_V5spes">Tom Ritson</a></p>
      </footer>}
  </div>
  </div>
 
  )
}
}

export default App;
