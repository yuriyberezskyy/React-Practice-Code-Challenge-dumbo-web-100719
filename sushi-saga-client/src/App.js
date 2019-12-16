import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    pickedSushi: [],
    sushiIndex: 4,
    sushisToDisplay: [],
    customerWallet: 150
  }

  pickSushiToEat = (sushiObj) =>{
   this.setState({
     pickedSushi: [...this.state.pickedSushi, sushiObj],
     customerWallet: this.state.customerWallet - sushiObj.price
   })
  }

  moreSushi = () => {

    const fourSushis = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)

    this.setState({
      sushisToDisplay: fourSushis,
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  

  
  componentDidMount(){
     fetch(API) 
       .then(response => response.json())
       .then(sushisFromAPI => {
            this.setState({
              sushis: sushisFromAPI,
              sushisToDisplay: sushisFromAPI.slice(0,4)
            })
       })
  }

  

  render() {

    
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushisToDisplay} pickSushiToEat={this.pickSushiToEat} moreSushi={this.moreSushi}
        eatSushi={this.eatSushi} />
        <Table pickedSushi={this.state.pickedSushi} customerWallet={this.state.customerWallet} />
      </div>
    );
  }
}

export default App;