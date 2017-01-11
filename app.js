'use strict';

//constructor builds out a store with a location name and min/max customers per hour.
function CookieStore (locationName, minCust, maxCust, avgPerSale, opHours, hourlyCookies){
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.opHours = opHours;
  this.hourlyCookies = hourlyCookies;
  this.hourlyCustVolEst = function(){
    return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  };
}

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], []);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], []);
var seaCent = new CookieStore('Seattle Center', 11, 38, 1.7, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'], []);


CookieStore.prototype.hourlySoldAvg = function(){
  this.hourlyCookies = [];
  for (var i = 0; i < this.opHours.length; i++) {
    this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
    console.log(i + ': = hourlySoldAvg loop');
  }
  return this.hourlyCookies;
};

//Calculate hourly cookies sold and populate hourlyCookies for the object.
CookieStore.prototype.hourlyCookies = function(){
  this.runningTotal = 0;
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    runningTotal = this.hourlyCookies[i] + runningTotal;
    console.log(this.runningTotal + ': = dailyCookies sold loop');
  }
  console.log(runningTotal + ': = dailyCookiesTotal');
  return runningTotal;
};

//Write hourlyCookies sales to the DOM
CookieStore.prototype.hourlySalesWrite = function() {
  var todaySold = document.getElementById('sales-list');
  for (var i = 0; i < this.hourlyCookies.length; i++){
    var rowEl = document.createElement('li');
    rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
    todaySold.appendChild(rowEl);
};

//Write daily cookie sales to the DOM
CookieStore.prototype.dailySalesWrite = function(){
  document.createElement('li');
  dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
  todaySold.appendChild(this.dailySalesWrite);
};



// //get my hourlySoldAvg and write to the DOM
// firstAndPike.hourlySoldAvg();
// firstAndPike.dailyCookiesTotal();
// firstAndPike.hourlySalesWrite();
//
//
// var seaTacAirport = {
//   locationName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 1.2,
// //this store's hours of operation
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //hourly cookie sales
//   hourlyCookies: [],
//
//   hourlyCustVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//
//   hourlySoldAvg: function() {
//     this.hourlyCookies = [];
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
//       console.log(i + ': = hourlySoldAvg loop');
//     }
//     // console.log(this.dailyCookies + 'firstAndPike hourlyCookies');
//     // console.log(this.hourlyCookies + ': = Cookies Per Hour');
//     return this.hourlyCookies;
//   },
//
//   dailyCookiesTotal: function(){
//     var runningTotal = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       runningTotal = this.hourlyCookies[i] + runningTotal;
//       console.log(runningTotal + ': = dailyCookies sold loop');
//     }
//     console.log(runningTotal + ': = dailyCookiesTotal');
//     return runningTotal;
//   },
//   hourlySalesWrite: function(){
//     var todaySold = document.getElementById('sales-list');
//     for (var i = 0; i < this.hourlyCookies.length; i++){
//       var rowEl = document.createElement('li');
//       rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
//       todaySold.appendChild(rowEl);
//     }
//     var dailySalesWrite = document.createElement('li');
//     dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
//     todaySold.appendChild(dailySalesWrite);
//   }
// };
//
// //get my hourlySoldAvg and write to the DOM
// seaTacAirport.hourlySoldAvg();
// seaTacAirport.dailyCookiesTotal();
// seaTacAirport.hourlySalesWrite();
//
// var seaCent = {
//   locationName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 1.7,
// //this store's hours of operation
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //hourly cookie sales
//   hourlyCookies: [],
//
//   hourlyCustVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//
//   hourlySoldAvg: function() {
//     this.hourlyCookies = [];
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
//       console.log(i + ': = hourlySoldAvg loop');
//     }
//     // console.log(this.dailyCookies + 'firstAndPike hourlyCookies');
//     // console.log(this.hourlyCookies + ': = Cookies Per Hour');
//     return this.hourlyCookies;
//   },
//
//   dailyCookiesTotal: function(){
//     var runningTotal = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       runningTotal = this.hourlyCookies[i] + runningTotal;
//       console.log(runningTotal + ': = dailyCookies sold loop');
//     }
//     console.log(runningTotal + ': = dailyCookiesTotal');
//     return runningTotal;
//   },
//   hourlySalesWrite: function(){
//     var todaySold = document.getElementById('sales-list');
//     for (var i = 0; i < this.hourlyCookies.length; i++){
//       var rowEl = document.createElement('li');
//       rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
//       todaySold.appendChild(rowEl);
//     }
//     var dailySalesWrite = document.createElement('li');
//     dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
//     todaySold.appendChild(dailySalesWrite);
//   }
// };
//
// //get my hourlySoldAvg and write to the DOM
// seaCent.hourlySoldAvg();
// seaCent.dailyCookiesTotal();
// seaCent.hourlySalesWrite();
//
// var capHill = {
//   locationName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerSale: 1.7,
// //this store's hours of operation
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //hourly cookie sales
//   hourlyCookies: [],
//   hourlyCustVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//
//   hourlySoldAvg: function() {
//     this.hourlyCookies = [];
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
//       console.log(i + ': = hourlySoldAvg loop');
//     }
//     // console.log(this.dailyCookies + 'firstAndPike hourlyCookies');
//     // console.log(this.hourlyCookies + ': = Cookies Per Hour');
//     return this.hourlyCookies;
//   },
//
//   dailyCookiesTotal: function(){
//     var runningTotal = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       runningTotal = this.hourlyCookies[i] + runningTotal;
//       console.log(runningTotal + ': = dailyCookies sold loop');
//     }
//     console.log(runningTotal + ': = dailyCookiesTotal');
//     return runningTotal;
//   },
//   hourlySalesWrite: function(){
//     var todaySold = document.getElementById('sales-list');
//     for (var i = 0; i < this.hourlyCookies.length; i++){
//       var rowEl = document.createElement('li');
//       rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
//       todaySold.appendChild(rowEl);
//     }
//     var dailySalesWrite = document.createElement('li');
//     dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
//     todaySold.appendChild(dailySalesWrite);
//   }
// };
//
// //get my hourlySoldAvg and write to the DOM
// capHill.hourlySoldAvg();
// capHill.dailyCookiesTotal();
// capHill.hourlySalesWrite();
//
// var alki = {
//   locationName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerSale: 1.7,
// //this store's hours of operation
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
// //hourly cookie sales
//   hourlyCookies: [],
//   hourlyCustVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//
//   hourlySoldAvg: function() {
//     this.hourlyCookies = [];
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
//       console.log(i + ': = hourlySoldAvg loop');
//     }
//     // console.log(this.dailyCookies + 'firstAndPike hourlyCookies');
//     // console.log(this.hourlyCookies + ': = Cookies Per Hour');
//     return this.hourlyCookies;
//   },
//
//   dailyCookiesTotal: function(){
//     var runningTotal = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       runningTotal = this.hourlyCookies[i] + runningTotal;
//       console.log(runningTotal + ': = dailyCookies sold loop');
//     }
//     console.log(runningTotal + ': = dailyCookiesTotal');
//     return runningTotal;
//   },
//   hourlySalesWrite: function(){
//     var todaySold = document.getElementById('sales-list');
//     for (var i = 0; i < this.hourlyCookies.length; i++){
//       var rowEl = document.createElement('li');
//       rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
//       todaySold.appendChild(rowEl);
//     }
//     var dailySalesWrite = document.createElement('li');
//     dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
//     todaySold.appendChild(dailySalesWrite);
//   }
// };
//
// //get my hourlySoldAvg and write to the DOM
// alki.hourlySoldAvg();
// alki.dailyCookiesTotal();
// alki.hourlySalesWrite();
