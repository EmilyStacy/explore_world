
import './App.css';
import { Component } from 'react';
import ExportForm from './ExploreForm';
let input = '';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    
}
updateInput(event){
  input = event.target.value;
  console.log("input is" + input);
}
handleInput() {
    this.setState({
        data: input
    });
}

// handleSubmit = e => {
//   e.preventDefault();
// }
  render(){
  return (
    <div>
    <div id="bg" className="bg marginBackground position">
    <div className="centerDiv" id="mainDiv">
    <h1 className="kidDiv white">Explore the world</h1>
    <ExportForm updateInput = {this.updateInput} handleInput = {this.handleInput} input = {this.input}/>
  </div>
 
  <footer>
        <p className="footer" id="footer">photo by <a href="https://unsplash.com/photos/DBYV_V5spes">Tom Ritson</a></p>
      </footer>
  </div>
  </div>
 
  )
}
}

export default App;
