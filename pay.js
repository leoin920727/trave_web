"use strict"
// ##################################################
// 購買按鈕
const btn = document.querySelectorAll(".paybtn");
for (let i of btn) {
    i.addEventListener("click", checked);
}
function checked() {
    const tp = document.querySelector(".totalP").innerHTML;
    const ck = document.querySelector("#flexCheckChecked").checked;
    if (!ck) {
        alert("請完整閱讀完「旅遊契約書」與「報名須知」，並同意所有規定事項")
    } else if (parseInt(personal.innerHTML) > 9) {
        alert("人數超出上限，請變更人數")
    } else {
        if (confirm(`總金額是 NT$${tp}\n確定要購買嗎?`)) {
            window.location.href = "./pay2.html"
        }
    }
}
// ##################################################
// 購買數量
const num = document.querySelectorAll(".paycalc");
const cnt = document.querySelectorAll(".count");
const price = document.querySelectorAll(".payprice");
const total = document.querySelector(".total");
const totalp = document.querySelector(".totalP");
const personal = document.querySelector(".person");
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("change", () => {
        let cum = 0;
        cnt[i].innerHTML = num[i].value;
        for (let x = 0; x < cnt.length; x++) {
            cum += (parseInt(price[x].innerHTML.replace(",", "")) * parseInt(cnt[x].innerHTML));
        }
        total.innerHTML = cum;
        totalp.innerHTML = cum;
        cum = 0;
        for (let z of num) {
            cum += parseInt(z.value)
        }
        personal.innerHTML = cum;
        if (parseInt(personal.innerHTML) > 9) {
            alert("人數超出上限，請變更人數")
        }
    }
    )
}
// ##################################################
// 訂單時間
const day = new Date()
const Y = day.getFullYear()
const M = (day.getMonth() + 1).toString().padStart(2, "0");
const D = day.getDate().toString().padStart(2, "0");
const hh = day.getHours().toString().padStart(2, "0");
const mm = day.getMinutes().toString().padStart(2, "0");
const T = document.querySelector("#time")
window.onload = () => {
    T.innerHTML = `${Y}-${M}-${D} ${hh}:${mm}`
};
