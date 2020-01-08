import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Header} from './src/Components/';
import FetchCoinData from './src/Actions/FetchCoinData';

function App({crypto, onFetchCoinData}) {
  const [state, setState] = React.useState(crypto);

  React.useEffect(() => {
    const res = onFetchCoinData();
    console.log(res);
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

const mapStateToProps = state => ({crypto: state.crypto});

const mapDispatchToProps = dispatch => ({
  onFetchCoinData: dispatch => FetchCoinData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
