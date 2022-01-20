displayTime = () => {
    const time = new Date();
    const hrs = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const dayTime = document.querySelector('.day-time')
    if(hrs >= 12) {
        dayTime.innerHTML = 'PM';
    } else {
        dayTime.innerHTML = 'AM';
    }
    document.querySelector('.hours').innerHTML = hrs;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);