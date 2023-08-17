const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futrueDate = new Date(2024, 5, 21, 17, 30, 0);

const year = futrueDate.getFullYear();
const hours = futrueDate.getHours();
const minutes = futrueDate.getMinutes();

let month = months[futrueDate.getMonth()];
let date = futrueDate.getDate();

const weekday = weekdays[futrueDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

const futureTime = futrueDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = oneDay / 24;
  const oneMinute = oneHour / 60;
  const oneSec = 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired>expired giveaway<h4/>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
