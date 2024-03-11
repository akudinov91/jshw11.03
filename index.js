// Задача 1.

// let car = {
//   manufacturer: "Mitsubishi",
//   model: "Pajero IO",
//   year: 2022,
//   averageSpeed: 75,
// };

// function displayCarInfo(car) {
//   console.log(`Manufacturer: ${car.manufacturer}`);
//   console.log(`Model: ${car.model}`);
//   console.log(`Year: ${car.year}`);
//   console.log(`Average Speed: ${car.averageSpeed} km/h`);
// }

// function calculateTravelTime(distance) {
//   const hoursOfDriving = distance / car.averageSpeed;
//   const breaks = Math.floor(hoursOfDriving / 4);
//   const totalHours = hoursOfDriving + breaks;

//   const hours = Math.floor(totalHours);
//   const minutes = Math.round((totalHours - hours) * 60);

//   console.log(`Total Travel Time: ${hours} hours and ${minutes} minutes`);
// }

// displayCarInfo(car);
// calculateTravelTime(300);

// Задача 2. 



// Задача 3.

// function Time(hours, minutes, seconds) {
//   this.hours = hours || 0;
//   this.minutes = minutes || 0;
//   this.seconds = seconds || 0;
// }

// Time.prototype.displayTime = function () {
//   console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
// };

// Time.prototype.addSeconds = function (secondsToAdd) {
//   this.seconds += secondsToAdd;
//   this.normalizeTime();
// };

// Time.prototype.addMinutes = function (minutesToAdd) {
//   this.minutes += minutesToAdd;
//   this.normalizeTime();
// };

// Time.prototype.addHours = function (hoursToAdd) {
//   this.hours += hoursToAdd;
//   this.normalizeTime();
// };

// Time.prototype.normalizeTime = function () {
//   let extraMinutes = Math.floor(this.seconds / 60);
//   this.seconds %= 60;

//   this.minutes += extraMinutes;
//   let extraHours = Math.floor(this.minutes / 60);
//   this.minutes %= 60;

//   this.hours += extraHours;
//   this.hours %= 24;
// };

// let currentTime = new Time(20, 30, 45);
// currentTime.displayTime();

// currentTime.addSeconds(30);
// currentTime.displayTime();

// currentTime.addMinutes(5);
// currentTime.displayTime();

// currentTime.addHours(2);
// currentTime.displayTime();
