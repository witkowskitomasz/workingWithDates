
const weekNum = document.getElementById('week_num');


const monday = document.getElementById('mon');
const tuesday = document.getElementById('tues');
const wedensday = document.getElementById('wed');
const thursday = document.getElementById('thurs');
const friday = document.getElementById('fri');
const saturday = document.getElementById('sat');
const sunday = document.getElementById('sun');



dayjs.extend(window.dayjs_plugin_isoWeek);
dayjs.extend(window.dayjs_plugin_weekday);



const WeekCalendar = {
    todayFullDate: dayjs().format("D MM YYYY"),
    todayDay: dayjs().format("D"),
    todayMonth: dayjs().format("MM"),
    
    weekDayNumber: dayjs().isoWeekday(),
    weekNumber: dayjs().isoWeek(),



    setWeek() {
        weekNum.textContent = this.weekNumber;
    },

    setDays() {
        monday.textContent = dayjs().weekday(1).$D;
        tuesday.textContent = dayjs().weekday(2).$D;
        wedensday.textContent = dayjs().weekday(3).$D;
        thursday.textContent = dayjs().weekday(4).$D;
        friday.textContent = dayjs().weekday(5).$D;
        saturday.textContent = dayjs().weekday(6).$D;
        sunday.textContent = dayjs().weekday(7).$D;
    }
}

WeekCalendar.setWeek();
WeekCalendar.setDays();




