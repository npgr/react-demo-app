import React from "react";
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

import store from './store/CustomerStore'

export default class Customers extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			text: store.filter,
			filtered_data: store.filtered_data
		}
	}
	search() {
		const cardStyle = {
			margin: "10px",
			borderRadius: "8px",
			backgroundColor: "rgb(226, 245, 255)",
			//width: "90%",
			padding: "15px",
			width: "300px"
		}
		const header = {
			color: "red"
		}
		const detail = {
			color: "blue"
		}
		
		var arr = []
		for (var i=0; i < store.customers.length; i++)
		{
			if (store.customers[i].name.indexOf(store.filter) >= 0)
				arr.push(
					<Card style={cardStyle}>
						<article>
							<header style={header}>{store.customers[i].name}</header>
							<details style={detail}>Credit: {store.customers[i].credito}</details>
						</article>
					</Card>
				)
		}
		this.setState({filtered_data: arr})
		store.filtered_data = arr
	}
	
	textChange(e) {
        this.setState({ text: e.target.value });
		store.filter = e.target.value
    }
	
	keyPress(e) {
		//console.log('Key press: ',e.keyCode)
		if (e.keyCode == 0){
			this.search()
        }
	}

  render() {
	/** inline Style for material-ui components **/
	var input = { width: "8em", marginLeft: "1em", borderColor: "red" }
	return(
		<div>
			<TextField hintText="Customer" value={this.state.text} style={input}
					onChange={this.textChange.bind(this)} onKeyPress={this.keyPress.bind(this)} />
			<IconButton onClick={this.search.bind(this)}>
				<SearchIcon />
			</IconButton>
			<br/>
			{this.state.filtered_data}
		</div>
	)
  }
}

