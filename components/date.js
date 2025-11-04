import { format, parseISO } from 'date-fns';

export default function Date({ dateString }) {
  let date;
  let displayFormat = 'LLLL d, yyyy';

  if (/^\d{4}-\d{2}$/.test(dateString)) {
    // year + month only
    date = parseISO(`${dateString}-01`);
    displayFormat = 'LLLL yyyy';
  } else {
    date = parseISO(dateString);
  }

  return <time dateTime={dateString}>{format(date, displayFormat)}</time>;
}
