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
        if(li.id == "heading"){
            window.scrollTo(top);
        } else if(li.id == "description"){
            document.getElementById("first-box").scrollIntoView(true);
        }  else if(li.id == "time_to_hike"){
            document.getElementById("second-box").scrollIntoView(true);
        }   else if(li.id == "how_to_climb"){
            document.getElementById("third-box").scrollIntoView(true);
        }   else{
            document.getElementById("forth-box").scrollIntoView(true);
        }
    })
})

//navbar--




//to top button
const toTopBtn = document.getElementById("backToTop_btn");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20){
            toTopBtn.style.display = "block";
        } else{
            toTopBtn.style.display = "none";
        }
}

function back_to_top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
    

