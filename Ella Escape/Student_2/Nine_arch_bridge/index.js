//--navBar
var activeId = "option1";
document.getElementById("option1").style.cssText= "background-Color : #5CAA35; color: white";
        

function resizing_func() {
    if (document.body.clientWidth < 1280) {
        document.querySelector(".navigationbar ul").style.cssText = "margin-left : 20%";
    }
    else {
        document.querySelector(".navigationbar ul").style.cssText="margin-left : 50%";
    }
    
    let links = document.querySelectorAll(".options li a");
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


//to top button
const topBtn = document.getElementById("toTop");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 110) {

        topBtn.style.cssText = "opacity:1 ; pointer-events:auto";   
    }
    else {
        topBtn.style.cssText = "opacity:0 ; pointer-events:none";
    }
})
//side mwenu

showSideBar();

document.getElementById("sidebar_icon").addEventListener("mouseenter", () => {
    document.getElementById("sidebar").style.transform = "translateY(0)"
})

document.getElementById("sidebar").addEventListener("mouseleave", () => {
    document.getElementById("sidebar").style.transform = "translateY(-100%)"
})


function showSideBar() {
    document.getElementById("sidebar").style.transform = "translateY(0)";
    const hideBar = setTimeout(hidesideBar, 1200);
}

function hidesideBar() {
    document.getElementById("sidebar").style.transform = "translateY(-100%)";
}

document.querySelectorAll("#sidebar ol li").forEach(li => {
    li.addEventListener("click", () => {
        if(li.id == "heading_li"){
            window.scrollTo(top);
        } else {
            console.log(`layer${li.id}`);
            document.getElementById(`layer${li.id}`).scrollIntoView(true);
    }
    
    })
})



