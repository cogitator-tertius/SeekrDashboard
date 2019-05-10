import React, { Component } from 'react'

class SortOptions extends Component {
	render() {
		return(
		<div class="w3-quarter w3-container" >
		<fieldset>
		<legend>Sort By...</legend>
		<select>
		<option value="name">Name</option>
		<option value="date">Application date</option>
		<option value="position">Desired Position</option>
		<option value="experience">Experience</option>
		</select>
		</fieldset>
		</div>
		)
		
	}
}


export default SortOptions