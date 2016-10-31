import { observable } from "mobx"

class AppStateClass {
	
	@observable menuOpen = false
	
	openMenu() {
		this.menuOpen = true	
	}
	
	closeMenu() {
		this.menuOpen = false	
	}
}

var AppState = new AppStateClass

export default AppState
