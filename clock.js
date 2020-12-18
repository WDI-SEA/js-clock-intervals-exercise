document.addEventListener('DOMContentLoaded',()=>{
    console.log('hello')
    // document.querySelector('#second').addEventListener('click',()=>{
    //     console.log('inside')
    // })
    
    let minute=document.getElementById('minute')
    let second=document.getElementById('second')
    let hour=document.getElementById('hour')
    var now=new Date()

    let numHours=now.getHours()
   let newDegHour=0
   let degHour=30
   let degMinute=6
   let degSecond=6

    if(numHours>12){

         newDegHour=30*(numHours-12)
    }else{
            newDegHour=degHour*numHours

    }

    let newDegMinute=degMinute*now.getMinutes()
    let newDeSecond=degSecond*now.getSeconds()

  
    const changeMinute=()=>{
        newDegMinute+=6
        console.log('minute'+newDegMinute)
        minute.style.transform='rotate('+newDegMinute+'deg)'

    }
    const changeSecond=()=>{
        newDeSecond+=6

        second.style.transform='rotate('+newDeSecond+'deg)'

        console.log('second:'+newDeSecond)

    }
    const changeHour=()=>{
        newDegHour+=30
        // let hour=document.getElementById('hour')
        hour.style.transform='rotate('+newDegHour+'deg)'
        console.log('hour:'+newDegHour)
    }
    firstPosition()
    setInterval(changeSecond,1000)
    setInterval(changeMinute,60000)
    setInterval(changeHour,3600000)
    function firstPosition(){
        second.style.transform='rotate('+newDeSecond+'deg)'
        hour.style.transform='rotate('+newDegHour+'deg)'
        minute.style.transform='rotate('+newDegMinute+'deg)'
        setTimeout(changeMinute,(60-now.getSeconds())*1000)
    }
})


