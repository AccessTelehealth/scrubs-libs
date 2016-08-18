/* @flow */

const convertDate = (inputDate: number, format?: 'partial'): string => {
  const date = new Date(inputDate)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let time = ''
  if (format !== 'partial') {
    const minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
    time = ` at ${date.getHours()}:${minutes}`
  }
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}${time}`
}


export default convertDate
