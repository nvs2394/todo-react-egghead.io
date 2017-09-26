import React, { Component } from 'react';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    this.setState({
      route
    });

    window.history.pushState(null, '' , route);
  }

  getChildContext = () =>{
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  render(){
    return (
      <div>{this.props.children}</div>
    )
  }
}