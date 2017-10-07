import React from 'react';
import {Router, Overlay, Stack, Scene} from 'react-native-router-flux'
import init from './pages'

export default class App extends React.Component {
  render() {
    return (
	    <Router>
			    <Stack
				    hideNavBar
				    key="root">
				    <Scene key="init" component={init} />
			    </Stack>
	    </Router>
    );
  }
}
