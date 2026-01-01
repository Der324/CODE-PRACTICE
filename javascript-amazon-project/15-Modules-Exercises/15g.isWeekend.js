
//15g-isWeekend.js export default
//Rename the function to isSatSun when importing

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';

}

export default isWeekend;