export function formatDate(date = new Date(), format = 'YYYY-MM-DD') {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  let r = format
  r = r.replace('YYYY', date.getFullYear())
  r = r.replace('YY', (date.getFullYear() + '').slice(2))
  r = r.replace('MM', (date.getMonth() + 101 + '').slice(1))
  r = r.replace('M', (date.getMonth() + 1 + '').slice(0))
  r = r.replace('DD', (date.getDate() + 100 + '').slice(1))
  r = r.replace('D', (date.getDate() + '').slice(0))
  r = r.replace('hh', (date.getHours() + 100 + '').slice(1))
  r = r.replace('h', (date.getHours() + '').slice(0))
  r = r.replace('mm', (date.getMinutes() + 100 + '').slice(1))
  r = r.replace('m', (date.getMinutes() + '').slice(0))
  r = r.replace('ss', (date.getSeconds() + 100 + '').slice(1))
  r = r.replace('s', (date.getSeconds() + '').slice(0))

  return r
}
