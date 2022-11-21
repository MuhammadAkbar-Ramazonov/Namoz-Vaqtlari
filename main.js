const elList = document.querySelector(".times-list");
const elTemp = document.querySelector(".times-temp").content;

// btns
const elDayBtn = document.querySelector(".day-js");
const elWeekBtn = document.querySelector(".week-js");
const elMounthBtn = document.querySelector(".mounth-js");

function renderDay(arr, node){
  
  elList.innerHTML = "";
  const tempClone = elTemp.cloneNode(true);
  
  tempClone.querySelector(".today-data").textContent = arr.date;
  tempClone.querySelector(".tong-times").textContent = arr.times.tong_saharlik;
  tempClone.querySelector(".quyosh-times").textContent = arr.times.quyosh;
  tempClone.querySelector(".peshin-times").textContent = arr.times.peshin;
  tempClone.querySelector(".asr-times").textContent = arr.times.asr;
  tempClone.querySelector(".shom-times").textContent = arr.times.shom_iftor;
  tempClone.querySelector(".hufton-times").textContent = arr.times.hufton;
  
  node.appendChild(tempClone);
}

function renderTimes(arr, node){
  elList.innerHTML = "";
  arr.forEach(element => {
    const tempClone = elTemp.cloneNode(true);
    
    const data = element.date.split("/").join("").split("T");
    
    console.log(data);
    tempClone.querySelector(".today-data").textContent = data[0];
    tempClone.querySelector(".today-day").textContent = element.weekday;
    tempClone.querySelector(".tong-times").textContent = element.times.tong_saharlik;
    tempClone.querySelector(".quyosh-times").textContent = element.times.quyosh;
    tempClone.querySelector(".peshin-times").textContent = element.times.peshin;
    tempClone.querySelector(".asr-times").textContent = element.times.asr;
    tempClone.querySelector(".shom-times").textContent = element.times.shom_iftor;
    tempClone.querySelector(".hufton-times").textContent = element.times.hufton;
    
    node.appendChild(tempClone);
  });
}

async function getTimes(url, render){
  const res = await fetch(url);
  
  const data = await res.json();
  
  render(data, elList);
};

getTimes("https://islomapi.uz/api/present/day?region=Toshkent", renderDay);

elDayBtn.addEventListener("click", function(){
  getTimes("https://islomapi.uz/api/present/day?region=Toshkent", renderDay)
});

elWeekBtn.addEventListener("click", function(){
  getTimes("https://islomapi.uz/api/present/week?region=Toshkent", renderTimes);
});

elMounthBtn.addEventListener("click", function(){
  getTimes("https://islomapi.uz/api/monthly?region=Toshkent&month=4", renderTimes);
});