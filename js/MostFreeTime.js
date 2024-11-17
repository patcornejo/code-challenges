/*
Most Free Time Have the function MostFreeTime (strArr) read the strArr parameter being passed which will represent a
full day and will be filled with events that span from time X to time Y in the day. The format of each event will be
hh:mmAM/PMhh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM02:45PM","09:10AM-09:50AM"].
Your program will have to output the longest amount of free time available between the start of your first event and
the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest
 event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the
 earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at
 least 3 events and the events may be out of order.
 */

// Using moment library
function MostFreeTime(strArr) {
   let moment = require('moment');
   const listMoment = strArr.map(x => x.split("-").map(y => moment(y, "HH:mm A"))).flat();
   const listMomentSorted = listMoment.sort((a, b) => a - b);
   let time = -Infinity;

   for (let i = 0; i < listMomentSorted.length; i++) {
       if (i % 2 !== 0 && listMomentSorted[i + 1] !== undefined) {
           const rest = (listMomentSorted[i + 1].diff(listMomentSorted[i])) / 1000;
           if (rest > time) {
               time = rest;
           }
       }
   }

   const hours = Math.floor(time / 3600);
   const minutes = Math.floor((time % 3600) / 60);
   return `${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}`;
}

console.log(MostFreeTime(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]))
console.log(MostFreeTime(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]))
console.log(MostFreeTime(["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]))