dayjs.extend(window.dayjs_plugin_isoWeek);
dayjs.extend(window.dayjs_plugin_weekday);
dayjs.extend(window.dayjs_plugin_dayOfYear);


// Main function on window start

const main = () => {
    
}










// Makes array with days in current week in format - YYYY-MM-D

const getsCurrentWeekDays = () => {
    
    let week = [];
    const currentDayNum = startOfTheWeekDayInYear();
    
        for (let i = 0; i < 7; i++) {
            
            let day = currentDayNum + i;
            let date = dayjs().dayOfYear(day);
            let date2 = `${date.$y}-${date.$M + 1}-${date.$D}`;
            
            week.push(date2);
            
        }
    return week;
}

// Start of week day of year

const startOfTheWeekDayInYear = () => {
    const dayInYear = dayjs(startOfTheWeekDate()).dayOfYear();
    return dayInYear;
}

// Start of week date in format - YYYY-MM-D

const startOfTheWeekDate = () => {
    const startDay = dayjs().startOf('isoWeek').$D;
    const startMonth = dayjs().startOf('isoWeek').$M + 1;
    const startYear = dayjs().startOf('isoWeek').$y;
    const result = `${startYear}-${startMonth}-${startDay}`;
    return result;
}

// -----------------------------

document.addEventListener('DOMContentLoaded', main);



