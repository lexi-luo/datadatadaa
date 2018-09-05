import request from 'superagent'

export function getEvents() {
    return request.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
  }