import React from "react";

export default class About extends React.Component {

	/*constructor(props) {
		super(props)
		console.log('About')
	}*/
	 
  render() {
	var img = { maxWidth: "100%", height: "auto" }
	var center = { display:"flex", justifyContent:"center", marginTop: "10px"}
	
	return (
		<div>
			<div style={center}>
				<img src="../assets/images/highwindow2.jpg" style={img}/>
			</div>
			<h2 style={center}>Demo App</h2>
			<div style={center}>Versión  0.1.0</div>
			<div style={center}>Developed by Nuno Goncalves</div>
			<div style={center}>Twitter: @NunoGoncalvesR</div>
			<div style={center}>
			  Web: <a href="https://npgr.com.ve">
				https://npgr.com.ve
			  </a>
			</div>
			<div style={center}>
			  Repository: <a href="https://github.com/npgr/react-demo-app">
				https://github.com/npgr/react-demo-app
			  </a>
			</div>
		</div>
	)
  }
}

