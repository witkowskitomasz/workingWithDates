const monthAndYearDisplay = document.querySelector('.month-and-year');
const weekDisplay = document.querySelector('.week');

const monday = document.getElementById('mon');
const tuesday = document.getElementById('tue');
const wednesday = document.getElementById('wed');
const thursday = document.getElementById('thu');
const friday = document.getElementById('fri');
const saturday = document.getElementById('sat');
const sunday = document.getElementById('sun');



dayjs.extend(window.dayjs_plugin_isoWeek);
dayjs.extend(window.dayjs_plugin_weekday);



const main = () => {
    setCurrentWeek();
    setCurrentMonthAndYear();
    SetCurrentDays();
    setToday();
}


const setCurrentWeek = () => {
    weekDisplay.textContent = `Week: ${dayjs().isoWeek()}`  
}

const setCurrentMonthAndYear = () => {
    monthAndYearDisplay.textContent = dayjs().format('MMMM YYYY');
}

const SetCurrentDays = () => {
    firstDayOfTheWeek = dayjs().startOf('isoWeek').$D;
    
    monday.textContent = firstDayOfTheWeek;
    tuesday.textContent = firstDayOfTheWeek + 1;
    wednesday.textContent = firstDayOfTheWeek + 2;
    thursday.textContent = firstDayOfTheWeek + 3;
    friday.textContent = firstDayOfTheWeek + 4;
    saturday.textContent = firstDayOfTheWeek + 5;
    sunday.textContent = firstDayOfTheWeek + 6;
}

const setToday = () => {
    const today = dayjs().format("D"); 
    
    const days = [
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    ]

    days.forEach(element => {
        let day = element;
        if (day.textContent == today) {
            day.classlist.add("today");
        }

    });
}









document.addEventListener('DOMContentLoaded', main);






