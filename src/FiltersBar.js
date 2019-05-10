import React, { Component } from 'react'
import SortOptions from './SortOptions.js'
import FilterOptions from './FilterOptions.js'


class FiltersBar extends Component {
	render() {
		return(
		<div className="FiltersBar">
		<form>
		<div class="w3-threequarter w3-panel">
		< SortOptions />
		< FilterOptions />
		</div>
		<div class="w3-quarter w3-container">		
		<button input type="submit"class="w3-btn w3-small w3-dark-grey w3-round w3-mobile w3-border">Apply Filters</button>
		</div>
		</form>
		</div>
		);
	}
	
}

export default FiltersBar