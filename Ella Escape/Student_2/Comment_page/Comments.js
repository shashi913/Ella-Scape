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

//--comment
const levels = document.querySelectorAll("input[name='level']");
var noLevel = true;
var selectedLevel;
var reson;
var optional1; 
var optional2;

document.getElementById("submit").addEventListener("click", function () {

    reson = document.getElementById("reson").value;
    
    for (let i = 0; i < levels.length ; i++){
        if (levels[i].checked) {
            selectedLevel = levels[i].value;
            noLevel = false;
            break;
        }
    }

    let required1 = document.getElementById("required1");
    let required2 = document.getElementById("required2");

    if (reson.length == 0 && noLevel) {
        required1.style.display = "block";
        required2.style.display = "block";
        window.scrollTo({top: 50, behavior: 'smooth'});
    }
    else if (reson.length > 0 && noLevel) {
        required1.style.display = "block";
        required2.style.display = "none";
        window.scrollTo({top: 0, behavior: 'smooth'});
        
    }
    else if (reson.length == 0 && !noLevel) {
        required1.style.display = "none";
        required2.style.display = "block";
        window.scrollTo({top: 180, behavior: 'smooth'});
        
    }   
    else {
        reson = document.getElementById("reson").value;
        optional1 = document.getElementById("selection1").value;
        optional2 = document.getElementById("selection2").value;

        //to display thank you
        document.querySelector("form").style.display = "none";
        document.querySelector("h1").innerHTML = "Thank you!";
        document.getElementById("thankYou").style.display = "block";

        //to email
        var body = `How satisfied were you with our website today? Choose from 0 to
        10, where 0 is extremely dissatisfied and 10 is extremely
        satisfied : <b>`+ selectedLevel + "</b><br><br>";
        body += "Please could you tell us your reson for giving this rating? : <b>" + reson + "</b><br><br>";
        
        //if there an answers for optional questions add answer to the body
        let selection1 = document.getElementById("selection1");
        let selection2 = document.getElementById("selection2");
        if(selection1.selectedIndex != 0) {
            body += "How did you want to complete this task today? : <b>" +optional1+ "</b><br><br>";  
        }
        if (selection2.selectedIndex != 0) {
            body += "If you had to complete this task againg , how would you prefer to do it? : <b>" +optional2+ "</b><br><br>";  
        }


        Email.send({
            SecureToken : "80d59fef-c8dd-49d7-94ba-07aed39af3aa",
            To : ["daveshenal281@gmail.com","sathindu.geethika@gmail.com","shashikamadhuranga2001@gmail.com","sriigaya3@gmail.com"],
            From :  "ellaescapewddcw@gmail.com",
            Subject : "New Comment",
            Body : body
        }).then(
          message => alert(message)
        );
    }
})
//comment--
