const mgycm2Input = document.querySelector("#mgycm2 >input");
const cgycm2Input = document.querySelector("#cgycm2 >input");
const dgycm2Input = document.querySelector("#dgycm2 >input");
const gycm2Input = document.querySelector("#gycm2 >input");
const μgym2Input = document.querySelector("#μgym2 >input");
const mgym2Input = document.querySelector("#mgym2 >input");
const gym2Input = document.querySelector("#gym2 >input");

function roundNum(num) {
  return Math.round(num * 100000000000) / 100000000000;
}

function mgycm2Conversions() {
  const mgycmDose = parseFloat(mgycm2Input.value);
  const cgycmDose = mgycmDose / 10;
  const dgycmDose = mgycmDose / 100;
  const gycmDose = mgycmDose / 1000;
  const μgymDose = mgycmDose / 10;
  const mgymDose = mgycmDose / 10000;
  const gymDose = mgycmDose / 10000000;
  cgycm2Input.value = roundNum(cgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  μgym2Input.value = roundNum(μgymDose);
  mgym2Input.value = roundNum(mgymDose);
  gym2Input.value = roundNum(gymDose);
}

function cgycm2Conversions() {
  const cgycmDose = parseFloat(cgycm2Input.value);
  const mgycmDose = cgycmDose * 10;
  const dgycmDose = cgycmDose / 10;
  const gycmDose = cgycmDose / 100;
  const μgymDose = cgycmDose / 1;
  const mgymDose = cgycmDose / 1000;
  const gymDose = cgycmDose / 1000000;
  mgycm2Input.value = roundNum(mgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  μgym2Input.value = roundNum(μgymDose);
  mgym2Input.value = roundNum(mgymDose);
  gym2Input.value = roundNum(gymDose);
}

function dgycm2Conversions() {
  const dgycmDose = parseFloat(dgycm2Input.value);
  const mgycmDose = dgycmDose * 100;
  const cgycmDose = dgycmDose * 10;
  const gycmDose = dgycmDose / 10;
  const μgymDose = dgycmDose * 10;
  const mgymDose = dgycmDose / 100;
  const gymDose = dgycmDose / 100000;
  mgycm2Input.value = roundNum(mgycmDose);
  cgycm2Input.value = roundNum(cgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  μgym2Input.value = roundNum(μgymDose);
  mgym2Input.value = roundNum(mgymDose);
  gym2Input.value = roundNum(gymDose);
}

function gycm2Conversions() {
  const gycmDose = parseFloat(gycm2Input.value);
  const mgycmDose = gycmDose * 1000;
  const cgycmDose = gycmDose * 100;
  const dgycmDose = gycmDose * 10;
  const μgymDose = gycmDose * 100;
  const mgymDose = gycmDose / 10;
  const gymDose = gycmDose / 10000;
  mgycm2Input.value = roundNum(mgycmDose);
  cgycm2Input.value = roundNum(cgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  μgym2Input.value = roundNum(μgymDose);
  mgym2Input.value = roundNum(mgymDose);
  gym2Input.value = roundNum(gymDose);
}

function μgym2Conversions() {
  const μgymDose = parseFloat(μgym2Input.value);
  const mgycmDose = μgymDose * 10;
  const cgycmDose = μgymDose * 1;
  const dgycmDose = μgymDose / 10;
  const gycmDose = μgymDose / 100;
  const mgymDose = μgymDose / 1000;
  const gymDose = μgymDose / 1000000;
  mgycm2Input.value = roundNum(mgycmDose);
  cgycm2Input.value = roundNum(cgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  mgym2Input.value = roundNum(mgymDose);
  gym2Input.value = roundNum(gymDose);
}

function mgym2Conversions() {
  const mgymDose = parseFloat(mgym2Input.value);
  const mgycmDose = mgymDose * 10000;
  const cgycmDose = mgymDose * 1000;
  const dgycmDose = mgymDose * 100;
  const gycmDose = mgymDose * 10;
  const μgymDose = mgymDose * 1000;
  const gymDose = mgymDose / 1000;
  mgycm2Input.value = roundNum(mgycmDose);
  cgycm2Input.value = roundNum(cgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  μgym2Input.value = roundNum(μgymDose);
  gym2Input.value = roundNum(gymDose);
}

function gym2Conversions() {
  const gymDose = parseFloat(gym2Input.value);
  const mgycmDose = gymDose * 10000000;
  const cgycmDose = gymDose * 1000000;
  const dgycmDose = gymDose * 100000;
  const gycmDose = gymDose * 10000;
  const μgymDose = gymDose * 1000000;
  const mgymDose = gymDose * 1000;
  mgycm2Input.value = roundNum(mgycmDose);
  cgycm2Input.value = roundNum(cgycmDose);
  dgycm2Input.value = roundNum(dgycmDose);
  gycm2Input.value = roundNum(gycmDose);
  μgym2Input.value = roundNum(μgymDose);
  mgym2Input.value = roundNum(mgymDose);
}

mgycm2Input.addEventListener("input", mgycm2Conversions);
cgycm2Input.addEventListener("input", cgycm2Conversions);
dgycm2Input.addEventListener("input", dgycm2Conversions);
gycm2Input.addEventListener("input", gycm2Conversions);
μgym2Input.addEventListener("input", μgym2Conversions);
mgym2Input.addEventListener("input", mgym2Conversions);
gym2Input.addEventListener("input", gym2Conversions);

main();
