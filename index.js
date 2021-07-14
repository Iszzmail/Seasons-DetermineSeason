import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner'




class App extends React.Component {
 
    state = { latitude: null, errorMessage: "" }
  

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({ latitude: position.coords.latitude })},
      (error) => {this.setState({ errorMessage: error.message })})
  }


  renderContent(){
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
  }


  if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.latitude}/>;
  }


  if (!this.state.latitude && !this.state.errorMessage) {
    return <Spinner message="Please click 'Allow'"/>
  }
}
  
 
  render() {
return(
  <div>
    {this.renderContent()}
  </div>
)
}
}

ReactDOM.render(<App />, document.querySelector("#root"));
