import dayjs from "dayjs";

// name is a string
// dob is a string in the format yyyy-mm-dd or an object { month, day, year } all strings.
// country is a string of 'Canada' or 'USA'
// Response: { name, dateOfBirth (formatted by country), age (in years) }
export const createProfile = (name, dob, country) => {
  let dateOfBirth;
  let age;

  if (dob?.year && dob?.month && dob?.day) {
    const { year, month, day } = dob;
    if (country === 'Canada') {
      dateOfBirth = `${day}-${month}-${year}`;
    } else if (country === 'USA') {
      dateOfBirth = `${month}/${day}/${year}`;
    }
    age = dayjs().diff(new Date(year, month - 1, day), 'year');
  } else {
    const yyyymmdd = dob?.split('-');
    if (!!yyyymmdd?.length) {
      if (country === 'Canada') {
        dateOfBirth = `${yyyymmdd[2]}-${yyyymmdd[1]}-${yyyymmdd[0]}`;
      } else if (country === 'USA') {
        dateOfBirth = `${yyyymmdd[1]}/${yyyymmdd[2]}/${yyyymmdd[0]}`;
      }
      age = dayjs().diff(dayjs(dob), 'year');
    }
  }

  return {
    name,
    dateOfBirth,
    age
  }
};
