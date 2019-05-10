import React, { Component } from 'react'
import ApplicantRow from './ApplicantRow'
import ApplicantsData from './applicants/applicantsdata1.json'

class ApplicantList extends Component {

	
	render() {
		
		
			const applicants =[{
			"id":1,"name":"Alexi Abbay","position":"Hostess","applied":"5/1/2017","experience":2,"availability":[{"M":2,"T":0,"W":2,"R":1,"F":0,"S":1,"Su":2}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]
			}, {
			"id":2,"name":"Dodie Sach","position":"Busser","applied":"1/23/2017","experience":6,"availability":[{"M":2,"T":1,"W":2,"R":1,"F":0,"S":2,"Su":0}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]
			}, {
			"id":4,"name":"Mariellen Chiles","position":"Cook","applied":"6/14/2018","experience":5,"availability":[{"M":0,"T":2,"W":0,"R":1,"F":2,"S":0,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]
			}, {
			"id":5,"name":"Dory Cholwell","position":"Server","applied":"2/6/2018","experience":2,"availability":[{"M":2,"T":1,"W":1,"R":2,"F":2,"S":2,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]
			}, {"id":6,"name":"Linc Lohan","position":"Chef","applied":"4/8/2017","experience":7,"availability":[{"M":0,"T":1,"W":2,"R":2,"F":0,"S":1,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]}];
	/* 		{"id":6,"name":"Linc Lohan","position":"Chef","applied":"4/8/2017","experience":7,"availability":[{"M":0,"T":1,"W":2,"R":2,"F":0,"S":1,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":7,"name":"Denney McCome","position":"Hostess","applied":"6/28/2018","experience":5,"availability":[{"M":0,"T":2,"W":2,"R":2,"F":0,"S":0,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]},{"id":8,"name":"Joleen Dhennin","position":"Server","applied":"7/4/2017","experience":2,"availability":[{"M":0,"T":0,"W":0,"R":0,"F":2,"S":0,"Su":0}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":9,"name":"Ronica Forsdicke","position":"Busser","applied":"10/30/2017","experience":5,"availability":[{"M":2,"T":2,"W":2,"R":2,"F":1,"S":0,"Su":1}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"No"}]},{"id":10,"name":"Josiah Rentoll","position":"Server","applied":"11/5/2017","experience":4,"availability":[{"M":1,"T":0,"W":2,"R":0,"F":2,"S":0,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":11,"name":"Lammond McPartlin","position":"Dishwasher","applied":"4/21/2018","experience":7,"availability":[{"M":1,"T":2,"W":2,"R":1,"F":0,"S":0,"Su":2}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]},{"id":12,"name":"Kynthia Rawnsley","position":"Chef","applied":"6/6/2018","experience":8,"availability":[{"M":2,"T":2,"W":1,"R":1,"F":1,"S":1,"Su":2}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":13,"name":"Catha Farrear","position":"Cook","applied":"4/3/2017","experience":6,"availability":[{"M":1,"T":0,"W":1,"R":1,"F":2,"S":1,"Su":0}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":14,"name":"Rosalind Lehrian","position":"Cook","applied":"10/27/2018","experience":1,"availability":[{"M":0,"T":2,"W":0,"R":0,"F":1,"S":2,"Su":1}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"No"}]},{"id":15,"name":"Allys Andrusov","position":"Hostess","applied":"6/5/2017","experience":10,"availability":[{"M":0,"T":0,"W":0,"R":0,"F":0,"S":1,"Su":0}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":16,"name":"Darrin Pettyfar","position":"Dishwasher","applied":"4/30/2017","experience":5,"availability":[{"M":2,"T":1,"W":0,"R":1,"F":2,"S":0,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":17,"name":"Felike Wooldridge","position":"Server","applied":"4/24/2018","experience":5,"availability":[{"M":0,"T":2,"W":2,"R":2,"F":2,"S":1,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":18,"name":"Buffy Simkovich","position":"Dishwasher","applied":"6/2/2018","experience":9,"availability":[{"M":1,"T":0,"W":2,"R":0,"F":2,"S":1,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"Yes"}]},{"id":19,"name":"Corinne Alvares","position":"Hostess","applied":"6/4/2018","experience":2,"availability":[{"M":1,"T":1,"W":0,"R":1,"F":0,"S":0,"Su":2}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]},{"id":20,"name":"Burty Furmston","position":"Cook","applied":"7/20/2018","experience":1,"availability":[{"M":1,"T":0,"W":1,"R":0,"F":2,"S":1,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"No"}]},{"id":21,"name":"Nanon Gannicott","position":"Cook","applied":"9/13/2017","experience":5,"availability":[{"M":0,"T":2,"W":0,"R":0,"F":0,"S":2,"Su":1}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":22,"name":"Arni De Nisco","position":"Cook","applied":"4/25/2017","experience":3,"availability":[{"M":2,"T":0,"W":2,"R":2,"F":2,"S":0,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"Yes"}]},{"id":23,"name":"Steffi Estable","position":"Busser","applied":"4/10/2018","experience":4,"availability":[{"M":2,"T":0,"W":2,"R":0,"F":1,"S":0,"Su":0}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":24,"name":"Milena Goodie","position":"Busser","applied":"6/11/2017","experience":4,"availability":[{"M":2,"T":1,"W":1,"R":2,"F":1,"S":1,"Su":2}],"questions":[{"text":"Have you ever been convicted of a felony?","answer":"No"}]},{"id":25,"name":"Guthrie Message","position":"Dishwasher","applied":"12/8/2017","experience":8,"availability":[{"M":0,"T":0,"W":2,"R":1,"F":2,"S":1,"Su":0}],"questions":[{"text":"Are you authorized to work in the United States?","answer":"No"}]}] '); */
			
			

		
						
		return (
		<div className="ApplicantRow">
			<ApplicantRow applicantData={applicants} />
		</div>
		)
		
	}
}
			/* {ApplicantsData.map((applicantDetail, index) = function() {
			return <div><p>{applicantDetail.name}</p></div>})} */
			
			/* 			function constructApplicant(id, name, position, applied, experience, availability, questions){
			this.applicantId = id;
			this.applicantName = name;
			this.desiredPosition = position;
			this.applyDate = applied;
			this.yearsExperience = experience;
			this.weekdayAvailability = availability;
			this.questionResponse = questions;
			} */

export default ApplicantList