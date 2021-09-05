
console.log("Clock Using Javacript 🚀");
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let noon = document.getElementById('noon');


function clock(){
    let newDate = new Date();
    let  hr = newDate.getHours();
    let  mn = newDate.getMinutes();
    let  sc = newDate.getSeconds();
    
    hour.innerHTML = hr;
    min.innerHTML = mn;
    sec.innerHTML = sc;
    
    // Check for hours
    if(hr===0){
        hr = 12;
        hour.innerHTML = hr;
    };

    if(hr<12){
        hour.innerHTML = `0${hr}`;
        noon.innerHTML = "AM"
    };

    if(hr>12){
        hour.innerHTML = `0${hr-12}`;
        noon.innerHTML = "PM"
    };

    // Check for minutes

    if(mn<10){
        min.innerHTML = `0${mn}`
    };

    // Check for seconds

    if(sc<10){
        sec.innerHTML = `0${sc}`
    };

};

function mainFunction(){
    setInterval("clock()",1000);
};

mainFunction()