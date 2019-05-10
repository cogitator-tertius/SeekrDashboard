import React, { Component } from 'react'
import HamburgerMenu from './HamburgerMenu.js'

class SearchBar extends Component {
	render() {
		return(
			<div>
				<div class="w3-quarter w3-panel">
					<HamburgerMenu />
				</div>
				<div class="w3-threequarter w3-panel">
					<form>
						<input className="UserInput" class=" w3-input"type="text" placeholder="Search..." />
					</form>
				</div>
			</div>			
		);
	}
}

export default SearchBar

				//<img src="img/Search.png"/>