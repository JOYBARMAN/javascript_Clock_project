let day;
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

date_time = () => {
    day = new Date();
    time = day.getHours() + ' : ' + day.getMinutes() + ' : ' + day.getSeconds();
    date = day.toLocaleDateString(undefined,options);

    document.getElementById('time').innerHTML = time + '<br>on ' + date;
}

setInterval(date_time, 100);