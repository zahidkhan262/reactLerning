import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countt: 1,
    };
  }

  increment1() {
    this.setState({ countt: this.state.countt + 10 });
  }
  decrement2() {
    this.setState({ countt: this.state.countt - 5 });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="counter-2">
            <h2>Class {this.props.name}</h2>
            <h1>{this.state.countt}</h1>
            <div className="incrementDecremnet-btn">
              <button onClick={() => this.decrement2()}>MINUS</button>
              <button onClick={() => this.increment1()}>PLUS</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
