// fetch image from nasa
const $image = document.getElementById('image')

fetch ('https://api.nasa.gov/planetary/apod?api_key=ktNtWmAoajNE4xIIFXZ6fNMXYxFLsbqEVpLNm70x')
    .then (response => {
        return response.json()
    })
    .then (data => {
        console.log(data.url)
        $image.src =data.url
    })


 //clock section 
 

 function clock(){

 const $hours = document.getElementById('hour')
 const $minute = document.getElementById('min')
 const $seconds= document.getElementById('seconds')

 //get the clock
    const h = new Date().getHours()% 12 || 12;
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
//pad hours, minutes, seconds with zeros.
    // hours = ('0' + hours).slice(-2);


// display the clock
    $hours.innerHTML = h;
    $minute.innerHTML = m;
    $seconds.innerHTML = s;

 }
//start the clock interval
 const interval = setInterval(clock, 1000);


 //btn light and dark 

const $darkMode = document.getElementById('dark')
const $lightMode = document.getElementById('light')
const $body = document.querySelector('body')

if(localStorage.getItem('theme')=== 'dark' ){
    $body.style.backgroundColor = '#262626'
    } else if (localStorage.getItem('theme') === 'light'){
        $body.style.backgroundColor= '#dedede'
    }


$darkMode.addEventListener('click', function(){
    $body.style.backgroundColor = '#262626'
    localStorage.setItem('theme', 'dark')
})

$lightMode.addEventListener('click', function(){
    $body.style.backgroundColor = '#dedede'
    localStorage.setItem('theme', 'light')
})