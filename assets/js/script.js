//header date variables

//header date that works but without moment.js
// var today = new Date();
// var date = today.getFullYear()+' / '+(today.getMonth()+1)+' / '+today.getDate();
// var weekday = new Date().toLocaleDateString('en', {weekday:'long'});
// document.getElementById("currentDay").innerHTML = weekday+" "+" "+" "+date;

//header date with moment.js that does not work (??)
var today = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = today;

//text area by hour variables
var hour9 = document.getElementById("hour9");
var hour10 = document.getElementById("hour10");
var hour11 = document.getElementById("hour11");
var hour12 = document.getElementById("hour12");
var hour13 = document.getElementById("hour13");
var hour14 = document.getElementById("hour14");
var hour15 = document.getElementById("hour15");
var hour16 = document.getElementById("hour16");
var hour17 = document.getElementById("hour17");

//save button variables
var save9 = document.getElementById("save9");
var save10 = document.getElementById("save10");
var save11 = document.getElementById("save11");
var save12 = document.getElementById("save12");
var save1 = document.getElementById("save1");
var save2 = document.getElementById("save2");
var save3 = document.getElementById("save3");
var save4 = document.getElementById("save4");
var save5 = document.getElementById("save5");

//save button event listeners
save9.addEventListener("click", function () {
    task9 = hour9.value;
    localStorage.setItem("savedTask9", task9);
});

save10.addEventListener("click", function () {
    task10 = hour10.value;
    localStorage.setItem("savedTask10", task10);
});

save11.addEventListener("click", function () {
    task11 = hour11.value;
    localStorage.setItem("savedTask11", task11);
});

save12.addEventListener("click", function () {
    task12 = hour12.value;
    localStorage.setItem("savedTask12", task12);
});

save1.addEventListener("click", function () {
    task1 = hour13.value;
    localStorage.setItem("savedTask1", task1);
});

save2.addEventListener("click", function () {
    task2 = hour14.value;
    localStorage.setItem("savedTask2", task2);
});

save3.addEventListener("click", function () {
    task3 = hour15.value;
    localStorage.setItem("savedTask3", task3);
});

save4.addEventListener("click", function () {
    task4 = hour16.value;
    localStorage.setItem("savedTask4", task4);
});

save5.addEventListener("click", function () {
    task5 = hour17.value;
    localStorage.setItem("savedTask5", task5);
});

//load local storage
var savedTask9 = localStorage.getItem('savedTask9') || [];
hour9.value = savedTask9;

var savedTask10 = localStorage.getItem('savedTask10') || [];
hour10.value = savedTask10;

var savedTask11 = localStorage.getItem('savedTask11') || [];
hour11.value = savedTask11;

var savedTask12 = localStorage.getItem('savedTask12') || [];
hour12.value = savedTask12;

var savedTask1 = localStorage.getItem('savedTask1') || [];
hour13.value = savedTask1;

var savedTask2 = localStorage.getItem('savedTask2') || [];
hour14.value = savedTask2;

var savedTask3 = localStorage.getItem('savedTask3') || [];
hour15.value = savedTask3;

var savedTask4 = localStorage.getItem('savedTask4') || [];
hour16.value = savedTask4;

var savedTask5 = localStorage.getItem('savedTask5') || [];
hour17.value = savedTask5;



//check time function
var time = setInterval(function() {
        //check time variables
    var currentHour = moment().hour();
    $('textarea').each(function() {
        var blockTime = $(this).attr('id').replace('hour', '');
        console.log(typeof blockTime, typeof currentHour);
        //if currentHour < time, turn this seciton grey
        if (currentHour > blockTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        //if currentHour = time, section becomes red
        } else if (currentHour == blockTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        //if currentHour > time, then setion be green
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
    
}, 15000);









