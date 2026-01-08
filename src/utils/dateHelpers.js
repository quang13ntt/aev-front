export const generateDates = () => {
  const dates = [];
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 12; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    dates.push({
      value: date.toISOString().split('T')[0],
      day: days[date.getDay()],
      number: date.getDate(),
      month: months[date.getMonth()]
    });
  }

  return dates;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return {
    day: days[date.getDay()],
    number: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear()
  };
};
