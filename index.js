let a=setInterval(timer,1000)

function timer()
{
    let current = new Date();

    let timer = new Date("December 25, 2021 00:00:00");

    let diff = timer - current;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    let d = days;
    let h = hours - days * 24;
    let m = mins - hours * 60;
    let s = secs - mins * 60;

    document.querySelector(".day").innerHTML = d;
    document.querySelector(".hr").innerHTML = h;
    document.querySelector(".min").innerHTML = m;
    document.querySelector(".sec").innerHTML = s;
}
