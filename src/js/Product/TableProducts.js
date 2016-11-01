import React from "react";
import { observer } from "mobx-react"

@observer
export default class TableProducts extends React.Component {

	constructor(props) {
		super(props)
		this.orderByName = this.orderByName.bind(this)
		this.orderByCategory = this.orderByCategory.bind(this)
		this.orderByBrand = this.orderByBrand.bind(this)
		this.orderByWidth = this.orderByWidth.bind(this)
		this.orderByHeight = this.orderByHeight.bind(this)
		this.orderByNotes = this.orderByNotes.bind(this)
	}

	orderByName() {
		this.props.store.orderByName()
	}
	orderByCategory() {
		this.props.store.orderByCategory()
	}
	orderByBrand() {
		this.props.store.orderByBrand()
	}
	orderByHeight() {
		this.props.store.orderByHeight()
	}
	orderByWidth() {
		this.props.store.orderByWidth()
	}
	orderByNotes() {
		this.props.store.orderByNotes()
	}
	
	tableLines() {
		var arr = []
		for (var i=0; i < this.props.store.products.length; i++)
		{
		  var product = this.props.store.products[i]
		  if (product.name.indexOf(this.props.store.filter) != -1)
			arr.push(
				<tr>
					<td>{product.name}</td>
					<td>{product.category}</td>
					<td>{product.brand}</td>
					<td>{product.height}</td>
					<td>{product.width}</td>
					<td className="notesCol">{product.notes}</td>
				</tr>
			)
		}
		return arr
	}
	 
  render() {
	  
	const { orderByName, orderByCategory, orderByBrand, orderByWidth, 
		orderByHeight, orderByNotes} = this
	
	var tableLines = this.tableLines()
	return(
	  <div className="divXScroll">
	  <table>
		<thead>
		  <tr>
			<th onClick={orderByName}>Product Name</th>
			<th onClick={orderByCategory}>Category</th>
			<th onClick={orderByBrand}>Brand</th>
			<th onClick={orderByHeight}>Height</th>
			<th onClick={orderByWidth}>Width</th>
			<th onClick={orderByNotes}>Notes</th>
		  </tr>
		</thead>
		<tbody>
			{tableLines}
		</tbody>
	  </table>
	  <br />
	  </div>
	)
  }
}

