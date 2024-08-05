import React from 'react';

const convertDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const year = date.getFullYear(); // Subtract one year
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const DateTimeConverter = ({ dateTimeString }) => {
  const convertedDateTime = convertDateTime(dateTimeString);

  return (
    <>
      <>{convertedDateTime}</>
    </>
  );
};

export default DateTimeConverter;
