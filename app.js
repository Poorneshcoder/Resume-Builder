
function addNewWEField() {
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonObj = document.getElementById("weAddButton");
     
    weOb.insertBefore(newNode, weAddButtonObj);
}

function addAQField(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonObj = document.getElementById("aqAddButton");
     
    aqOb.insertBefore(newNode, aqAddButtonObj);
}

// generating cv

function generateCV() {
    console.log("generate button clicked");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    // contact 

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    // address

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("inT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("liT").innerHTML=document.getElementById("linkedField").value;

    // objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // work experience

    let we = document.getElementsByClassName("weField");

    let str ="";

    for(let e of we){
        str = str+`<li> ${e.value} <?li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // acedemic qualifications

    let aq = document.getElementsByClassName("aqField");
    
    let str1 = "";

    for(let e of aq){
        str1 = str1+`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display ="none";
    document.getElementById("cv-template").style.display = "block";

}

function printCV() {
    window.print();
}