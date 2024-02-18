//--navBar
const activePage = window.location.pathname;
var activeId;
const navLinks = document.querySelectorAll(".options a"); //to get a list with all navlinks.
for (i = 0; i < navLinks.length; i++) {
    if (navLinks[i].pathname == activePage) {
        activeId = navLinks[i].id
        document.getElementById(activeId).style.cssText= "background-Color : #77BC23; color: white";
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
    
    links = document.querySelectorAll("li a");
    if (document.body.clientWidth < 810) {
        for (i = 0; i < links.length; i++) {
            if (links[i].id != activeId) {
                document.getElementById(links[i].style.display = "none");
            }
        }
        document.querySelector(".navigationbar ul").style.cssText = "display: flex; justify-content: center";
    }
    else {
        for (i = 0; i < links.length; i++) {
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



// picture descriptions - start
var prompt;

function rawanaCave(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Rawana Cave</h2><p>This is the place  where King Rawana imprisoned Sita after kidnapped her. Also there is a lake at the base where Sita is said to have bathed. Excavations undertaken in the cave uncovered evidence of human habitation dating back to 25,000 years. </p>"
}

function demodaraRailway(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Demodara Railway Station</h2><p>This is the third last station on the main line Railway. Because of the geography of the nearby mountains, the railway is designed to take a loop around the mountain and then go under this railway station.</p>"
}

function rawanaWaterfall(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Rawana Waterfall</h2><p> This waterfall beautiful waterfall is located behind the Ravana Cave. This waterfall 82 feet in height. Rawana Falls can be reached by travelling 10Km towards Wellawaya from kubalwela junction in Badulla Bandarawela road </p>"
}

function liptonSeat(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Lipton Seat</h2><p>This is a beautiful tourist attraction place that gives a inspiring views of the surrounding verdant hills and tea plantations</p>"
}

function kandyRailway(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Kandy to Ella RAilway</h2><p>Kandy to Ella train is a 7 hours ride that go through beautiful tea plantations, jungle, and mountains. when journey goes on, you move higher and higher up into the rolling green highlands with mind-blowing views</p>"
}







function nineArch(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Nine Arch Bridge</h2><p>This bridge constructed by connecting two mountains when constructing the Badulla- Colombo railway. This is 300 feet long, 25 feet in width and nearly 100 feet in height.</p>"
}

function adhisomBungalow(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Adhisam Bungalow</h2><p>This house was built in 1931 by an English aristocrat and planter Sir Thomes Villers. This bungalow located in between Ella and Haputhale. Wrapped in the tranquility of the mistry hills, Adisham Bungalow attracts every eye that falls on it </p>"
}

function halpewattaFact(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Halpewatta Tea Factory</h2><p>This factory Built in 1940, during the British rule. you can have a tour inside this factory and tase the best tea in Sri Lanka</p>"
}

function cabanas(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Cabanas</h2><p>Ella cabanas are one of the most famous thing. You can have another level of experience here. Also cabanas offers you some activities and services like hiking, walking tours, cookin class, bike tours.</p>"
}




function littleAdamPeak(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Little Adam's Peak</h2><p>This mountain is  1141m height. This place attracts many travelers who comes to Sri Lanka. when climbing this mountain you have to walk through lush green tea plantations, waterfalls and many other beautiful viewes</p>"
}

function flyingRawana(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Flying Rawana</h2><p> This located at the entrance of the little adam's peak. Two wires Zip-line stretches for more than half a kilometer. Sliding this offers you a bird's eye view of the beautiful hills of the island.</p>"
}

function ellaRock(image){
    prompt = document.getElementById("picture-select");
    prompt.src = image.src;


    document.getElementById("prompt-box").style.display = "block";
    document.getElementById("row").style.width = "40%";
    document.getElementById("picture-data").innerHTML = "<h2>Ella Rock</h2><p>Ella rock is  a superb hiking spot in ella with stunning views of nature. It is a 10Km round trip which can take 3-5 hours.</p>"
}

function cancelFunction(){
    document.getElementById("prompt-box").style.display = "none";
    document.getElementById("row").style.width = "100%";
}

// picture-description - end



// color thems change
const setTheme = theme => document.documentElement.className = theme;
document.getElementById("theme").addEventListener('change',function(){
    setTheme(this.value);
})


// To scroll descriptioon into veiw

document.querySelectorAll(".image-box").forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById("prompt-box").scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center'
       });
    })
})


var fonts = document.getElementById("font");
var font1 = document.getElementById("font-1");
var font2 = document.getElementById("font-2");
var font3 = document.getElementById("font-3");

fonts.addEventListener("click", function () {
    let selectedSize = fonts.value;
    if (selectedSize == "font-1") {
        document.querySelector("#picture-data h2").style.fontSize = "20px";
        document.querySelector("#picture-data p").style.fontSize = "15px";
    }
    if (selectedSize == "font-2") {
        document.querySelector("#picture-data h2").style.fontSize = "23px";
        document.querySelector("#picture-data p").style.fontSize = "19px";
        
    }
    if (selectedSize == "font-3") {
        document.querySelector("#picture-data h2").style.fontSize = "25px";
        document.querySelector("#picture-data p").style.fontSize = "22px";
    }  
})


document.getElementById("theme").addEventListener('change',function(){
    if (theme.value == "light") {
        var light = document.querySelector(':root');
        light.style.setProperty('--page-name-bg-color', "#6daa23");
        light.style.setProperty('--prompt-box-bg-color', "rgb(117, 179, 84)");
    }
    else if (theme.value == "dark") {
        var dark = document.querySelector(':root');
        dark.style.setProperty('--page-name-bg-color', "rgb(78, 141, 109)");
        dark.style.setProperty('--prompt-box-bg-color', "rgb(73, 119, 93)");

    }
    else if (theme.value == "blue") {
        var blue = document.querySelector(':root');
        blue.style.setProperty('--page-name-bg-color', "rgb(97, 218, 248)");
        blue.style.setProperty('--prompt-box-bg-color', "rgb(63, 110, 170)");

    }
    else {
        function changeRandom() {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var random = document.querySelector(':root');
            random.style.setProperty('--page-name-bg-color', "#" + randomColor);
            random.style.setProperty('--prompt-box-bg-color', "#" + randomColor);
        }
        changeRandom();
    }
})