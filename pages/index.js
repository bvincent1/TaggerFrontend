//import './index.css';
import Head from 'next/head';
import App from '../components/App/App';

export default () => {
  return (<div>
    <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
    </Head>
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
