//accessing all the neccesary DOM element 
const checkBtn = document.getElementById("enter-btn");
const dob = document.getElementById("dob");
const main = document.getElementById("main");

let actYear = 0;
let actMonth = 0;
let actDay = 0;
let cond = true;
let monthDay;

const displayDob=(year,month,day)=>{
    main.innerHTML=`<p>You have lived ${year} years ${month} months and ${day} days</p>`;
}

checkBtn.addEventListener("click", () => {

    const getDate = new Date();
    const curYear = getDate.getFullYear();
    const curMonth = getDate.getMonth() + 1;
    const curDay = getDate.getDate();

    let dobArr = dob.value.split("-");
    for (let num in dobArr)
        dobArr[num] = Number(dobArr[num]);
    monthDay = curMonth - 1;
    actYear = curYear - dobArr[0] - 1;
    /**
     2005 11 29      2024 06 11
     2023 11 29      18 6 15    
    **/
    while (cond) {
        dobArr[1] += 1;
        actMonth++;
        if (dobArr[1] == 12)
            dobArr[1] = 1;
        if (dobArr[1] == curMonth)
            cond = false;
    }
    cond = true;
    while (cond) {
        
        if (monthDay = 2 && dobArr[2] == 28)
            dobArr[2] = 1;
        else if (monthDay % 2 == 0 && dobArr[2] == 30)
            dobArr[2] = 1;
        if (dobArr[2] == 31)
            dobArr[2] = 1;
        
        if (dobArr[2] == curDay)
            cond = false;
        dobArr[2] += 1;
        actDay++;
    }
    displayDob(actYear, actMonth, actDay + 1)
})