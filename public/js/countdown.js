const now = new Date();
const endTime = new Date(now.getTime() + 24 * 60 * 60 * 10000);

function updateCountdown() {
  const current = new Date();
  let diff = endTime - current;

  if (diff <= 0) {
    diff = 0;
    clearInterval(intervalId);
  }

  const hours = String(Math.floor(diff / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor(diff / (1000 * 60)) % 60).padStart(2, "0");
  const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  const intervalId = setInterval(updateCountdown, 1000);
  document.getElementById("hours").textContent = toPersianNumber(hours);
  document.getElementById("minutes").textContent = toPersianNumber(minutes);
  document.getElementById("seconds").textContent = toPersianNumber(seconds);
}

const intervalId = setInterval(updateCountdown, 1000);
document.getElementById("hours").textContent = toPersianNumber(h);
document.getElementById("minutes").textContent = toPersianNumber(m);
document.getElementById("seconds").textContent = toPersianNumber(s);

updateCountdown();
