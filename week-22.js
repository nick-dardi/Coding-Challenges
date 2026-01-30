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
let January = 31; 
let February = 28;
let March = 31;
let April = 30;
let May = 31;
let June = 30;
let July = 31;
let August = 31;
let September = 30;
let October = 31;
let November = 30;
let December = 31; 
let Year = 365;

findLeaps()
function findLeaps(){
    for(let i = 1901; i <= 2000; i++ ){
        if(i % 4 == 0 || i % 400 == 0){
            console.log(i)
            February = 29;
            Year = 366;
        }
    }
}

function countSundays(){
    for(let i = 1901; i <= 2000; i++ ){

    }
}