/** A Classical Storage as a ES6 Class **/
/** Loading data from rest service - Using Axios **/

import axios from "axios";

class CustomerStore {
	
	constructor() {
		//console.log('Constructor Customer Store')
		
		/** Load Customers Data **/
		this.load_from_url()
		
		this.filter = ''
	}
	filtered_data = []
	
	load_from_url() {
		axios.get('http://npgr.com.ve/apps/desktop_mobile_sales/data/customers.php')
			.then(function(res) {
				store.customers = res.data
				localStorage['customers-data'] = JSON.stringify(res.data)
			})
			.catch(function (error) {
				console.log(error);
				store.customers = JSON.parse(localStorage['customers-data'])
			});
	}
	load_from_local() {
		this.customers = JSON.parse(localStorage['customers-data'])
	}
	load_from_memory() {
		this.customers= [
			{"key":1, "name":"Morlong Associates","ciudad":"Chicago","address":"4 B Blue Ridge Blvd","phone1":"810-374-9840","phone2":"810-292-9388", "contact": "Kris Marrier","email":"josephine_darakjy@darakjy.org","saldo": 25000,"credito": 10000,"dcto_cial": 3},
			{"key":2, "name":"Century Communications","ciudad":"Phoenix","address":"73 State Road 434 E","phone1":"602-277-4385","phone2":"602-953-6360", "contact": "Mattie Poquette","email":"mattie@aol.com","saldo": 8300,"credito": 10000,"dcto_cial": 2},
			{"key":3, "name":"Buckley Miller & Wright","ciudad":"Los Angeles","address":"25 E 75th St #69","phone1":"310-498-5651","phone2":"310-254-3084", "contact": "Kiley Caldarera","email":"kiley.caldarera@aol.com","saldo": 8400,"credito": 12000,"dcto_cial": 1},
			{"key":4, "name":"Farmers Insurance Group","ciudad":"Laredo","address":"56 E Morehead St","phone1":"956-537-6195","phone2":"956-841-7216", "contact": "Cammy Albares","email":"calbares@gmail.com","saldo": 3500,"credito": 14000,"dcto_cial": 0},
			{"key":5, "name":"Post Box Services Plus","ciudad":"San Jose","address":"6 Greenleaf Ave","phone1":"408-540-1785","phone2":"408-813-4592", "contact": "Veronika Inouye","email":"vinouye@aol.com","saldo": 4000,"credito": 21000,"dcto_cial": 0},
			{"key":6, "name":"Professional Image Inc","ciudad":"New York","address":"90991 Thorburn Ave","phone1":"212-582-4976","phone2":"212-934-5167", "contact": "Willow Kusko","email":"wkusko@yahoo.com","saldo": 3300,"credito": 18900,"dcto_cial": 1},
			{"key":7, "name":"Milford Enterprises Inc","ciudad":"San Antonio","address":"7219 Woodfield Rd","phone1":"913-413-4604","phone2":"913-645-8918", "contact": "Dyan Oldroyd","email":"doldroyd@aol.com","saldo": 2000,"credito": 16400,"dcto_cial": 0},
			{"key":8, "name":"International Eyelets Inc","ciudad":"Miami","address":"20 S Babcock St","phone1":"907-741-1044","phone2":"907-227-6777", "contact": "Erick Ferencz","email":"erick.ferencz@aol.com","saldo": 3300,"credito": 31000,"dcto_cial": 2},
			{"key":9, "name":"Rapid Trading Intl","ciudad":"Fairbanks","address":"1048 Main St","phone1":"305-606-7291","phone2":"305-995-2078", "contact": "Lavera Perin", "email":"lperin@perin.org","saldo": 4600,"credito": 26000,"dcto_cial": 1},
			{"key":10, "name":"Vicon Corporation","ciudad":"Austin","address":"4 B Blue Ridge Blvd","phone1":"512-486-3817","phone2":"512-861-3814", "contact": "Cecily Hollack", "email":"cecily@hollack.org","saldo": 3300,"credito": 24200,"dcto_cial": 3},
			{"key":11, "name":"Wye Technologies Inc","ciudad":"Providence","address":"65895 S 16th St","phone1":"401-458-2547","phone2":"401-559-8961", "contact": "Delmy Ahle","email":"delmy.ahle@hotmail.com","saldo": 8200,"credito": 21000,"dcto_cial": 0},
			{"key":12, "name":"Northwest Publishing","ciudad":"San Francisco","address":"55 Riverside Ave","phone1":"626-572-1096","phone2":"626-696-2777", "contact": "Wilda Giguere","email":"wilda@cox.net","saldo": 2200 ,"credito": 27000,"dcto_cial": 0},
			{"key":13, "name":"Branford Wire & Mfg Co","ciudad":"Baltimore","address":"7140 University Ave","phone1":"254-782-8569","phone2":"254-205-1422", "contact": "Malinda Hochard","email":"malinda.hochard@yahoo.com","saldo": 1800,"credito": 22000,"dcto_cial": 1},
			{"key":14, "name":"Alpenlite Inc","ciudad":"Newark","address":"4 Webbs Chapel Rd","phone1":"907-870-5536","phone2":"907-914-9482", "contact": "Natalie Fern","email":"natalie.fern@hotmail.com","saldo": 3200,"credito": 31000,"dcto_cial": 2},
			{"key":15, "name":"Arthur A Oliver & Son Inc","ciudad":"Jacksonville","address":"524 Louisiana Ave Nw","phone1":"408-703-8505","phone2":"408-440-8447", "contact": "Lisha Centini","email":"lisha@centini.org","saldo": 1200,"credito": 24000,"dcto_cial": 0},
			{"key":16, "name":"Killion Industries","ciudad":"Philadelphia","address":"185 Blackstone Bldge","phone1":"317-722-5066","phone2":"317-472-2412", "contact": "Alease Buemi","email":"alease@buemi.com","saldo": 1100,"credito": 33000,"dcto_cial": 1},
			{"key":17, "name":"A K Construction Co","ciudad":"San Gabriel","address":"4800 Black Horse Pike","phone1":"307-279-3793","phone2":"", "contact": "Donte Kines","email":"dkines@hotmail.com","saldo": 2100,"credito": 18000,"dcto_cial": 0},
			{"key":18, "name":"Wood & Whitacre Contractors","ciudad":"Anchorage","address":"83649 W Belmont Ave","phone1":"504-710-5840","phone2":"", "contact": "Brandon Callaro","email":"brandon_callaro@hotmail.com","saldo": 3400,"credito": 23000,"dcto_cial": 2}
		]
	}
}

//var store = window.store = new CustomerStore

var store = new CustomerStore

export default store

/*autorun( function() {
	console.log('[autorun] filter: ',store.filter)
	//console.log(store.customers[0])
})*/