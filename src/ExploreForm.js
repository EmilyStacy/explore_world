import { render } from "@testing-library/react";
import { Component } from 'react';
import React from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
        this.setSearch = this.setSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setSearch(event){
        event.preventDefault();
        this.setState({input: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onHandleSearch(this.state.input);
    }

    render(){
        return(
            
            <form onSubmit = {this.handleSubmit}>
                 <div id="js-form-1" className="kidDiv"></div>
                 <label htmlFor="countryName" className="azure"> Which country do you want to know?<br />You can search by the whole country name or part of the country name.
            </label>
                 <input onChange= {this.setSearch} value = {this.state.input} placeholder="type a country name" type="text" className="inputFont" id="inputText"  required></input>
                <button type="submit" id="js-button" className="button" value = "Submit">Go!</button>
             </form>
        )
    }

}

// export default  ({handleInput,updateInput,input})=> {
       
//     return (
        
//             <form onSubmit = {this.handleSubmit}>
//                 <div id="js-form-1" className="kidDiv"></div>
//                 <label htmlFor="countryName" className="azure"> Which country do you want to know?<br />You can start by typing a few letters!
//             </label>
//                 <input onChange= {updateInput} value = {input} placeholder="type a country name" type="text" className="inputFont" id="inputText"  required></input>
//                 <input type="submit" id="js-button" className="button" value="Go!" onSubmit = {handleSearch}  />
//             </form>

//         );
    
// }

export default Form;
