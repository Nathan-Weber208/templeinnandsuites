let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date(document.lastModified);

let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayname + ", " + monthname + " " + d.getDate() + ", " + year;


document.getElementById("currentdate1").innerHTML = fulldate;
document.getElementById("currentdate2").innerHTML = fulldate;

document.getElementById("currentyear").innerHTML = year;
