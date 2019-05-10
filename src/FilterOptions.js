import React, { Component } from 'react'

class FilterOptions extends Component {
	render() {
		return (
		<div class="w3-container w3-rest">
		<div class="w3-half w3-container">
		<fieldset>
		<legend>Filter by:</legend>		
			<p><input type="checkbox" checked="checked"/>
			<label>Eligible to work in US? </label></p>
			<p><input type="checkbox"/>
			<label>Felony criminal record? </label></p>
			<p><input type="checkbox"/>
			<label>Faved Applicants </label></p>
		</fieldset>
		</div>
		<div class="w3-half w3-container">
		<fieldset>
			<legend>Availability</legend>
			<input type="checkbox"/><label>M</label>
			<input type="checkbox"/><label>T</label>
			<input type="checkbox"/><label>W</label>
			<input type="checkbox"/><label>R</label>
			<input type="checkbox"/><label>F</label>
			<input type="checkbox"/><label>S</label>
			<input type="checkbox"/><label>Su</label>
		</fieldset>
		</div>
		</div>
		)
		
	}
}


export default FilterOptions