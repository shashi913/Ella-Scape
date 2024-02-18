//--navBar
const activePage = window.location.pathname;
var activeId;
const navLinks = document.querySelectorAll(".options a"); //to get a list with all navlinks.
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].pathname == activePage) {
        activeId = navLinks[i].id
        document.getElementById(activeId).style.cssText= "background-Color : #5CAA35; color: white";
        break;
    }
}

function resizing_func() {
    if (document.body.clientWidth < 1280) {
        document.querySelector(".navigationbar ul").style.cssText = "margin-left : 20%";
    }
    else {
        document.querySelector(".navigationbar ul").style.cssText="margin-left : 50%";
    }
    
    let links = document.querySelectorAll("li a");
    if (document.body.clientWidth < 810) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].id != activeId) {
                document.getElementById(links[i].style.display = "none");
            }
        }
        document.querySelector(".navigationbar ul").style.cssText = "display: flex; justify-content: center";
    }
    else {
        for (let i = 0; i < links.length; i++) {
            if (links[i].id != activeId) {
                document.getElementById(links[i].style.display = "inline");
            }
        }
    }
}

resizing_func();

//resize navber
window.addEventListener("resize", resizing_func);
//navbar--

let titles  = document.querySelectorAll(".title");
document.querySelectorAll(".stud_des").forEach(element => {
    element.style.color = "white";
});

document.querySelectorAll(".Student_container").forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        document.querySelector("#"+element.id + " .stud_des").style.color = "rgb(117, 179, 75)";
    })

    element.addEventListener("mouseleave", ()=>{
        document.querySelector("#"+element.id + " .stud_des").style.color = "white";
    })
    
});