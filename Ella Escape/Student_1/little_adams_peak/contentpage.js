//--navigationBar
var activeId = "option1";
document.getElementById(activeId).style.cssText= "background-Color : #5CAA35; color: white"; 

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

//resize navigationBar
window.addEventListener("resize", resizing_func);
//navbar--

document.getElementById("sidebar_icon").addEventListener("mouseenter", () => {
    document.getElementById("sidebar").style.transform = "translateY(0)"
})

document.getElementById("sidebar").addEventListener("mouseleave", () => {
    document.getElementById("sidebar").style.transform = "translateY(-100%)"
})

function BackToTop() {
    document.getElementById(`heading_div`).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center'
        });
}

document.onscroll = () => {
    if(window.scrollY === 0){
        document.getElementById("backtotop_icon").style.display = "none";
    } else {
        document.getElementById("backtotop_icon").style.display = "inline";
    }
}

document.getElementById("backtotop_icon").addEventListener("click", BackToTop)

document.querySelectorAll("#sidebar ol li").forEach(li => {
    li.addEventListener("click", () => {
        if(li.id == "heading_li"){
            BackToTop();
        } else {
            document.getElementById(`content${li.id}`).scrollIntoView({
                behavior: 'smooth',
                inline: "end",
                block: "center"
                });
    }
    
    })
})

showSideBar()


function showSideBar() {
    document.getElementById("sidebar").style.transform = "translateY(0)";
    const hideBar = setTimeout(hidesideBar, 1200);
}

function hidesideBar() {
    document.getElementById("sidebar").style.transform = "translateY(-100%)";
}


