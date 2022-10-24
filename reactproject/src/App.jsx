import React, { Component } from 'react';  
var element = <h3 className = "firstAttribute">Hello JavaTpoint</h3>;  
class App extends Component{  
   render(){  
      return(  
         <div>  
              <h1 className="hello" > {element} =  {+ 25+30 }</h1>  
            <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
         </div>  
      );  
   }  
}  
export default App;  