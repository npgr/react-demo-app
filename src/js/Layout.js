import React from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/Appbar';

import Menu from './Menu';

import AppState from './store/AppState'

export default class Layout extends React.Component {
	
	handleOpen = () => AppState.openMenu()
	
	render() {
	 const topLine = { height: "7px", backgroundColor: "#34829c"}
	 var img = { maxWidth: "100%", height: "auto" }
	 var line = { display:"flex", backgroundColor:"#9ccc66", height:"5px" }
	 var barStyle = {backgroundColor: '#3a80ab', fontSize: '16px', fontWeight: '200'}
	 	 
	 return(
	  <MuiThemeProvider>
	   <div>
		<Appbar title="Demo App" style={barStyle}
			onLeftIconButtonTouchTap={this.handleOpen.bind(this)}/>
		<div style={topLine} />
			<Menu />
			{this.props.children}
	   </div>
	  </MuiThemeProvider>
	)
  }
}

