//--navBar
var activeId = "option3";
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

//resize navber
window.addEventListener("resize", resizing_func);
//navbar--

let score = 0;
let answered_questions = 0;

let score_panel = document.getElementById("after-quiz");
let summary_b = document.getElementById("q-summary");

// score_panel.style.display = "none";
summary_b.style.display = "none";

function show_summary() {
    score_panel.style.display = "inline";
    summary_b.style.display = "inline";
    if(score < 5){
        document.getElementById("score-holder").style.color = "rgb(200, 60, 60)";
        document.getElementById("score_h").style.color = "rgb(200, 60, 60)";
        document.getElementById("score-holder").style.fontWeight = "bold";
    } else {
        document.getElementById("score-holder").style.color = "white";
        document.getElementById("score_h").style.color = "white";
    }
    document.getElementById("score-holder").innerHTML = `${score}/10`;
    document.getElementById("answered").innerHTML = `${answered_questions}/10`;
    document.getElementById("time-taken").innerHTML = `${60-seconds} seconds`;

    document.getElementById("remains").innerHTML = `${answered_questions} questions answered`;
    times.innerHTML = `Time taken : ${60-seconds}`
}

function getsAns() {
    for(let i = 1; i <= 10; i++){
        let radio = document.getElementsByName("answer" + i);
        let uncheckedcount = 0;
        for(let n = 0; n<radio.length; n++){
            if(radio[n].checked){
                if(radio[n].id == correct_answers[i-1]){
                    document.getElementById(radio[n].id + "L").style.color = "white"; // makes correct answer green 
                    document.getElementById(correct_answers[i-1] + "div").style.backgroundColor = "#55a630"; // make correct answer green 
                    score ++ 
                } else {
                    document.getElementById(correct_answers[i-1] + "L").style.color = "white"; // make correct answer green 
                    document.getElementById(correct_answers[i-1] + "div").style.backgroundColor = "#55a630"; // make correct answer green 
                    document.getElementById(correct_answers[i-1] + "feedback").innerHTML = `Correct Answer : `
                    document.getElementById(correct_answers[i-1] + "feedback").style.fontWeight = "bold";
                    document.getElementById(radio[n].id + "L").style.color = "white"; // makes incorrect answer red 
                    document.getElementById(radio[n].id + "div").style.backgroundColor = "rgb(200, 60, 60)"; // makes incorrect answer red 
                    document.getElementById(radio[n].id + "feedback").innerHTML = `Your answer : `
                    document.getElementById(radio[n].id + "feedback").style.fontWeight = "bolder";
                }
                answered_questions++;
            } else{
                uncheckedcount++;
            }
        }
        if(uncheckedcount == 4){
            document.querySelector(`#question${i} .not_answered`).style.display = "block";
            document.getElementById(correct_answers[i-1] + "L").style.color = "white"; // make correct answer green 
            // document.getElementById(correct_answers[i-1] + "div").style.backgroundColor = "rgba(119, 188, 35, 0.896)"; // make correct answer green 
            document.getElementById(correct_answers[i-1] + "div").style.backgroundColor = "#55a630"; // make correct answer green 
            document.getElementById(correct_answers[i-1] + "feedback").innerHTML = `Correct Answer : `
            document.getElementById(correct_answers[i-1] + "feedback").style.fontWeight = "bold";
        }        

        for(let i = 0; i < radio_buttons.length; i++){
            radio_buttons[i].disabled = true;
        }



        show_summary(); // shows the score summary when the submit buttonis pressed and also if the timer runs out 

    }
    
}

let answered = [];

document.getElementById("close").addEventListener("click", () => { // the cross used to close the summary window
    score_panel.style.display = "none";
})

let i = 0;

var increase_scale;
var reduce_scale;

document.querySelectorAll(".answers").forEach(radio => {radio.addEventListener("click", ()=>{
    let ans = document.querySelectorAll(`input[type=radio][name=${radio.name}]`);
    for(let i =0; i<ans.length; i++){
        if(ans[i].checked){
            ans[i].parentElement.classList.add("selectedDiv");
        } else {
            ans[i].parentElement.classList.remove("selectedDiv");
        }
    }

    if(answered.length == 0){
        answered[i] = radio.name;
        i++;
    } else {
        let existing = 0;
        for(let n = 0; n<answered.length; n++){
            if(radio.name == answered[n]){
                existing++;
            }
        }
        if(existing == 0){
            answered[i] = radio.name;
            i++;
        }
    
    }

    document.getElementById("remains").innerHTML = `${10-answered.length} Questions remaining`;
    if(answered.length == 10){
        increase_scale = setInterval(() => {submit_botton.style.transform = "scale(1.25)"}, 800);
        reduce_scale = setInterval(() => {submit_botton.style.transform = "scale(0.85)"}, 900);
    }

})
    
});


let seconds = 60;
let times = document.getElementById("time");

let radio_buttons = document.getElementsByClassName("answers");
let correct_answers = ["1B", "2B", "3C", "4B", "5A", "6A", "7B", "8A", "9C", "0C"]; // array of correct answers 

function second_counter(){
        seconds--;
        console.log(seconds);
        times.innerHTML = `Timer : ${seconds}s`;
        if(seconds == 0){
            clearInterval(timer);
            getsAns();
            clearInterval(reduce_scale);
            clearInterval(increase_scale);
            submit_botton.style.transform = "scale(1)";
            
        }
}

// centers page when question clicked
document.querySelectorAll(".question").forEach(div => {
    div.addEventListener("click", () => {
        document.getElementById(`${div.id}`).scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center'
          });
    })
})


var timer = setInterval(second_counter, 1000);

summary_b.addEventListener("click", show_summary);

let submit_botton = document.getElementById("submit");

submit_botton.addEventListener("click", () => {getsAns();
    clearInterval(timer);
    clearInterval(reduce_scale);
    clearInterval(increase_scale);
    submit_botton.style.transform = "scale(1)";
    submit_botton.style.display = "none";
});