import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import FiltersBar from './FiltersBar.js'
import ApplicantList from './ApplicantList'
import './index.css'

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
	return (
		<div class="w3-indigo">
			<h1 class ="w3-row w3-indigo" >Hello SEEKR </h1>
			<div class="w3-auto w3-row w3-dark-blue w3-bottombar w3-border-black">
				< SearchBar />
			</div>
			<div class="w3-auto w3-row w3-light-grey">
				< FiltersBar />
			</div>
			<div class="w3-auto w3-row w3-light-grey">
				< ApplicantList />
			</div>
			<div></div>
		</div>
		)
	}
}

		
		function applyFilters(){}
		
		function faveApplicant(){}
		
		function importApplicantData(data){
			var i;
			for(i = 0; i<data.length; i++){
				var applicants = new Applicant(data[i]);
				return Applicant.name;
			}
				
		}
		
		function Applicant(id, name, position, applied, experience, availability, questions){
			this.applicantId = id;
			this.applicantName = name;
			this.desiredPosition = position;
			this.applyDate = applied;
			this.yearsExperience = experience;
			this.weekdayAvailability = availability;
			this.questionResponse = questions;
			this.hasFelonyRecord = function() {
				if(this.questionResponse.text.includes("felony") && this.questionResponse.answer === "Yes")
					return true;
				else
					return false;
			};
			this.isEligibleToWork = function() {
				if(this.questionResponse.text.includes("authorized") && this.questionResponse.answer === "Yes")
					return true;
				else
					return false;
		}
		}
		function saveFaves(){}
		

export default Dashboard

