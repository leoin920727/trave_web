"use strict"
// ###Form搜尋欄########################################
const hh = document.querySelector('#inputSearch');
const qq = document.querySelectorAll('.searchDiv');
const ll = document.querySelectorAll('.LL');
const formS = document.querySelector("#formSelect")
const formB = document.querySelector("#formBtn")
for (let i = 0; i < qq.length; i++) {
    formS.addEventListener("change", () => {
        hh.value = ""
        qq[i].style.display = "none";
    });
    formB.addEventListener("click", () => {
        let value = hh.value;
        switch (value) {
            case "美國":
            case "加拿大":
            case "中南美州":
            case "中西歐":
            case "南北歐":
            case "東歐": {
                window.location.href = "./tab0-us.html"
                break;
            }
            case "北海道":
            case "關東":
            case "關西":
            case "首爾":
            case "東京":
            case "大阪":
            case "沖繩":
            case "九州":
            case "名古屋":
            case "釜山":
            case "濟州": {
                window.location.href = "./tab0-jk.html"
                break;
            }
            case "泰國":
            case "馬來西亞":
            case "新加坡":
            case "越南":
            case "菲律賓":
            case "巴厘島": {
                window.location.href = "./tab0-sa.html"
                break;
            }
            case "歌詩達郵輪":
            case "公主郵輪":
            case "地中海郵輪":
            case "名勝世界郵輪":
            case "龐洛郵輪": {
                window.location.href = "./tab2.html"
                break;
            }
            case "台中市":
            case "新北市":
            case "高雄市":
            case "台南市":
            case "桃園市":
            case "嘉義市":
            case "新竹市":
            case "基隆市":
            case "宜蘭縣":
            case "南投縣":
            case "花蓮縣":
            case "台東縣":
            case "屏東縣":
            case "彰化縣":
            case "苗栗縣":
            case "嘉義縣":
            case "新竹縣":
            case "澎湖縣":
            case "金門縣":
            case "馬祖縣":
            case "綠島":
            case "小琉球":
            case "蘭嶼":
            case "台北市": {
                window.location.href = "./tab1.html"
                break;
            }
            default: {
                break;
            }
        }
    })
    hh.addEventListener("click", () => {
        hh.value = ""
        let value = formS.value;
        switch (value) {
            case "國外旅遊": {
                qq[0].style.display = "block";
                break;
            }
            case "國內旅遊": {
                qq[1].style.display = "block";
                break;
            }
            case "自由行": {
                qq[2].style.display = "block";
                break;
            }
            case "郵輪": {
                qq[3].style.display = "block";
                break;
            }
            default: {
                break;
            }
        }
    })
}
for (let i = 0; i < ll.length; i++) {
    ll[i].addEventListener("click", () => {
        hh.value = ll[i].innerText;
        let value = formS.value;
        switch (value) {
            case "國外旅遊": {
                qq[0].style.display = "none";
                break;
            }
            case "國內旅遊": {
                qq[1].style.display = "none";
                break;
            }
            case "自由行": {
                qq[2].style.display = "none";
                break;
            }
            case "郵輪": {
                qq[3].style.display = "none";
                break;
            }
            default: {
                break;
            }
        }
    })
}
// ######MAP分頁按鈕######
// 1.宣告button和content的變數
const mBtn = document.querySelectorAll(".mapBtn");
const mTab = document.querySelectorAll(".map")
// mBtn.forEach((tab,index)=>{console.log(tab),console.log(index)})
// 2.loop每一個按鍵添加1個函數,參數為tab和index
mBtn.forEach((tab, index) => {
    // 3.給每個tab添加點擊事件
    tab.addEventListener("click", () => {
        // 3-1.loop每一個contents添加1個函數,移除"active"
        mTab.forEach((content) => { content.classList.remove("active"); })
        // 3-2.loop每一個tabs添加1個函數,移除"active"
        mBtn.forEach((tab) => { tab.classList.remove("active"); })
        // 4.forEach()給每個按鍵添加函數(tab, index) => {...}
        // 所以每個按鍵的函數參數皆不同,利用這點可以選取指定按鈕來添加"active"
        // 列如: mBtn[0], index = 0
        // tab = [mBtn[0], mBtn[1], mBtn[2]]; index = [0, 1, 2]
        mTab[index].classList.add("active");
        mBtn[index].classList.add("active");
    })
})
// ##############################################################
// 創造卡片1
// 標記按鈕
const copy0 = document.querySelectorAll(".copy0")
const obj = [
    ["《玩美加族》臥谷長榮美西９日~大峽谷、優勝美地(舊金山進)", "《玩美加族》美加東全覽１３日-多倫多進紐約出 ",
        "超值義大利10日-羅馬.翡冷翠.威尼斯.五漁村(國泰航空) ", "北海道．紫愛浪漫５日-函館山夜景、絢麗花海、企鵝遊行【千千】 ",
        "FUN肆玩雙迪士尼5日-淺草.和服體驗.晴空塔.兩日迪士尼 ", "《新品上市推薦》【暑假精選】樂遊東京５日-箱根.晴空塔.迪士尼.長腳蟹吃到飽 "],
    ["《玩美加族》臥谷長榮美西９日~大峽谷、優勝美地(舊金山進)", "超值義大利10日-羅馬.翡冷翠.威尼斯.五漁村(國泰航空) ",
        "超值義大利10日-羅馬.翡冷翠.威尼斯.五漁村(國泰航空) ", "超值義大利10日-羅馬.翡冷翠.威尼斯.五漁村(國泰航空) ",
        "精彩義大利10日-托斯卡尼豔陽下.天空之城.羅馬假期 ", "超值義大利10日-羅馬.翡冷翠.威尼斯.五漁村(國泰航空)"],
    ["北海道．紫愛浪漫５日-函館山夜景、絢麗花海、企鵝遊行【千千】", "FUN肆玩雙迪士尼5日-淺草.和服體驗.晴空塔.兩日迪士尼",
        "FUN肆玩雙迪士尼5日-淺草.和服體驗.晴空塔.兩日迪士尼", "《購物二站》金艷米其林５日～渠道滑車、穿韓服遊古宮、3晚四星【長榮】 ",
        "真愛玩首爾５日～愛寶樂園、夢幻玻璃屋、北村韓屋村【真航空】 ", "《購物二站》韓國寶味讚５日～南怡島、漫畫博物館、樂天世界、羊牧場【長榮】"],
    ["泰國四面佛", "水上市場", "新加坡獅頭魚", "新加坡百貨公司", "馬來西亞", "印尼"]];
const price = [
    ["94,900", "104,900", "84,900", "98,900", "112300", "89,900"],
    ["94,900", "104,900", "84,900", "98,900", "112300", "89,900"],
    ["94,900", "104,900", "84,900", "98,900", "112300", "89,900"],
    ["94,900", "104,900", "84,900", "98,900", "112300", "89,900"]]
// 標記父元素
const A = document.querySelectorAll(".a0")
copy0.forEach((x, y) => {
    x.addEventListener("click", () => {
        // 點擊時清空分頁
        A[y].innerHTML = "";
        for (let i = 0; i < obj[y].length; i++) {
            // <div class="col d-flex justify-content-center p-3 cardStyle">
            const d1 = document.createElement("div")
            d1.setAttribute("class", "col d-flex justify-content-center p-3 cardStyle")
            A[y].appendChild(d1)
            // <div class="card" style="width: 25rem;">
            const d2 = document.createElement("div")
            d2.setAttribute("class", "card")
            d2.setAttribute("style", "width: 25rem;")
            d1.appendChild(d2)
            // <img src="./ship/oversea-01-item01.png" class="card-img-top">
            const i1 = document.createElement("img")
            i1.setAttribute("class", "card-img-top")
            i1.setAttribute("src", `./tabimg/${y}/${i}.jpg`)
            d2.appendChild(i1)
            // <div class="p-0 pt-3 d-flex flex-column justify-content-center">
            const d3 = document.createElement("div")
            d3.setAttribute("class", "p-0 pt-3 d-flex flex-column justify-content-center")
            d2.appendChild(d3)
            // <h5 class="card-title" style="font-weight: bold;">莎倫娜號 基隆港出發</h5>
            const h = document.createElement("h5")
            h.setAttribute("class", "card-title")
            h.setAttribute("style", "font-weight: bold;")
            h.textContent = `${obj[y][i]}`
            d3.appendChild(h)
            // <p class="card-text" id="cardText">
            const p1 = document.createElement("p")
            p1.setAttribute("class", "card-text")
            p1.setAttribute("id", "cardText")
            d3.appendChild(p1)
            // <span class="bg-warning">
            const s1 = document.createElement("span")
            s1.setAttribute("class", "bg-warning")
            p1.appendChild(s1)
            // <img src="./airplane-fill.svg"
            //             style="filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(95deg) brightness(107%) contrast(101%);">
            const i2 = document.createElement("img")
            i2.setAttribute("src", "./award-fill.svg")
            i2.setAttribute("style", "filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(95deg) brightness(107%) contrast(101%);")
            s1.appendChild(i2)
            const s2 = document.createElement("span")
            s2.textContent = "現在是出遊的好時機!!"
            p1.appendChild(s2)
            const d4 = document.createElement("div")
            d4.setAttribute("class", "d-flex justify-content-between align-items-end")
            d2.appendChild(d4)
            const p2 = document.createElement("p")
            p2.setAttribute("class", "card-text")
            p2.setAttribute("style", "margin-bottom: 5px;")
            d4.appendChild(p2)
            const s3 = document.createElement("span")
            const i3 = document.createElement("img")
            i3.setAttribute("src", "./airplane-fill.svg")
            s3.appendChild(i3)
            p2.appendChild(s3)
            const s4 = document.createElement("span")
            s4.textContent = "台北出發"
            p2.appendChild(s4)
            const p3 = document.createElement("p")
            p3.setAttribute("class", "card-text")
            p3.setAttribute("id", "cardPrice")
            d4.appendChild(p3)
            const s5 = document.createElement("span")
            s5.textContent = `${price[y][i]}NT$`
            p3.appendChild(s5)
            const a = document.createElement("a")
            a.setAttribute("href", "#")
            a.setAttribute("class", "stretched-link")
            d2.appendChild(a)
        }
    })
})
// #############################################################################
// 創造卡片2
const obj1 = [
    ["台北故宮", "台東熱氣球", "墾丁白沙灣", "南投大吊橋", "宜蘭礁溪溫泉", "玉山排雲山莊"],
    ["台北故宮", "台東熱氣球", "墾丁白沙灣", "南投大吊橋", "宜蘭礁溪溫泉", "玉山排雲山莊"],
    ["台北九份老街一日遊", "台北都市一日遊", "施工中", "施工中", "施工中", "施工中"],
    ["施工中", "施工中", "施工中", "施工中", "施工中", "施工中"]]
const price1 = [
    ["6899", "6899", "6899", "6899", "6899", "6899",],
    ["6899", "6899", "6899", "6899", "6899", "6899",],
    ["4899", "4899", "施工中", "施工中", "施工中", "施工中"],
    ["施工中", "施工中", "施工中", "施工中", "施工中", "施工中"]]
const copy1 = document.querySelectorAll(".copy1")
const B = document.querySelectorAll(".b0")
copy1.forEach((x, y) => {
    x.addEventListener("click", () => {
        // 點擊時清空分頁
        B[y].innerHTML = "";
        for (let i = 0; i < obj1[y].length; i++) {
            // <div class="col d-flex justify-content-center p-3 cardStyle">
            const d1 = document.createElement("div")
            d1.setAttribute("class", "col d-flex justify-content-center p-3 cardStyle")
            B[y].appendChild(d1)
            // <div class="card" style="width: 25rem;">
            const d2 = document.createElement("div")
            d2.setAttribute("class", "card")
            d2.setAttribute("style", "width: 25rem;")
            d1.appendChild(d2)
            // <img src="./ship/oversea-01-item01.png" class="card-img-top">
            const i1 = document.createElement("img")
            i1.setAttribute("class", "card-img-top")
            i1.setAttribute("src", `./tabimg1/${y}/${i}.jpg`)
            d2.appendChild(i1)
            // <div class="p-0 pt-3 d-flex flex-column justify-content-center">
            const d3 = document.createElement("div")
            d3.setAttribute("class", "p-0 pt-3 d-flex flex-column justify-content-center")
            d2.appendChild(d3)
            // <h5 class="card-title" style="font-weight: bold;">莎倫娜號 基隆港出發</h5>
            const h = document.createElement("h5")
            h.setAttribute("class", "card-title")
            h.setAttribute("style", "font-weight: bold;")
            h.textContent = `${obj1[y][i]}`
            d3.appendChild(h)
            // <p class="card-text" id="cardText">
            const p1 = document.createElement("p")
            p1.setAttribute("class", "card-text")
            p1.setAttribute("id", "cardText")
            d3.appendChild(p1)
            // <span class="bg-warning">
            const s1 = document.createElement("span")
            s1.setAttribute("class", "bg-warning")
            p1.appendChild(s1)
            // <img src="./airplane-fill.svg"
            //             style="filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(95deg) brightness(107%) contrast(101%);">
            const i2 = document.createElement("img")
            i2.setAttribute("src", "./award-fill.svg")
            i2.setAttribute("style", "filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(95deg) brightness(107%) contrast(101%);")
            s1.appendChild(i2)
            const s2 = document.createElement("span")
            s2.textContent = "現在是出遊的好時機!!"
            p1.appendChild(s2)
            const d4 = document.createElement("div")
            d4.setAttribute("class", "d-flex justify-content-between align-items-end")
            d2.appendChild(d4)
            const p2 = document.createElement("p")
            p2.setAttribute("class", "card-text")
            p2.setAttribute("style", "margin-bottom: 5px;")
            d4.appendChild(p2)
            const s3 = document.createElement("span")
            const i3 = document.createElement("img")
            i3.setAttribute("src", "./airplane-fill.svg")
            s3.appendChild(i3)
            p2.appendChild(s3)
            const s4 = document.createElement("span")
            s4.textContent = "台北車站"
            p2.appendChild(s4)
            const p3 = document.createElement("p")
            p3.setAttribute("class", "card-text")
            p3.setAttribute("id", "cardPrice")
            d4.appendChild(p3)
            const s5 = document.createElement("span")
            s5.textContent = `${price1[y][i]}NT$`
            p3.appendChild(s5)
            const a = document.createElement("a")
            a.setAttribute("href", "#")
            a.setAttribute("class", "stretched-link")
            d2.appendChild(a)
        }
    })
})


// ##############################################################
// 註冊帳號
// const signUp = document.querySelector(".signInBtn");
// signUp.addEventListener("click", signUpcheck, false)
// const account = {}; //輸入的資料，填入空物件
// const user = [];
// function signUpcheck() {
//     const emailStr = document.querySelector(".email").value;
//     const passwordStr = document.querySelector(".password").value;
//     const name = document.querySelector(".name").value;
//     const tel = document.querySelector(".tel").value;
//     user.unshift(name)
//     account.key(user[0]) = user;
//     // account[name].email = emailStr; //填入的 email
//     // account[name].password = passwordStr; //填入的密碼
//     // account[name].tel = tel;
//     console.log(user[0]);
//     console.log(account);
// };
// 帳號登入
const EM = "123@123"
const PW = "123"
const IN = document.querySelector('#modalBtn0')
const OUT = document.querySelector('#modalBtn1')
const signIn = document.querySelector(".signInBtn");
signIn.addEventListener("click", signIncheck, false);
function signIncheck() {
    const emailStr = document.querySelector(".email").value
    const passwordStr = document.querySelector(".password").value
    if (emailStr == EM && passwordStr == PW) {
        IN.classList.add("hidden")
        OUT.classList.remove("hidden")
        alert("成功登入")
        location.href = './index.html'
    } else {
        alert("帳號或密碼錯誤");
    }
    console.log(typeof emailStr)
    console.log(typeof passwordStr)
}
function logOut() {
    alert("成功登出")
    location.href = "./index0.html"
}