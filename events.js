import { setTime, countDown } from "./script.js";

export const timerSchedule = [...document.querySelectorAll(".timer_schedule")];

const timerBtn = document.querySelector(".timer_btn");

timerSchedule.forEach((item) => item.addEventListener("click", setTime));

timerBtn.addEventListener("click", countDown);