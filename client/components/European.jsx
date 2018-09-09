import React, { Component } from "react";


class European extends Component {
  state = {
    counter: 0,
    european: ["26.96", "23.81", "27.27", "30", "40"],
    years: ["2001: 2696724", "2006: 2381076", "2013: 2727009"]
    //{this.state.count}
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log(this.state.counter);

    console.log("clickie", this.state.european[this.state.counter]);
    if (this.state.counter > this.state.european.length) {
      //only if you want to, reset counter back to 0 again
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        european: this.state.european,
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
          this was so you could figure out lists for pop

          <svg height="100%" width="100%">
            <circle
              cx="50%"
              cy="50%"
              r={this.state.european[this.state.counter]}
              stroke="#33BDFF"
              strokeWidth="3"
              fill="#7DD2FB"
            />
          </svg>

          <button onClick={this.handleIncrement}>pop</button>
        </span>
      </div>
    );
  }
}

export default European;
