import React from "react";


export default  ({handleInput,updateInput,input})=> {
       
    return (
        
            <form>
                <div id="js-form-1" className="kidDiv"></div>
                <label htmlFor="countryName" className="azure"> Which country do you want to know?<br />You can start by typing a few letters!
            </label>
                <input onChange= {updateInput} value = {input} placeholder="type a country name" type="text" className="inputFont" id="inputText"  required></input>
                <input type="submit" id="js-button" className="button" value="Go!" onClick = {handleInput}  />
            </form>

        );
    
}
