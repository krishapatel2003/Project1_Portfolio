// navbar code

let navH1 = document.querySelector(".nav-h1");
let body = document.querySelector("body");
let navOptions = document.querySelector(".nav-options")
let navBtn = document.querySelector(".nav-btn");

navH1.addEventListener("click", function () {
    // Hide original navbar and body content
    document.body.innerHTML = `
        <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: black; color: palegreen;">
            <h1 style="font-size: 100px;">PORTFOLIO</h1>
            <button id="goback" style="margin-top: 30px; padding: 10px 30px; font-size: 20px; background-color: palegreen; color: black; border: none; border-radius: 10px; cursor: pointer;">Go Back</button>
        </div>
    `;

    // Go back button logic
    document.getElementById("goback").addEventListener("click", function () {
        // Reload the page to bring back original content
        location.reload();
    });
});


// hrosection part

let herosectionRightImg = document.querySelector(".herosection-right-myimg");
let originalScr = "kisu_r2.png";
let changeSrc = "kisu_r3.png";

herosectionRightImg.addEventListener("click", function () {

    if (herosectionRightImg.src.includes(originalScr)) {
        herosectionRightImg.src = changeSrc;
    } else {
        herosectionRightImg.src = originalScr;
    }
})

// About

let aboutRightList= document.querySelector(".about-right-list");
let aboutRightSkills= document.querySelector(".about-right-skills");
let aboutRightEducation= document.querySelector(".about-right-education");

let aboutRightList1= document.querySelector(".about-right-list1");
let aboutRightList2= document.querySelector(".about-right-list2");
aboutRightList1.style.display="none";
aboutRightList2.style.display="none";
aboutRightList.style.display="none";


aboutRightSkills.addEventListener("click",function(){
aboutRightList.style.display="block";
    aboutRightList1.style.display="block";
    aboutRightList2.style.display="none";
})

aboutRightEducation.addEventListener("click",function(){
aboutRightList.style.display="block";
    aboutRightList2.style.display="block";
    aboutRightList1.style.display="none";
})

// services

let servicesBox1 = document.querySelector(".services-box-1");
let servicesBox2 = document.querySelector(".services-box-2");
let servicesBox3 = document.querySelector(".services-box-3");

servicesBox1.addEventListener("mouseover",function(){
    servicesBox1.style.background="palegreen";
    servicesBox1.style.color="black";
});

servicesBox1.addEventListener("mouseout",function(){
    servicesBox1.style.background="black";
    servicesBox1.style.color="palegreen";
});


servicesBox2.addEventListener("mouseover",function(){
    servicesBox2.style.background="palegreen";
    servicesBox2.style.color="black";
});

servicesBox2.addEventListener("mouseout",function(){
    servicesBox2.style.background="black";
    servicesBox2.style.color="palegreen";
});
servicesBox3.addEventListener("mouseover",function(){
    servicesBox3.style.background="palegreen";
    servicesBox3.style.color="black";
});

servicesBox3.addEventListener("mouseout",function(){
    servicesBox3.style.background="black";
    servicesBox3.style.color="palegreen";
});
let learnElements = document.querySelectorAll(".learn");

learnElements.forEach(function(learn){
    learn.addEventListener("click",function(){
        alert("All Details comming soon.....");
    })
})

// projects

let projectsH1 = document.querySelector(".projects-h1");
let projectsBoxes = document.querySelector(".projects-boxes");

projectsH1.addEventListener("click",function(){
    projectsBoxes.style.display="flex";
    projectsH1.style.display="none";
})

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        })
    })
})

let contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    contactForm.reset();
});
