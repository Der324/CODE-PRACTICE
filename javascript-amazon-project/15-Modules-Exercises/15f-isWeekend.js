//15f-isWeekend.js export default

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';

}

export default isWeekend;

 
  