import jsonp from 'jsonp'

export function jsonpFetch (url, options = null) {
  return new Promise((resolve, reject) => {
    jsonp(url, options, (error, data) => {
      return error ? reject(error) : resolve(data)
    })
  })
}

export function dateConvert (val) {
  const [, month, day] = val.split('-')
  return `${month}/${day}`
}

export function timeConvert (val) {
  const date = new Date(val)
  const [timesString, ampm] = date.toLocaleTimeString().split(' ')
  const [hours, , seconds] = timesString.split(':')

  return `${hours}:${seconds}${ampm.toLowerCase()}`
}
