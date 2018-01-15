//import './index.css';
import App from '../components/App/App';

export default () => {
  return (<div>
    <App/>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
  </div>);
};
