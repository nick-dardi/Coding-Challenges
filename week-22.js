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

findLeaps()
function findLeaps(){
    for(let i = 1901; i <= 2000; i++ ){
        if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
            months[1] = 29;
            console.log("leap year: " + i);
        } else {
            months[1] = 28;
        }
        for (let monthIndex = 0; monthIndex < months.length; monthIndex++){
            if(days[currentDayofWeek] == "Sunday"){
                sundays++;
            }
            currentDayofWeek = (currentDayofWeek + months[monthIndex]) % 7;
        }
    }
}
console.log(sundays);