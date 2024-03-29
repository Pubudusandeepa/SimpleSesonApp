import React from 'react';
import ReactDOM from 'react-dom';
import SessonDisplay from './sessonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    state = { lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
         position => 
           this.setState({lat: position.coords.latitude})
        ,
        err =>
            this.setState({errorMessage: err.errorMessage})
        
        
      );
  }
    
     renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return(
                <div>Error: {this.state.errorMessage}</div>
          
            );
              
        }
        if(!this.state.errorMessage && this.state.lat ){
            return(
                < SessonDisplay lat={this.state.lat}/>
            ); 
           
          
        }
         return <Spinner message="Please accept request" />;
     }

  //React says we have to define render!!  
    render(){
           return(
               <div className="border red">
               {this.renderContent()}
               </div>
           );
    }
}

ReactDOM.render(
    <App />,
     document.querySelector('#root')
);