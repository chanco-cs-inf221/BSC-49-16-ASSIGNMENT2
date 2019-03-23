//identify the form by id
var form = document.getElementById("project_form");

//add the listener to the form
form.addEventListener("submit", function(event)
{   
    event.preventDefault();
    var projectName = form.project_name.value;
    var projectDetails = form.project_details.value;
    //taking an date input field value and passing it to a Date constructor to create a new date
    var date = new Date(form.start_date.value);

    //get the list element in html
    var myList = document.getElementById("project_list");    
    let fullProject = ["PROJECT NAME : "+projectName,   "\nPROJECT DETAILS  : " + projectDetails,   "\nSTART DATE : " + date];
    localStorage.setItem("1", fullProject); 

    //create the new link elemenent
    var project = document.createElement("A");
    project.setAttribute("href" , "projects.html");
    project.setAttribute("class", "name");
    
    var projectN = document.createTextNode(projectName);
    project.appendChild(projectN);
    myList.appendChild(project);
    form.reset();
});


var form2 = document.getElementById("work_experience_form");

form2.onsubmit = function(e)
{
    e.preventDefault();
    var work = form2.work_type.value;
    var workDetails = form2.work_details.value;
    var start_date = new Date(form2.start_date.value);

    let fullWork = ["WORK TYPE: " + work, "\nWORK DETAILS : " + workDetails, "\nSTART DATE : " + start_date];
    localStorage.setItem("2", fullWork);
    var working_section = document.getElementById("work_experince");
    //creating a link element and associating it with the desired attributes
    var workList = document.createElement("A"); 
    workList.setAttribute("href", "work.html");
    workList.setAttribute("class", "name");
   
    var content = document.createTextNode(work);
    workList.appendChild(content);
    working_section.appendChild(workList);
    form2.reset();
}

