




dayjs.extend(window.dayjs_plugin_isoWeek);
dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_dayOfYear);





// Main function on window start
const main = () => {
    
}

// Makes array with days in current week in format - YYYY-MM-D !!GIVES ERROR!!
const getsCurrentWeekDays = () => {
    const week = [];
    const currentDayNum = startOfTheWeekDayInYear();

        for (let i = 0; i = 6; i++) {
            let day = currentDayNum + i ;
            let date = dayjs().day(day);
            console.log(day);
            console.log(date);
        }
    console.log(week);
    
}

// Start of week date in format - YYYY-MM-D
const startOfTheWeekDate = () => {
    const startDay = dayjs().startOf('isoWeek').$D;
    const startMonth = dayjs().startOf('isoWeek').$M + 1;
    const startYear = dayjs().startOf('isoWeek').$y;
    const result = `${startYear}-${startMonth}-${startDay}`;
    return result;
}

// Start of week day of year
const startOfTheWeekDayInYear = () => {
    const dayInYear = dayjs(startOfTheWeekDate()).dayOfYear();
    return dayInYear;
}









document.addEventListener('DOMContentLoaded', main);



