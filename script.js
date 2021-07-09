// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const mins = document.getElementById('minutes');
// const secs = document.getElementById('seconds');

function timer(){
    const currentDate = new Date();
    const offerTime = new Date("31 July 2021");
    const totalSec = (offerTime-currentDate)/1000;
    
    const remainingDays = Math.floor(totalSec/(3600*24)) > 0 ? Math.floor(totalSec/(3600*24)) : 0;
    const remainingHours = Math.floor((totalSec/3600)%24) > 0 ? Math.floor((totalSec/3600)%24) : 0;
    const remainingMinutes = Math.floor((totalSec/60)%60) > 0 ? Math.floor((totalSec/60)%60) : 0;
    const remainingSecs = Math.floor(totalSec%60) >= 0 ? Math.floor(totalSec%60) : 0;
    
    $('#days').html(remainingDays);
    $('#hours').html(remainingHours);
    $('#minutes').html(remainingMinutes);
    $('#seconds').html(remainingSecs);
}
timer();
setInterval(timer,1000);