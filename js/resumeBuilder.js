var bio = {
    "name": "Daniel Hutchins",
    "role": "Solutions Architect",
    "contacts": {
        "email": "i____@hotmail.com",
        "github": "danhut",
        "twitter": "@wozzit",
        "mobile": "999",
        "location": "Melbourne"
    },
    "welcomeMessage": "Gday Cobbers",
    "biopic": "images/danhut.jpeg",
    "skills": [
        "Network Architecture",
        "IP/MPLS",
        "Service Orchestration"
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Cisco",
            "title": "Consulting Solutions Architect",
            "location": "Melbourne, Australia",
            "dates": "April 2014 - Present",
            "description": "etc..."
        },
        {
            "employer": "Cisco",
            "title": "Solutions Architect",
            "location": "Melbourne, Australia",
            "dates": "September 2008 - March 2014",
            "description": "etc etc..."
        }
    ]
}

var projects = {};
projects.projects = [
    {
        "title": "Symphony Initiative",
        "dates": "2014 - Present",
        "description": "SDN & NFV",
        "images": [
            "images/symph.jpg"
        ]
    },
    {
        "title": "VIC",
        "dates": "2011 - 2012",
        "description": "Content Management",
        "images": [
          "images/low.jpg"
        ]
    }
];

var education = {
    "schools": [
        {
            "name": "University of Bedfordshire",
            "location": "Luton, UK",
            "degree": "Bachelor of Arts 2.1",
            "majors": [
                "English",
                "History"
            ],
            "dates": "1992 - 1995"
        }
    ],
    "onlineCourses": [
        {
            "title": "Interactive Python Development Part 1 & 2",
            "school": "Rice University / Coursera",
            "dates": "September - November 2015",
            "url": "https://class.coursera.org/interactivepython1"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "November 2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedName + formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);

    $("#footerContacts").append(formattedMobile + formattedEmail
      + formattedGithub + formattedTwitter + formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",
      bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $('#skills').append(formattedSkill);
        };
    }
};

work.display = function() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var fWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var fWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var fWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var fWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var fWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(fWorkEmployer + fWorkTitle + fWorkDates +
      fWorkLoc + fWorkDesc);
  }
}

projects.display = function() {
    for (var proj in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjTitle = HTMLprojectTitle.replace("%data%",
        projects.projects[proj].title);
      var formattedProjDates = HTMLprojectDates.replace("%data%",
        projects.projects[proj].dates);
      var formattedProjDesc = HTMLprojectDescription.replace("%data%",
        projects.projects[proj].description);
      $(".project-entry:last").append(formattedProjTitle + formattedProjDates +
        formattedProjDesc);
      for (var image in projects.projects[proj].images) {
        var formattedProjImage = HTMLprojectImage.replace("%data%",
          projects.projects[proj].images[image]);
        $(".project-entry:last").append(formattedProjImage);
      }
    }
}

education.display = function(){
    $("#education").append(HTMLschoolClasses);
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",
          education.schools[school].name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",
          education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
          education.schools[school].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
          education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName +
          formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates);

        for (subject in education.schools[school].majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
              education.schools[school].majors[subject]);
            $(".education-entry:last").append(formattedSchoolMajor + '<br>');
        };
    };

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            var formattedOnTitle = HTMLonlineTitle.replace("%data%",
              education.onlineCourses[course].title).replace('#', course.url);
            var formattedOnSchool = HTMLonlineSchool.replace("%data%",
              education.onlineCourses[course].school);
            var formattedOnDates = HTMLonlineDates.replace("%data%",
              education.onlineCourses[course].dates);
            var formattedOnURL = HTMLonlineURL.replace("%data",
              education.onlineCourses[course].url);
            $(".education-entry:last")
                .append(formattedOnTitle + formattedOnSchool
                   + formattedOnDates + formattedOnURL + '<br>');
        };
    }
};

function inName(oldName) {
    var finalName = oldName;
    console.log(oldName);
    var newName = "";
    var nameList = finalName.split(/\s/);
    var first = nameList[0].toLowerCase();
    finalName = first[0].toUpperCase() + first.slice(1, first.length) + " " +
      nameList[1].toUpperCase();
    return finalName;
};

function alphabetizer(names) {
  var newnames = [];
  for (var name in names) {
    var nameList = names[name].split(/ /);
    newnames.push(nameList[1] + " " + nameList[0]);
  }
  return newnames.sort;
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

bio.display();
work.display();
projects.display();
education.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
