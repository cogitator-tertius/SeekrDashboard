import React, { Component } from 'react'
import faveicon from './fave.PNG'

const ApplicantRow = props => {
		const rows = props.applicantData.map((row, index) => {
		return(
			
		<div class="w3-container w3-cell-row w3-border">
		<button key={index} class="w3-block w3-grey">{row.name}</button>
		<button class="w3-button w3-right"><img src={faveicon} alt="Fave Applicant" class="w3-image"/></button>
		</div>		
		)
		})
	
	return (	
			<div>		
			{rows}
			</div>
			)
}

export default ApplicantRow