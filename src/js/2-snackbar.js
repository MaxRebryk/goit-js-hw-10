"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const fulfielled = document.querySelector(".fulfilled");
const rejected = document.querySelector(".rejected");
const input = document.querySelector(".input");

form.addEventListener("submit", (event) =>{
    const time = input.value;
    event.preventDefault();
    const makePromise = ({ value, time, shouldResolve = fulfielled.checked }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(shouldResolve) {
                    resolve(value)
                }
                else {
                    reject(value)
                }
            }, time);
        });
      };
    makePromise({ value: time, time})
    .then(value => iziToast.show({
        title: 'success',
        message: `✅ Fulfilled promise in ${time}ms`
    })) 
    .catch(error => iziToast.show({
        title: 'error',
        message: `❌ Rejected promise in ${time}ms`
    })
    ); 
});


