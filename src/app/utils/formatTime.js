import { format, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------
import moment from 'moment';
import 'moment/locale/th';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}
export function fDateTimeSuffix1(date) {
  console.log('dateFormat', format(new Date(date), 'dd/MM/yyyy p'));

  return format(new Date(date), 'dd/MM/yyyy p');
}

export function fDateApi(date) {
  return format(new Date(date), 'yyyy-MM-dd');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}

export function getThaidate(date) {
  const m = moment(date, 'DDMMMMYYYY, HH:mm:ss', 'en');
  return m.locale('th').format('DD MMM, YYYY'); // Mar 31, 2017, 16:56:51
}
