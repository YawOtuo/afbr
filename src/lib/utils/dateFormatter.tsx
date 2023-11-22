export const formatDate = (input) => {
  const [month, year] = input.split('-');

  if (!month || !year) {
    return "Invalid Date";
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const numericMonth = parseInt(month, 10);

  if (numericMonth < 1 || numericMonth > 12) {
    return "Invalid Date";
  }

  const formattedDate = `${monthNames[numericMonth - 1]} ${year}`;
  return formattedDate;
};

