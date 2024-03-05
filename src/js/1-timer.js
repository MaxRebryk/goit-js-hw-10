"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
const addZero = (obj) => {
    for (let key in obj){
        let value = obj[key];
        if(value.toString().length < 2){
            value = "0" + value.toString();
            obj[key] = value;
            
        }
    return obj;
    }
}
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
const dateInput = document.querySelector("#datetime-picker");


let serSelectedDate;
const button = document.querySelector("[data-start]");
button.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      serSelectedDate = selectedDates[0];
      if(serSelectedDate < Date.now()){
        iziToast.show({
            title: 'Error',
            message: 'Please choose a date in the future'
        });
        button.disabled = true;
      }
      if (serSelectedDate > Date.now()){
        button.disabled = false;
      }
    },
  };
  
flatpickr("#datetime-picker", options);



button.addEventListener("click", (event) => {
    const interval = () =>{
        button.disabled = true;
        dateInput.disabled = true;
        const ms = serSelectedDate - Date.now();
        const dateObj = convertMs(ms);
        addZero(dateObj);
        days.textContent = dateObj.days;
        hours.textContent = dateObj.hours;
        minutes.textContent = dateObj.minutes;
        seconds.textContent = dateObj.seconds;
        if (ms <= 0){
            clearInterval(timers);
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
        }

    }
    const timers = setInterval(interval,1000)
});

