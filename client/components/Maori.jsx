import React, { Component } from "react";


class Maori extends Component {
  state = {
    counter: 0,
    maori: ["5.26", "5.65", "5.98", "7", "7.5"],
    years: ["2001: 526281", "2006: 565329", "2013: 598605"]
    //{this.state.count}
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log(this.state.counter);

    console.log("clickie combine this into one clickie", this.state.maori[this.state.counter]);
    if (this.state.counter > this.state.maori.length) {
      //only if you want to, reset counter back to 0 again
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        maori: this.state.maori,
        counter: this.state.counter + 1
      });
    }
  };

  render() {
    return (
      <div>
        <span>
          <ul>
            {this.state.years.map(year =>
              <li key={year}> {year} </li>
            )}
          </ul>

          <svg height="100%" width="100%">
            <circle
              cx="70%"
              cy="70%"
              r={this.state.maori[this.state.counter]}
              stroke="#A425F0"
              strokeWidth="3"
              fill="#B874E1"
            />
          </svg>
          <button onClick={this.handleIncrement}>pop</button>
        </span>
      </div>
    );
  }
}

export default Maori;
