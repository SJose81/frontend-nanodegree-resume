/*

*/

var bio = {
	"name":"Sophia G",
	"role": "SOFTWARE ENGINEER",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "janedoe@email.com",
		"linkedin": "janedoe",
		"github": "janedoe",
		"location": "Mountain View, CA"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": [
		"Java", "Selenium, TestNG", "HTML5", "CSS, Bootstrap", "Javascript, jQuery", "SQL"
	],
	"bioPic": "images/MyImg.png"
};

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
	]
	
};

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
	]
};

var education = {
	"schools": [
		{
			"name": "California State University",
			"year": "June 2010",
			"city": "Hayward, CA",
			"degree": "Masters",
			"major": "Computer Science"
		},
		{
			"name": "Pune University",
			"year": "May 2003",
			"city": "Pune, India",
			"degree": "BA",
			"major": "Insrumentation"
		}
	],
	"onlineclasses": [
		{
			"name": "Udacity",
			"course": "Front-End Web Developer Nanodegree",
			"year": "Oct 2015 - in progress",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

/* Top Name and Contact Section - Adding name and contact details with javascript */
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
//$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


/* Skills Section - Adding technical skills to the resume */
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedJobSection = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) 
		+ HTMLworkTitle.replace("%data%", work.jobs[job].workTitle) +
	HTMLworkDates.replace("%data%", work.jobs[job].yearsEmp) + 
	HTMLworkLocation.replace("%data%", work.jobs[job].empCity) +
	HTMLworkDescription.replace("%data%", work.jobs[job].workDescrip);

	$(".work-entry:last").append(formattedJobSection);
}

/* Projects Section - Adding project details */
var projectPreTag = HTMLprojectStart.split("</div>");
$("#projects").append(projectPreTag[0]);
for(var i = 0; i < projects.proj.length; i++){
	$(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.proj[i].title));
	$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.proj[i].date));
	$(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.proj[i].description));
	for(var j = 0;j < projects.proj[i].images.length; j++){
		$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.proj[i].images[j]));
	}
}
$("#projects").append("</div>");


/* Education Section - Adding educational background details */
var eduPreTag = HTMLschoolStart.split("</div>");
$("#education").append(eduPreTag[0]);
for (var i = 0; i < education.schools.length; i++) {
	$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) 
			+ HTMLschoolDegree.replace("%data%", education.schools[i].degree));
	$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].year));
	$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
	$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
}
$(".education-entry").append(HTMLonlineClasses);

for (var i = 0; i < education.onlineclasses.length; i++) {
	$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineclasses[i].course)
			+ HTMLonlineSchool.replace("%data%", education.onlineclasses[i].name));
	$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineclasses[i].year));
	$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineclasses[i].url));
}	
$("#education").append("</div>");


/* Footer Contact Section - Adding contact details with javascript */
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));















