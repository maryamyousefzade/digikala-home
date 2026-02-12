// آریه اعداد فارسی
const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

// تابع تبدیل هر رشته‌ای به معادل اعداد فارسی
function toPersianNumber(str) {
  return str.toString().replace(/\d/g, (d) => persianDigits[d]);
}

// پس از بارگذاری صفحه، هر المانی که کلاس persian-num دارد تبدیل می‌شود
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".persian-num").forEach((el) => {
    el.textContent = toPersianNumber(el.textContent);
  });
});
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".persian-num").forEach((el) => {
    el.textContent = toPersianNumber(el.textContent);
  });
});
