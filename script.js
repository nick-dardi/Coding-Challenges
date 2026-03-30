//You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let currentDayofWeek = 0;
let sundays = 0;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let startingYear = parseInt(document.getElementById("inputField").value);

findLeaps()
function findLeaps(){
    for(let i = startingYear; i <= 2000; i++ ){
        if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
            months[1] = 29;
            console.log("leap year: " + i);
        } else {
            months[1] = 28;
        }
    }
}
function countSundays(){
    for (let monthIndex = 0; monthIndex < months.length; monthIndex++){
        if(days[currentDayofWeek] == "Sunday"){
                sundays++;
        }
        currentDayofWeek = (currentDayofWeek + months[monthIndex]) % 7;
    }
}

document.addEventListener('DOMContentLoaded', function() {
     Swal.fire("The number of Sundays that fell on the first of the month during the twentieth century is: " + sundays);
});
console.log(sundays);

// I got 172 which is incorrect
// I need to check the dayofweek and days logic to make sure that they are correscponding with eachother with the right day.
// This was my first attempt at the counting sundays portion of the code and I think I will try a different method of counting the days and checking for sundays without using modlus. 
// This week I added a library into my code. I used sweet alert to display the answer in a pop up instead of the console. I will continue to debug my code and try to find the error in my logic.
// I will start to break down my code and separate it to allow for easier error checking and debugging. I will also add more console logs to check the values of the variables at different points in the code to see where the error is occurring. 
// I will also try to find a different method of counting the days and checking for sundays without using modulus to see if that helps me find the error.