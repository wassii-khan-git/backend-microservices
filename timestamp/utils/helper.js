// export const isDateValid = (date) => {
//   // Convert the input to a Date object
//   const dateObj = date instanceof Date ? date : new Date(date);
//   const parsedTime = dateObj.getTime();
//   // Check if the date in the params is a valid date
//   if (isNaN(parsedTime)) {
//     return false;
//   }
//   return true;
// };

// convert to unix times stamps
export const ConvertToUnixTimeStamps = (date) => {
  if (!date) throw new Error("Date is required");

  if (!isDateValid(date)) {
    throw new Error("Date is invalid");
  }

  // convert to unix timeStamps
  const unixTimestamp = Math.floor(date / 1000);
  // return timestamps
  return unixTimestamp;
};

// is already in unix format
export const isAlreadyInUnixFormat = (date) => {
  if (!date) throw new Error("Date is required");
  return !isNaN(date) && typeof date === "number";
};

export const isValidDate = (date) => date instanceof Date && !isNaN(date);
