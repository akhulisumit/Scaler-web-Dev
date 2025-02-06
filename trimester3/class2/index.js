//http://api.weatherapi.com/v1/current.json?key=5a811bab5ab246f3a4951624250602&q=mumbai&aqi=no

const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')

const temperatureField = document.querySelector('.temp')
const conditionField = document.querySelector('.weather_condition span')
const iconField = document.querySelector('.weather_condition img')
const timeAndDateField = document.querySelector('.time_location span')
const locationField = document.querySelector('.time_location p') 


let target = 'Mumbai'
fetchData(target)

form.addEventListener('submit', searchFn)

function searchFn(e){
    e.preventDefault()
    target = searchField.value
    fetchData(target)
}

function updateField(city, timeAndDate, temp, condition, icon){
    locationField.textContent = city
    timeAndDateField.textContent = timeAndDate
    temperatureField.textContent = `${temp}°C`
    conditionField.textContent = condition
    iconField.src = `https:${icon}`
}
   

async function fetchData(target){
    let endPoint = `http://api.weatherapi.com/v1/current.json?key=5a811bab5ab246f3a4951624250602&q=${target}&aqi=no`
    const response = await fetch(endPoint)
    const data = await response.json()
    // console.log(data)

    let city = data.location.name
    let timeAndDate = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text
    let icon = data.current.condition.icon

    updateField(city, timeAndDate, temp, condition, icon)   
}
