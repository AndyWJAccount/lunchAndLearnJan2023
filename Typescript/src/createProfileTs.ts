import dayjs from "dayjs";

interface DobObj {
  year: number;
  month: number;
  day: number;
}

type CountryType = 'Canada' | 'USA';
type N1 = 1|2|3|4|5|6|7|8|9
type N0 = 0|1|2|3|4|5|6|7|8|9
type YYYY = `19${N0}${N0}` | `20${N0}${N0}`
type MM = `0${N1}` | `1${0|1|2}`
type DD = `0${N1}` | `${1|2}${N0}` | `3${0|1}`
type DateStringType = `${YYYY}-${MM}-${DD}`;

const isDobObj = (dob: string | DobObj): dob is DobObj => {
  return (dob as DobObj).year !== undefined;
}

// name is a string
// dob is a string in the format yyyy-mm-dd or an object { month, day, year } all strings.
// country is a string of 'Canada' or 'USA'
export const createProfile = (name: string, dob: DateStringType  | DobObj, country: CountryType) => {
  let dateOfBirth;
  let age;

  if (isDobObj(dob)) {
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
