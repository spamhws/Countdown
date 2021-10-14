// Set the date we're counting down to
const countDownDate = new Date("Oct 14, 2021 15:35:00 GMT+02:00").getTime()

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime()

  // Find the distance between now and the count down date
  let distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML =
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "<span style='font-size:0.5em;  text-shadow: 4px 1px #000;'>" +
    "s" +
    "</span>"

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById("clock").innerHTML = "ANY MOMENT NOW!"
  }
}, 100)

var audio = new Audio("audio_file.mp3")

const capitalize = (s) => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

let btn = document.getElementById("btn")
let form = document.getElementById("fname")

const onClick = function () {
  let fname = document.getElementById("fname").value
  fname = fname.toLowerCase()
  let greet = document.getElementById("greet")
  let countdown = document.getElementsByClassName("countdown")[0]
  let login = document.getElementsByClassName("login")[0]
  let party = document.getElementById("party")
  let background = document.getElementsByClassName("background")[0]

  let classToggle = (message) => {
    greet.innerHTML += message
    setTimeout(() => {
      login.classList.toggle("hidden")
    }, 900)
    setTimeout(() => {
      audio.play()
    }, 10)
    countdown.classList.toggle("hidden")
    countdown.classList.toggle("cnt-reveal")
    party.classList.toggle("text-flicker-in-glow")
    background.classList.toggle("flicker")
    login.classList.add("flyaway")
  }
  greet.innerHTML = "Hello " + capitalize(fname) + "!"

  if (fname === "andrew" || fname === "andrii" || fname === "андрей") {
    classToggle(" You are supposed to arrive in Wrocław approximately in:")
  } else if (fname === "yehor") {
    classToggle(" Your friend arrives in Wrocław approximately in:")
  } else if (fname === "") {
  } else {
    let form = document.getElementById("fname")
    let err = document.getElementById("error")

    err.classList.add("reveal")
    form.classList.toggle("shake")
  }
}

btn.addEventListener(
  "click",
  function () {
    onClick()
  },
  false
)

form.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    btn.click()
  }
})
