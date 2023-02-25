import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  //! TRY CATCH BLOCK... it will run if something fails
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops.. something is brokes :c</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
