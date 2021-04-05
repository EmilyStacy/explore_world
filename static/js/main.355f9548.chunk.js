(this["webpackJsonpexplore-world"]=this["webpackJsonpexplore-world"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var s=n(5),r=n.n(s),a=n(18),i=n.n(a),c=(n(129),n(23)),o=n(24),l=n(17),u=n(26),h=n(25),j=(n(130),n(55),n(1)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={input:""},s.setSearch=s.setSearch.bind(Object(l.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"setSearch",value:function(e){e.preventDefault(),this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onHandleSearch(this.state.input)}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{id:"js-form-1",className:"kidDiv"}),Object(j.jsxs)("label",{htmlFor:"countryName",className:"azure",children:[" Which country do you want to know?",Object(j.jsx)("br",{}),"You can search by the whole country name or part of the country name."]}),Object(j.jsx)("input",{onChange:this.setSearch,value:this.state.input,placeholder:"type a country name",type:"text",className:"inputFont",id:"inputText",required:!0}),Object(j.jsx)("button",{type:"submit",id:"js-button",className:"button",value:"Submit",children:"Go!"})]})}}]),n}(s.Component),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"bg",className:"bg marginBackground position"})}}]),n}(s.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).returnHome=s.returnHome.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"returnHome",value:function(){this.props.onReturnHome()}},{key:"render",value:function(){var e=0===this.props.countryList[0].currencies.length?"":this.props.countryList[0].currencies.map((function(e){return Object(j.jsxs)("li",{children:[e.symbol,e.code]})}));return Object(j.jsxs)("div",{id:"center",className:"transitionColor",children:[Object(j.jsx)("button",{type:"submit",id:"js-button",className:"button",value:"Submit",onClick:this.returnHome,children:"Return"}),Object(j.jsxs)("h1",{className:"azure",children:[this.props.countryList[0].name," "]}),Object(j.jsx)("img",{className:"imgSize margin2 transitionColor",src:this.props.countryList[0].flagURL,alt:"flag"}),Object(j.jsxs)("ul",{className:"ulFormat",children:[Object(j.jsxs)("li",{className:"liFormat",children:[Object(j.jsx)("b",{children:"Capital:"}),Object(j.jsx)("p",{children:this.props.countryList[0].capital})]}),Object(j.jsxs)("li",{className:"liFormat",children:[Object(j.jsx)("b",{children:"Timezone:"}),Object(j.jsx)("p",{children:this.props.countryList[0].timezones.toString().split(",").join()})]}),Object(j.jsxs)("li",{className:"liFormat",children:[Object(j.jsx)("b",{children:"Language:"}),Object(j.jsx)("p",{children:this.props.countryList[0].language})]}),Object(j.jsxs)("li",{className:"liFormat",children:[Object(j.jsx)("b",{children:"Currencies:"}),e]}),Object(j.jsxs)("li",{className:"liFormat",children:[Object(j.jsx)("b",{children:"Regional Blocs:"}),Object(j.jsx)("p",{children:this.props.countryList[0].regional_blocs})]})]})]})}}]),n}(s.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={input:"",hasError:!1,countryInfo:[],showReturnPage:!1},s.handleSearch=s.handleSearch.bind(Object(l.a)(s)),s.returnHome=s.returnHome.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"handleSearch",value:function(e){var t=this;fetch("https://restcountries.eu/rest/v2/name/"+e).then((function(e){if(e.ok&&null!==e.body&&0!==e.body)return console.log("response is"+e.json),e.json()})).then((function(e){var n=[];n.push({name:e[0].name,capital:e[0].capital?e[0].capital:"N/A",countryCode:e[0].alpha2Code,countryFullCode:e[0].alpha3Code,flagURL:e[0].flag,timezones:e[0].timezones,language:e[0].languages[0]?e[0].languages[0].name:"N/A",regional_blocs:e[0].regionalBlocs[0]?e[0].regionalBlocs[0].name:" N/A",currencies:e[0].currencies}),t.setState({countryInfo:n,showReturnPage:!0}),console.log(t.state.countryInfo)})).catch((function(e){t.setState({hasError:!0})}))}},{key:"returnHome",value:function(){this.setState({input:"",hasError:!1,countryInfo:[],showReturnPage:!1}),console.log("state is"+this.state.showReturnPage)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[!this.state.showReturnPage&&Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"centerDiv",id:"mainDiv",children:[!this.state.showReturnPage&&Object(j.jsx)("h1",{className:"kidDiv white",children:"Explore the world"}),!this.state.showReturnPage&&Object(j.jsx)(b,{onHandleSearch:this.handleSearch}),!this.state.showReturnPage&&Object(j.jsx)("div",{id:"#js-error-message",className:this.state.hasError?"js-error-message":"hidden",children:" Something went wrong: The input is invalid.Try another word."}),this.state.showReturnPage&&Object(j.jsx)(m,{onReturnHome:this.returnHome,countryList:this.state.countryInfo}),!this.state.showReturnPage&&Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{className:"footer",id:"footer",children:["photo by ",Object(j.jsx)("a",{href:"https://unsplash.com/photos/DBYV_V5spes",children:"Tom Ritson"})]})})]})]})}}]),n}(s.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,428)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}},[[427,1,2]]]);
//# sourceMappingURL=main.355f9548.chunk.js.map