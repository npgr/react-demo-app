import React from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/Appbar';

import Menu from './Menu';

export default class Layout extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			menuIsOpen: false
		}
	}
	
	openMenu = () => this.setState({menuIsOpen: true})

	closeMenu = () => this.setState({menuIsOpen: false})
	
	render() {
	 const topLine = { height: "7px", backgroundColor: "#34829c"}
	 let img = { maxWidth: "100%", height: "auto" }
	 let line = { display:"flex", backgroundColor:"#9ccc66", height:"5px" }
	 let barStyle = {backgroundColor: '#3a80ab', fontSize: '16px', fontWeight: '200'}
	 	 
	 return(
	  <MuiThemeProvider>
	   <div>
		<Appbar title="Demo App" style={barStyle}
			onLeftIconButtonTouchTap={this.openMenu.bind(this)}/>
		<div style={topLine} />
			<Menu closeMenu={this.closeMenu.bind(this)} menuIsOpen={this.state.menuIsOpen}/>
			{this.props.children}
	   </div>
	  </MuiThemeProvider>
	)
  }
}

