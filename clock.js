document.addEventListener('DOMContentLoaded', ()=> {
    console.log("dom!!!")

    let tiks = 0;
    let tik = 0;
    const secondTick = () => {
        tik++;
        tiks = (tik / 60) * 360;
        // var el = document.getElementById("myElement");
        // el.style.transform = "rotate(" + degrees + "deg)";
        document.querySelector("#second").style.transform = 'rotate('+tiks+'deg)';
        
    }

    setInterval(secondTick, 1000)

    let toks = 0;
    let tok = 0;
    const minuteToc = () => {
        toks++;
        tok = (toks / 60) * 360;
       document.querySelector("#minute").style.transform = 'rotate('+tok+'deg)';
    }

    setInterval(minuteToc, 60000)

    let slowMove = 0;
    let bell = 0;
    const hourMove = () => {
        bell++;
        slowMove = (bell / 60) * 360;
        document.querySelector("#hour").style.transform = 'rotate('+slowMove+'deg)';
    }

    setInterval(hourMove, 360000)
}) 

// let i = 10
// function count() {
//   console.log(i);
//   i--
// }

// let countdown = setInterval(count, 1000);
// function stop() {
// clearInterval(countdown)
// console.log("blastoff!")
// }
// setTimeout(stop,11000)

