import request from './api'

const search = (name:string, surname:string) => {
  return request({
    url: `?firstName=${name}&lastName=${surname}`,
    method: 'GET'
  });
}

const searchRandom = () => {
  return request({
    url: ``,
    method: 'GET'
  });
}

const Service = {
  search,
  searchRandom
}

export default Service;