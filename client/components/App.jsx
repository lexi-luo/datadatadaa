// import European from "./European";
// import Maori from './Maori';
import ReactDOM from 'react-dom';
import React, { Component } from 'react'



class App extends Component {
  state = {
    counter: 0,
    years: ['2001', '2006', '2013', '20??', '20-??'],
    european: ["287.1", "260.9", "296.9", "330", "370"],
    maori: ["52.6", "56.5", "59.8", "68", "75"],
    pacific: ['23.1', '26.5', '29.5', '35', '40'],
    asian: ['23.8', '35.4', '47.1', '55', '70'],
    other: ['17.2', '20.1', '27.6', '33', '40']
  };



  handleIncrement = () => {
    console.log("clickie", this.state.european[this.state.counter], this.state.maori[this.state.counter]);
    //setState asynchronous calls
    if (this.state.counter > this.state.years.length) {
      //only if you want to, reset counter back to 0 again
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  };

  renderNames() {
    if (this.state.counter.length === 0) return 'nada here';
    return <ul>{this.state.european[this.state.counter]}</ul>
  }

  render() {
    return (
      <div>

        <h1>lalalalalalalalal </h1>

        {/* {this.renderNames()} */}


        <p>maybe get bootstrap in.... connect knex?
        figure how to move functions and state into app without breaking it!!!! maybe pass props into index.js, randomize where the bubbles start on page... maybe in props rather than app
        </p>

        get titles over the svgs figure out why the z-index thing doesn't work for it, knex - redux



        <div>

          <button type='button' className='btn btn-secondary m-2' onClick={this.handleIncrement}>POP</button>
          <h1><span className='badge badge-secondary m-2'>{this.state.years[this.state.counter]}</span></h1>

        </div>

        <svg height="700" width="700">
          <text x="40%" y="70%" fontSize='xx-large'>popped my bubbles</text>
          <circle
            cx="50%"
            cy="50%"
            r={this.state.european[this.state.counter]}
            stroke="#33BDFF"
            strokeWidth="3"
            fill="#7DD2FB"
          />
          <text x="49%" y="50%">European {this.state.european[this.state.counter]}</text>
          <circle
            cx="70%"
            cy="60%"
            r={this.state.maori[this.state.counter]}
            stroke="#A425F0"
            strokeWidth="3"
            fill="#B874E1"
          />
          <text x="69%" y="60%">Maori {this.state.maori[this.state.counter]}</text>
          <circle
            cx="20%"
            cy="50%"
            r={this.state.pacific[this.state.counter]}
            stroke="#1EC150"
            strokeWidth="3"
            fill="#41C369"
          />
          <text x="19%" y="50%">Pacific {this.state.pacific[this.state.counter]}</text>
          <circle
            cx="40%"
            cy="40%"
            r={this.state.asian[this.state.counter]}
            stroke="#F88D1A"
            strokeWidth="3"
            fill="#DDB947"
          />
          <text x="39%" y="40%">Asian {this.state.asian[this.state.counter]}</text>
          <circle
            cx="60%"
            cy="40%"
            r={this.state.other[this.state.counter]}
            stroke="#CD1D24"
            strokeWidth="3"
            fill="#CE6166"
          />
          <text x="59%" y="40%">Other {this.state.other[this.state.counter]}</text>
        </svg>
        {/* <European />
        <Maori /> */}
      </div>
    );
  };
}

export default App;
