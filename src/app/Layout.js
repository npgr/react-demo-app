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
		this.closeMenu = this.closeMenu.bind(this)
		this.openMenu = this.openMenu.bind(this)
	}
	
	openMenu = () => this.setState({menuIsOpen: true})

	closeMenu = () => this.setState({menuIsOpen: false})
	
	render() {
	 const { closeMenu, openMenu } = this
	 
	 const topLine = { height: "7px", backgroundColor: "#34829c"}
	 let img = { maxWidth: "100%", height: "auto" }
	 let line = { display:"flex", backgroundColor:"#9ccc66", height:"5px" }
	 let barStyle = {backgroundColor: '#3a80ab', fontSize: '16px', fontWeight: '200'}
	 	 
	 return(
	  <MuiThemeProvider>
	   <div>
		<Appbar title="Demo App" style={barStyle}
			onLeftIconButtonTouchTap={openMenu}/>
		<div style={topLine} />
			<Menu closeMenu={closeMenu} menuIsOpen={this.state.menuIsOpen}
				history={this.props.history}/>
			{this.props.children}
	   </div>
	  </MuiThemeProvider>
	)
  }
}

