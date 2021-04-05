import { Component } from "react";

import { render } from "@testing-library/react";
class ReturnPage extends Component{
    constructor(props){
        super(props);
        this.returnHome = this.returnHome.bind(this);
    }

    returnHome(){
        this.props.onReturnHome();
    };

    

    render(){
    const currencyItems = this.props.countryList[0].currencies.length === 0?"": this.props.countryList[0].currencies.map
    ((item)=> 
    
         <li>{item.symbol}{item.code}</li>
        
    );
return(
    
    <div id="center" className="transitionColor"> 
        <button type = "submit" id="js-button" className="button" value = "Submit" onClick= {this.returnHome}>Return</button>
        <h1 className = "azure">{this.props.countryList[0].name} </h1>
        <img className = "imgSize margin2 transitionColor" src= {this.props.countryList[0].flagURL} alt='flag'></img>
        <ul className = "ulFormat">
            <li className = "liFormat"><b>Capital:</b>
                <p>{this.props.countryList[0].capital}</p>
            </li>
            <li className = "liFormat"><b>Timezone:</b>
                <p>{this.props.countryList[0].timezones.toString().split(",").join()}</p>
            </li>
           <li className = "liFormat"><b>Language:</b>
                <p>{this.props.countryList[0].language}</p> 
            </li>
          <li className = "liFormat"><b>Currencies:</b>
           {currencyItems}
        
         </li>
         <li className = "liFormat"><b>Regional Blocs:</b>
            <p>{this.props.countryList[0].regional_blocs}</p>
         </li> 
     </ul>
    </div>
)
}

}

export default ReturnPage;