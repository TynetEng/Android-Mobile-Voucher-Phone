let displayPhone = document.getElementById('grand');
let displayHome = document.getElementById('home');
let displayCallLog = document.getElementById('callLog');
let dialOne = document.getElementById('dial-one');
let dialTwo = document.getElementById('dial-two');
let displayNumber = document.getElementById('called-number');
let showMessage = document.getElementById('message');
let panel = document.getElementById('panel');
let inputMsg = document.getElementById('text');
let msgScreen = document.getElementById('msg-screen');
let newVoucherArr = [];
let table = document.getElementById('table');
voucher = [{name: 'MTN', value : ['100','200','500','1000'], pin:''},
    {name: 'GLO', value : ['100','200','500','1000'], pin:''},
    {name: '9Mobile', value :['100','200','500','1000'], pin:''},
    {name: 'Airtel', value : ['100','200','500','1000'], pin:''}
];

let display = document.getElementById('network');
let display2 = document.getElementById('amount');
let pn = document.getElementById('pin');
let screen = document.getElementById('screen');
let seenPin = false;
        
let on=(params)=>{
    if(params == 'on'){
        displayHome.hidden = false;
        displayHome.hidden = '';
    }
}
let off=()=>{
    displayHome.hidden = true;
}
let callLogDisplay=(params)=>{
    if(params == 'call'){
        displayCallLog.hidden = false;
        
    }
}

let dailNumber=(params)=>{
    if(params == 'number'){
        displayPhone.hidden = false;
    }
}
let backCallLog=(params)=>{
    if(params == 'call'){
        displayPhone.hidden = true
    }
}
let backCall=(params)=>{
    if(params == 'call'){
        displayCallLog.hidden = true;
    }
}

let number=(digits)=>{
    document.getElementById('panel').innerHTML += `${digits}`
}

// let inputOne=(params)=>{
//     if(params == 'one'){
//         displayNumber.innerText = panel.value;
//     }
// }

let endCallOne=(params)=>{
    if(params == 'one'){
        dialOne.hidden = true;
    }
}
let endCallTwo=(params)=>{
    if(params == 'two'){
        dialTwo.hidden = true;
    }
}
// let a = new Date
// document.getElementById('time').innerText = `${a.getHours()} : ${a.getMinutes()}`;

// let home = document.getElementById('home')
// function on(){
//     home.
// }
let displayMessage=()=>{
    showMessage.hidden = false;
    showMessage.hidden = '';
}
let send=()=>{
    msgScreen.innerHTML += `<div class='view-msg'><p>${inputMsg.value}</p></div>`
    inputMsg.value = '';
}


if(localStorage.getItem('voucher')){
    let p = localStorage.getItem('voucher')
    newVoucherArr = JSON.parse(p);
}

    
function voucherDetails(){
    for(i=0; i<voucher.length; i++){

        display.innerHTML += `<option>${voucher[i].name}</option>`;
        console.log(voucher[i].name);
    }
}
let tableDisplay=()=>{
    table.innerHTML = `<th>S/N</th><th>NETWORK</th><th>AMOUNT</th><th>PIN NUMBER</th><th>STATUS</th>`;
    for(let d=0; d<newVoucherArr.length; d++){
        table.innerHTML += `<td>${d+1}</td><td>${newVoucherArr[d].name}</td><td>${newVoucherArr[d].value}</td><td>${newVoucherArr[d].pin}</td><td>${newVoucherArr[d].status}</td>`
    }
}

function voucherValue(){
    for(let i=0; i<voucher.length; i++){
        let a = voucher[i].value;
        display2.innerHTML += `<option>${a[i]}</option>`;
        console.log(a[i]);
    }
}

function add(){
    let n = document.getElementById('network').value;
    let o = document.getElementById('amount').value;
    let p = document.getElementById('pin').value;

    let newVoucher = {name: n, value : o, pin:p, status:'false'};
    newVoucherArr.push(newVoucher);
    console.log(newVoucher);

    localStorage.setItem('voucher', JSON.stringify(newVoucherArr));
    let m = localStorage.getItem('voucher');
    console.log(JSON.parse(m));
    tableDisplay();
}

function gen(params){
    for(b=0; b<voucher.length; b++){
        let a = Math.floor(Math.random()*10000000000000000)
        pn.value = a;
        console.log(a);

    }
}


function load(params){
    for(let i=0; i<newVoucherArr.length; i++){
        let b = newVoucherArr[i];
        if(document.getElementById('panel').value == b.pin){
            document.getElementById('card').hidden = false;
            document.getElementById('card').hidden = ''; 
            b.status = true;
            seenPin = true;
            console.log('Card loaded successfully');
            for(let a=0; a < newVoucherArr.length; a++){
                document.getElementById('card').innerText = `Your account recharge of #${newVoucherArr[a].value}.00 
                was successfully.`
            }
            localStorage.setItem('newVoucherArr', JSON.stringify(newVoucherArr))
            seenPin = false
            break
        }
        if(i==newVoucherArr.length-1 && seenPin==false){
            console.log(('invalid Pin'));
            for(let a=0; a < newVoucherArr.length; a++){
                document.getElementById('card').innerText = `Sorry recharge of #${newVoucherArr[a].value} 
                was not successfully loaded.`
            }
        }

        
    }
    if(params == 'one'){
        dialOne.hidden = false;
        displayNumber.innerHTML = `${panel.value}`;
        console.log(panel.value);
        dialOne.hidden = '';
    }
    if(params == "two"){
        dialTwo.hidden = false;
        displayNumber.innerHTML = `${panel.value}`;
        dialTwo.hidden = ''
    }
}

voucherDetails();
voucherValue();
tableDisplay();
