import React from "react";
import { observer } from "mobx-react"

@observer
export default class TableProducts extends React.Component {

	/*constructor(props) {
		super(props)
	}*/

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
	
	var tableLines = this.tableLines()
	return(
	  <div className="divXScroll">
	  <table>
		<thead>
		  <tr>
			<th onClick={this.orderByName.bind(this)}>Product Name</th>
			<th onClick={this.orderByCategory.bind(this)}>Category</th>
			<th onClick={this.orderByBrand.bind(this)}>Brand</th>
			<th onClick={this.orderByHeight.bind(this)}>Height</th>
			<th onClick={this.orderByWidth.bind(this)}>Width</th>
			<th onClick={this.orderByNotes.bind(this)}>Notes</th>
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

