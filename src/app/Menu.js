import React from 'react';
//import { Link } from 'react-router';
//import { browserHistory } from 'react-router';
import { observer } from 'mobx-react'

import Drawer from 'material-ui/Drawer';
import ShopIcon from 'material-ui/svg-icons/action/shopping-cart';
import SavedIcon from 'material-ui/svg-icons/action/assignment';
import ProdIcon from 'material-ui/svg-icons/action/loyalty';
import CustIcon from 'material-ui/svg-icons/social/person';
import SetIcon from 'material-ui/svg-icons/action/settings';
import AboutIcon from 'material-ui/svg-icons/action/perm-device-information';

@observer
export default class Menu extends React.Component {
	
	goPage = this.goPage.bind(this)
 
	goPage(e) {
		this.props.closeMenu()
		let route = e.target.id
		this.props.history.push(route)
		//this.context.router.push(route)
		}
	render() {
	 const { closeMenu } = this.props
	 const { goPage } = this
	
	 var barStyle = {backgroundColor: '#3a80ab', fontSize: '16px', fontWeight: '200'}
	 var ShopIStyle = { color: '68c122', marginRight: "5px"}
	 var SavedIStyle = { color: 'blue', marginRight: "5px"}
	 var ProdIStyle = { color: 'EC407A', marginRight: "5px"}
	 var CustIStyle = { color: 'AB47BC', marginRight: "5px"}
	 var SetIStyle = { color: 'F57C00', marginRight: "5px"}
	 var AboutIStyle = { color: '1E88E5', marginRight: "5px"}
	 var imgStyle = { width: '200px', height: '95px'}
	 var menuStyle = {color:'white',marginTop:'-43px',marginLeft:'120px',fontSize:'20px',marginBottom:'27px'}
	 
	 return(
	  <Drawer open={this.props.menuIsOpen} width={200}>
		<img src="./assets/images/menuimg2.jpg" style={imgStyle}/>
		<h2 style={menuStyle}>Menu</h2>
		<div className="menuItem" onClick={goPage} id="order">
			<ShopIcon style={ShopIStyle}/>
			New Order
		</div>
		<hr />
		<div className="menuItem" onClick={goPage} id="saved_orders">
			<SavedIcon style={SavedIStyle}/>
			Saved Orders
		</div>
		<hr />
		<div className="menuItem" onClick={goPage} id="/">
			<ProdIcon style={ProdIStyle}/>
			Products
		</div>
		<hr />
		<div className="menuItem" onClick={goPage} id="customers">
			<CustIcon style={CustIStyle}/>
			Customers
		</div>
		<hr />
		<div className="menuItem" onClick={goPage} id="settings">
			<SetIcon style={SetIStyle}/>
			Settings
		</div>
		<hr />
		<div className="menuItem" onClick={goPage} id="about">
			<AboutIcon style={AboutIStyle}/>
			About
		</div>
		<hr />
	  </Drawer>
	)
  }
}

