const Mybody =document.querySelector('body')
const hourHand =document.querySelector('.hour')
const secondHand =document.querySelector('.second')
const minutsHand =document.querySelector('.minuts')
const modeSwitch =document.querySelector('.mode-switch')


if(localStorage.getItem('mode')== "Dark Mode"){
    Mybody?.classList.add('dark')
    modeSwitch.textContent='Light Mode'
}

modeSwitch?.addEventListener('click',function(){
    Mybody?.classList.toggle('dark')

    const isDarkMode= Mybody?.classList.contains('dark')

    modeSwitch.textContent= isDarkMode? 'Light Mode' :'Dark Mode'
    localStorage.setItem('mode',isDarkMode? 'Light Mode' :'Dark Mode')
})

const updatetime=()=>{
    // Get current time and calculate degree for clock hands 
    const timezone = document.getElementById("timezone").value;
    const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });
    let date = new Date(currentTime),
    secToDeg=(date.getSeconds() /60 )*360,
    minToDeg=(date.getMinutes() /60 )*360,
    hrToDeg=(date.getHours() /60 )*360




    // rotate the clock hand to the appropriate degree on the current time 
    secondHand.style.transform =`rotate(${secToDeg}deg)`
    minutsHand.style.transform =`rotate(${minToDeg}deg)`

    hourHand.style.transform =`rotate(${hrToDeg}deg)`

}


setInterval(updatetime ,1000)

updatetime()



// console.log('Egypt',getCountryTime('Egypt'));
// function getCountryTime(countryName) {
//     // Get the current date and time in the specified country
//     const now = new Date().toLocaleString('en-US', {timeZone: countryName});

//     return now;
// }

// Example usage

function updateTime() {
    const timezone = document.getElementById("timezone").value;
    const country = document.getElementById('country');
    country.textContent = timezone;
    const currentTime = new Date().toLocaleTimeString('en-US', {timeZone: timezone});
    document.getElementById("current-time").textContent =  currentTime;
}

// Initial time update
updateTime();