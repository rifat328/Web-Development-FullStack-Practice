setTimeout(myFunction, 3000);
function myFunction(value) {
  console.log(`CallBack Function is called after ${3} Seconds`);
  value === undefined ? (value = null) : console.log(value);
}

setTimeout(() => {
  const value = "Bangladesh";
  myFunction(value);
}, 1000);

const intervalId = setInterval(() => {
  let date = new Date();
  console.log(
    date.getSeconds() + ":" + date.getMinutes() + ":" + date.getHours() / 2
  );
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Intervel Cleared.");
}, 10000);
