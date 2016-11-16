import React from "react";
import { observer } from "mobx-react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TableProducts from './TableProducts'
import NewProduct from './newProduct'

import store from '../store/ProductStore'

@observer
export default class Products extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			dialogIsOpen: false
		}
	}
	
	closeDialog() {
		this.setState({dialogIsOpen: false})
	} 
	
	openDialog() {
		this.setState({dialogIsOpen: open})
	}
	
	changeFilter(e) {
		store.filter = e.target.value
	}
	search() {
		//alert('search')
		//store.filter = this.filter
	}
	
  render() {
	/** inline Style for material-ui components **/
	const newBtn = { color: "white", height: "32px" }
	const search = {color: "white", marginTop: "5px"}
	const srcBtn = {top: "9px", width: "32px", minWidth: "32px", height: "32px"}
	const block = {display: "block"}
	const labelBtn = { padding: "0 20px" }
	const span = {marginRight: "12px"}
	return(
	<div>
		<NewProduct closeDialog={this.closeDialog.bind(this)} dialogIsOpen={this.state.dialogIsOpen}/>
		<div className="responsive">
		  <div style={block}>
			<input className="Search" value={store.filter} placeholder="Search"
				onChange={this.changeFilter.bind(this)}/>
			<div className="responsiveSearchBtn">
			  <FlatButton className="ButtonSearch" style={srcBtn} backgroundColor="#f36f27" onClick={this.search.bind(this)}>
				<SearchIcon style={search}/>
			  </FlatButton>
			</div>
		  </div>
		  <FlatButton className="NewButton" style={newBtn} backgroundColor="#f36f27" 
		    onClick={this.openDialog.bind(this)}>
				<div style={labelBtn}>
					<span style={span}>+</span>Product Keeper
				</div>
		  </FlatButton>
		</div>
		
		<TableProducts store={store} />
	</div>
	)
  }
}

