import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react'
import AppState from './store/AppState'

import Drawer from 'material-ui/Drawer';
import ShopIcon from 'material-ui/svg-icons/action/shopping-cart';
import SavedIcon from 'material-ui/svg-icons/action/assignment';
import ProdIcon from 'material-ui/svg-icons/action/loyalty';
import CustIcon from 'material-ui/svg-icons/social/person';
import SetIcon from 'material-ui/svg-icons/action/settings';
import AboutIcon from 'material-ui/svg-icons/action/perm-device-information';

@observer
export default class Menu extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			open: this.props.open
		}
	}
	
	handleClose = () => AppState.closeMenu()
 
	render() {
	 var barStyle = {backgroundColor: '#3a80ab', fontSize: '16px', fontWeight: '200'}
	 var ShopIStyle = { color: '68c122'}
	 var SavedIStyle = { color: 'blue'} //283593
	 var ProdIStyle = { color: 'EC407A'}
	 var CustIStyle = { color: 'AB47BC'}
	 var SetIStyle = { color: 'F57C00'}
	 var AboutIStyle = { color: '1E88E5'}
	 var imgStyle = { width: '200px', height: '95px'}
	 var menuStyle = {color:'white',marginTop:'-43px',marginLeft:'120px',fontSize:'20px',marginBottom:'27px'}
	 
	 return(
	  <Drawer open={AppState.menuOpen} width={200}>
		<img src="../images/menuimg2.jpg" style={imgStyle}/>
		<h2 style={menuStyle}>Menu</h2>
		<div className="menuItem">
			<ShopIcon style={ShopIStyle}/>
			<Link to='order' onClick={this.handleClose.bind(this)}>New Order</Link>
		</div>
		<hr />
		<div className="menuItem">
			<SavedIcon style={SavedIStyle}/>
			<Link to='saved_orders' onClick={this.handleClose.bind(this)}>Saved Orders</Link>
		</div>
		<hr />
		<div className="menuItem">
			<ProdIcon style={ProdIStyle}/>
			<Link to='/' onClick={this.handleClose.bind(this)}>Products</Link>
		</div>
		<hr />
		<div className="menuItem">
				<CustIcon style={CustIStyle}/>
			<Link to='customers' onClick={this.handleClose.bind(this)}>Customers</Link>
		</div>
		<hr />
		<div className="menuItem">
			<SetIcon style={SetIStyle}/>
			<Link to='settings' onClick={this.handleClose.bind(this)}>Settings</Link>
		</div>
		<hr />
		<div className="menuItem">
			<AboutIcon style={AboutIStyle}/>
			<Link to='about' onClick={this.handleClose.bind(this)}>About</Link>
		</div>
		<hr />
	  </Drawer>
	)
  }
}

