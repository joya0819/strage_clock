import clock from "clock";
import document from "document";

// 粒度
clock.granularity = "seconds";

let hourHand1 = document.getElementById("hours1");//外側の時間
let hourHand2 = document.getElementById("hours2");//内側の時間
let minHand1 = document.getElementById("mins1");//外側の分
let minHand2 = document.getElementById("mins2");//内側の分

// 外側の時間の動き方　1時間に36度進む
function hoursToAngle1(hours) {
  let hourAngle1 = 36 * hours;
  return hourAngle1;
}

//内側の時間の動き方　10時間に60度進む
function hoursToAngle2(hours) {
  let hourAngle2 = 60 * Math.floor(hours/10);
  return hourAngle2;
}


// 外側の分の動き方 1分に36度進む
function minutesToAngle1(minutes) {
  return 36 * minutes;
}

// 内側の分の動き方 10分に60度進む
function minutesToAngle2(minutes) {
  let minutesAngle2 = 60 *Math.floor(minutes/10);
  return minutesAngle2;
}


// 単位時間で回転させる
function updateClock() {
  let today = new Date();
  let hours1 = today.getHours() % 24;
  let mins1 = today.getMinutes();
  let hours2 = today.getHours() % 24;
  let mins2 = today.getMinutes();

  hourHand1.groupTransform.rotate.angle = hoursToAngle1(hours1);
  minHand1.groupTransform.rotate.angle = minutesToAngle1(mins1);
  hourHand2.groupTransform.rotate.angle = hoursToAngle2(hours2);
  minHand2.groupTransform.rotate.angle = minutesToAngle2(mins2);
}

// アップデート
clock.ontick = () => updateClock();