import { Component } from "react";

// import { Component } from "react";
// import CounterWithClasses from "./components/CounterWithClasses";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       step: 5,
//     };
//   }
//   handleStepChange = ({ target: { value } }) => {
//     this.setState({ step: Number(value) });
//   };
//   render() {
//     return (
//       <>
//         <input
//           type="number"
//           value={this.state.step}
//           onChange={this.handleStepChange}
//         />
//         <CounterWithClasses step={this.state.step} />;
//       </>
//     );
//   }
// }
// export default App;

class CounterWithClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  dec = () => {
    const {
      state: { count },
      props: { step },
    } = this;
    this.setState({ count: count - step });
  };
  inc = () => {
    const {
      state: { count },
      props: { step },
    } = this;
    this.setState({ count: count + step });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <div>Count :{count}</div>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </>
    );
  }
}
export default CounterWithClasses;
