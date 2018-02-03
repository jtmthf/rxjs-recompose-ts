import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './logo.svg';

class Layout extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
