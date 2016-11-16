//import "../css/main.css"
import React from 'react';
import { observer } from 'mobx-react'

import store from '../store/ProductStore'

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CloseIcon from 'material-ui/svg-icons/content/clear';

@observer
export default class NewProduct extends React.Component {
 
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			category: '',
			brand: '',
			height: 0,
			width: 0,
			notes: ''
		}
	}
	
	save() {
		store.newProduct(this.state)
		/** Create new store product **/
		this.setState({name: '', category: '', brand: '', height: 0, width: 0, notes: ''})
		this.props.closeDialog()
	}
	
	changeName(e) {
		this.setState({name: e.target.value})
	}
	changeCategory(e) {
		this.setState({category: e.target.value})
	}
	changeBrand(e) {
		this.setState({brand: e.target.value})
	}
	changeHeight(e) {
		this.setState({height: e.target.value})
	}
	changeWidth(e) {
		this.setState({width: e.target.value})
	}
	changeNotes(e) {
		this.setState({notes: e.target.value})
	}
		
	render() {
	/** inline Style for material-ui components **/
	 const dialogStyle = { width: "700px", height: "600px" }
	 const titleStyle = { padding: "10px 30px", backgroundColor: "lightBlue", color: "lightBlue"}
	 const title1 = { marginLeft: "30px", marginTop: "12px", color: "white", fontWeight: "normal" }
	 const title3 = { padding: "2px", marginLeft: "330px", width:"24px", height: "24px", border: "1px solid gray", borderRadius: "50%", marginTop: "10px", backgroundColor: "#f36f27", color: "white" }
	 const iTitleStyle = { display: "flex", backgroundColor: "#f36f27", color: "white", height: "45px" }
	 const icon = {color: "white"}
	 const saveBtn = { height: "32px", minWidth: "160px", backgroundColor: "#f36f27", color: "white" }
	 const inlineBlock = {display: "inline-block"}
	 const blockDiv = {display: "block"}
	 const actionStyle = {marginLeft: "24px", width: "466px", marginTop: "-15px"}
	 const line = { height: "4px", backgroundColor: "#da5700", marginLeft: "-24px", marginRight: "-24px"}
	 //const itemAction = { marginLeft: "20px" }
	 const title = [
		<div style={ iTitleStyle }>
			<h3 style={title1}>Product Keeper</h3>
			<div style={title3} onClick={this.props.closeDialog}>
				<CloseIcon style={icon} />
			</div>
		</div>
	 ]
	 const actions = [
		<FlatButton style={saveBtn}
			primary={true}
			onTouchTap={this.save.bind(this)}
		>
			Save
		</FlatButton>
		
	 ]
	 return(
	  <Dialog
          title={title}
          actions={actions}
          modal={true}
		  open={this.props.dialogIsOpen}
          onRequestClose={this.props.closeDialog}
          autoScrollBodyContent={true}
		  autoDetectWindowHeight = {false}
		  style={ dialogStyle }
		  //contentStyle = {contentStyle}
		  titleStyle = { titleStyle }
		  actionsContainerStyle = { actionStyle }
        >
		<div className="divXScrollx">
			<div style={line} />
			<label>Product Name
				<input name="name" id="name" value={this.state.name}
					onChange={this.changeName.bind(this)} />
			</label>
			<label className="col2">Category
				<input name="category" id="category" value={this.state.category}
					onChange={this.changeCategory.bind(this)} />
			</label><br/>
			<label>Brand
				<input name="brand" id="brand" value={this.state.brand}
					onChange={this.changeBrand.bind(this)} />
			</label>
			<label className="col2">Height
				<input name="height" type="number" id="height" value={this.state.height}
				onChange={this.changeHeight.bind(this)} />
			</label><br/>
			<label>Width
				<input name="width" type="number" id="width" value={this.state.width}
				onChange={this.changeWidth.bind(this)} />
			</label><br/>
			<label>Notes
				<textarea className="notes_input" value={this.state.notes}
				onChange={this.changeNotes.bind(this)} />
			</label>		
      </div>
	  </Dialog>
	)
  }
}

