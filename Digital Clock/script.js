function showTime (){
    var date = new Date();
    var houre =  date.getHours();
    var mint = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";
    if(houre == 0){
        houre=12;
    }
    if(houre > 12){
        houre = houre-12;
        session = "PM";
    }
    houre = (houre < 10) ? "0" + houre:houre;
    mint = (mint < 10) ? "0" + mint:mint;
    second = (second < 10) ? "0" + second : second;
    var time = houre + " :" + mint + ":" + second + ":" + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent= time;

    setTimeout(showTime, 1000)
}
showTime();