import { AfterProps } from '@jaredpalmer/after';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './logo.svg';

class Home extends React.Component<AfterProps<{}>> {
  public render() {
    return (
      <div className="page">
        <h1>RxJS Recompose TypeScript</h1>
        <ol>
          <li value="2">
            <Link to="/2-prop-passing">Prop Passing</Link>
          </li>
          <li>
            <Link to="/3-ajax">Ajax</Link>
          </li>
          <li>
            <Link to="/4-events-as-stream">Events as Stream</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default Home;
