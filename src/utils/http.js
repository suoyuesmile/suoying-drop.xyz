import axios from 'axios'

export const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(
      res => {
        if (res.status === 200) {
          resolve(res)
        }
      },
      err => {
        reject(err.message)
      }
    )
  })
}
