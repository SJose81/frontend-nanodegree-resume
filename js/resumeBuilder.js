/*
 ResumeBuilder.js javascript file containing the  data that will be appended 
 to appropriate div tags during page load.
*/

/*bio object with biographical information displayed in the header and footer section */
var bio = {
	name:"Sophia G",
	role: "SOFTWARE ENGINEER",
	contacts: {
		"mobile": "650-555-5555",
		"email": "janedoe@email.com",
		"linkedin": "janedoe",
		"github": "janedoe",
		"location": "Mountain View, CA"
	},
	welcomeMessage: "Welcome...Below you will find my work experience and project details!",
	skills: [
		"Java, Selenium, TestNG", "HTML5", "CSS, Bootstrap", "Javascript, jQuery", "SQL"
	],
	bioPic: "images/MyImg.png",

	/* display function - add Header and footer bio details */
	display: function(){
		/* Top Name and Contact Section - Adding name and contact details*/
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


		/* Skills Section - Adding technical skills to the resume */
		$("#header").append(HTMLskillsStart);
		for (var skill = 0; skill < bio.skills.length; skill++) {
			$("#header").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		/* Footer Contact Section - Adding contact details */
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	}
	
};
bio.display();


/* work object with work related information */
var work = {
	"jobs": [
		{
			"workTitle": "Software Test Engineer",
			"employer": "eTouch Systems",
			"yearsEmp": "Sept 2013 - present",
			"empCity": "Fremont, CA",
			"workDescrip": "Test automation engineer for Intuit's Quickbooks desktop and online products."
		},
		{
			"workTitle": "Software Developer",
			"employer": "TasmanAve Inc.",
			"yearsEmp": "Feb 2010 - Aug 2013",
			"empCity": "San Jose, CA",
			"workDescrip": "Worked as a software devloper on multiple projects for Tasmanave Inc."
		}
	],

	display: function(){
		for(var job = 0; job < work.jobs.length; job++){
			$("#workExperience").append(HTMLworkStart);
			var formattedJobSection = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + 
			HTMLworkTitle.replace("%data%", work.jobs[job].workTitle) +
			HTMLworkDates.replace("%data%", work.jobs[job].yearsEmp) + 
			HTMLworkLocation.replace("%data%", work.jobs[job].empCity) +
			HTMLworkDescription.replace("%data%", work.jobs[job].workDescrip);

			$(".work-entry:last").append(formattedJobSection);
		}
	}
	
};
work.display();


/* projects object that contains details of each project*/
var projects = {
	"proj": [
		{
			"title": "QuickBooks online and desktop test automation framework",
			"date": "Mar 2014 – present",
			"description": "Worked as quality engineer with QuickBooks IPD team to develop test automation framework using reusable data driven approach to run automated scripts on QuickBooks online and desktop application. Worked with business analysts to determine business requirements and testing in agile methodology. Automated the functional, regression and integration test cases using tools from Selenium Suite products like Selenium WebDriver.",
			"images": [
				"images/qbo.png"
			]
		},
		{
			"title": "eTouch’s Test Automation Framework",
			"date": "Sept 2013 – Feb 2014",
			"description": "eTouch’s Test Automation Framework is a library that can be used to test applications across platforms and devices. The Framework is intended to be used for testing web, mobile and desktop applications. As part of the team, some of the modules that I worked on were: implementing REST client to access build test reports from Jenkins, module to monitor hub and node availability for Selenium Grid setup, module to integrate defect management tools such as Rally, Jira.",
			"images": [
				"images/taf.png"
			]
		},
		{
			"title": "Social Networking Site - Thotofthis.com",
			"date": "Feb 2010 – Aug 2013",
			"description": "Thotofthis.com is a social network site owned by TasmanAve Inc. which is both as a personal note making tool and also as a way for users to discuss, share and comment on web pages. As part of the team, I was involved in the design, development, debugging, testing, and maintenance of the web application. Developed modules to post updates to other social networking sites such as Facebook, Twitter and LinkedIn using OAUTH. Designed and implemented features such as pagination, auto-scrolling, text highlighting, posting updates to other social networking using OAUTH and development of Thotofthis bookmarklet using YUI dialog components",
			"images": [
				"images/thots.png"
			]
		}
	],

	display: function(){
		for(var projNum = 0; projNum < projects.proj.length; projNum++){
			$("#projects").append(HTMLprojectStart);
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.proj[projNum].title);
			$(".project-entry:last").append(formattedProjTitle);
			var formattedProjDate = HTMLprojectDates.replace("%data%", projects.proj[projNum].date);
			$(".project-entry:last").append(formattedProjDate);
			var formattedProjDescrip = HTMLprojectDescription.replace("%data%", projects.proj[projNum].description);
			$(".project-entry:last").append(formattedProjDescrip);
			for(var j = 0;j < projects.proj[projNum].images.length; j++){
				formattedImage = HTMLprojectImage.replace("%data%", projects.proj[projNum].images[j]);
				$(".project-entry:last").append(formattedImage);
			}   	
		}
	}
};
projects.display();


/* education object with education related information*/
var education = {
	"schools": [
		{
			"name": "California State University",
			"location": "Hayward, CA",
			"degree": "Masters",
			"major": "Computer Science",
			"dates": 2010
		},
		{
			"name": "Pune University",
			"location": "Pune, India",
			"degree": "BA",
			"major": "Insrumentation",
			"dates": 2003
		}
	],
	"onlineclasses": [
		{
			"name": "Udacity",
			"course": "Front-End Web Developer Nanodegree",
			"year": "Oct 2015 - in progress",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	display: function(){
		for (var sclIndex = 0; sclIndex < education.schools.length; sclIndex++) {
			$("#education").append(HTMLschoolStart);
			var formattedEduSection = HTMLschoolName.replace("%data%", education.schools[sclIndex].name) + 
			HTMLschoolDegree.replace("%data%", education.schools[sclIndex].degree);
			formattedEduSection += HTMLschoolDates.replace("%data%", education.schools[sclIndex].dates);
			formattedEduSection += HTMLschoolLocation.replace("%data%", education.schools[sclIndex].location);
			formattedEduSection += HTMLschoolMajor.replace("%data%", education.schools[sclIndex].major);

			$(".education-entry:last").append(formattedEduSection);
		}

		var clsHeading = HTMLonlineClasses;
		for (var classIndex = 0; classIndex < education.onlineclasses.length; classIndex++) {
			var formattedClSection =  HTMLonlineTitle.replace("%data%", education.onlineclasses[classIndex].course) +
				HTMLonlineSchool.replace("%data%", education.onlineclasses[classIndex].name) + 
				HTMLonlineDates.replace("%data%", education.onlineclasses[classIndex].year) + 
				HTMLonlineURL.replace("%data%", education.onlineclasses[classIndex].url);

			$(".education-entry:last").append(clsHeading + formattedClSection);
		}
	}
	
};
education.display();


/* Map showing where I live and work */
$("#mapDiv").append(googleMap);
















