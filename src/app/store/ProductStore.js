import { autorun, observable } from "mobx"

class ProductStore {
	
	@observable products = []
	
	@observable filter = ""
	
	order = ''
	
	title = 'Product Keeper'
	
	constructor() {
		/** Load Products data from localStorage **/
		if (localStorage.getItem('reto-products') != null)
		{
			this.products = JSON.parse(localStorage['reto-products'])
		}
		else  /** Only first time in browser **/ 
		{
		  this.products = [{
			key: 1,
			name: "Product 1",
			category: "Food",
			brand: "Brand 1",
			height: 32,
			width: 25,
			notes: "My notes"
		  },
		  { key: 2,	
			name: "Product 2",
			category: "Sport",
			brand: "Brand 2",
			height: 10,
			width: 8,
			notes: "My notes2"
		  },
		  {	key: 3,
			name: "Product 3",
			category: "Health",
			brand: "Brand 3",
			height: 55,
			width: 32,
			notes: "My own notes"
		  }]
		  localStorage['reto-products'] = JSON.stringify(this.products)
		}
	}
	
	newProduct(prod) {
		this.products.push(prod)
		localStorage['reto-products'] = JSON.stringify(this.products)
	}
	
	setFilter(filter) {
		this.filter = filter
	}
	
	closeDialog() {
		this.dialog = false
	}
	
	orderByName() {
		function compare(a,b) {
			if (a.name < b.name)
				return -1;
			if (a.name > b.name)
				return 1;
			return 0;
		}
		
		if(this.order != 'name asc')
		{
			this.order = 'name asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'name des'
			this.products = this.products.reverse(compare)
		}	
	}
	orderByCategory() {
		function compare(a,b) {
			if (a.category < b.category)
				return -1;
			if (a.category > b.category)
				return 1;
			return 0;
		}
		
		if(this.order != 'category asc')
		{
			this.order = 'category asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'category des'
			this.products = this.products.reverse(compare)
		}	
	}
	orderByBrand() {
		function compare(a,b) {
			if (a.brand < b.brand)
				return -1;
			if (a.brand > b.brand)
				return 1;
			return 0;
		}
		
		if(this.order != 'brand asc')
		{
			this.order = 'brand asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'brand des'
			this.products = this.products.reverse(compare)
		}	
	}
	orderByHeight() {
		function compare(a,b) {
			if (a.height < b.height)
				return -1;
			if (a.height > b.height)
				return 1;
			return 0;
		}
		
		if(this.order != 'height asc')
		{
			this.order = 'height asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'height des'
			this.products = this.products.reverse(compare)
		}	
	}
	orderByWidth() {
		function compare(a,b) {
			if (a.width < b.width)
				return -1;
			if (a.width > b.width)
				return 1;
			return 0;
		}
		
		if(this.order != 'width asc')
		{
			this.order = 'width asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'width des'
			this.products = this.products.reverse(compare)
		}	
	}
	orderByNotes() {
		function compare(a,b) {
			if (a.notes < b.notes)
				return -1;
			if (a.notes > b.notes)
				return 1;
			return 0;
		}
		
		if(this.order != 'notes asc')
		{
			this.order = 'notes asc'
			this.products = this.products.sort(compare)
		}
		else
		{
			this.order = 'notes des'
			this.products = this.products.reverse(compare)
		}	
	}
}

//var store = window.store = new ProductStore
var store = new ProductStore

export default store

/*autorun(() => {
	console.log('products: ', store.products)
})*/
