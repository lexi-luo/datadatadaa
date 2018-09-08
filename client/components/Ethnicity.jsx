import React, { Component } from "react";

let nzEthnicities = [
  {
    ethnicity: "New Zealand European",
    2001: 2696724,
    2006: 2381076,
    2013: 2727009
  }
];

class Circle extends Component {
  state = {
    radius: ["28", "36", "49", "62", "78"],
    counter: 0,
    years: ["2696724", "2381076", "2727009"]
    //{this.state.count}
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log(this.state.counter);

    console.log("clickie", this.state.radius[this.state.counter]);
    if (this.state.counter > this.state.radius.length) {
      //only if you want to, reset counter back to 0 again
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        radius: this.state.radius,
        counter: this.state.counter + 1
      });
    }
  };

  render() {
    return (
      <div>
        <span>
          <ul>
            {this.state.years.map(year => (
              <li key={year}> {year} </li>
            ))}
          </ul>

          <button onClick={this.handleIncrement}>go up</button>

          <svg height="500" width="500">
            <circle
              cx="250"
              cy="250"
              r={this.state.radius[this.state.counter]}
              stroke="#33BDFF"
              strokeWidth="3"
              fill="#7DD2FB"
            />
          </svg>
        </span>
      </div>
    );
  }
}

export default Circle;
