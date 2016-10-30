import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/Appbar';
import Drawer from 'material-ui/Drawer';

export default class Layout extends React.Component {
 
	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}
	
	//handleToggle = () => this.setState({open: !this.state.open});
	handleToggle() {
		this.setState({open: !this.state.open});
	} 

	handleOpen = () => this.setState({open: true});
	
	handleClose = () => this.setState({open: false});
	
	go_customers() {
		this.setState({open: false});
		//this.context.router.push(null, 'customers')
	}
  
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
		<Drawer open={this.state.open} width={200}>
			<h2>Menu</h2>
			<div><Link to='order' onClick={this.handleClose.bind(this)}>New Order</Link></div>
			<div><Link to='saved_orders' onClick={this.handleClose.bind(this)}>Saved Orders</Link></div>
			<div><Link to='customers' onClick={this.handleClose.bind(this)}>Customers</Link></div>
			<div><Link to='/' onClick={this.handleClose.bind(this)}>Products</Link></div>
			<div><Link to='settings' onClick={this.handleClose.bind(this)}>Settings</Link></div>
			<div><Link to='about' onClick={this.handleClose.bind(this)}>About</Link></div>
		</Drawer>
			{this.props.children}
	   </div>
	  </MuiThemeProvider>
	)
  }
}

