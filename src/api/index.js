import * as fakeApi from './fake'

// import * as real_api from './api';

let selectedApi
if (process.env.NODE_ENV === 'development') {
  selectedApi = fakeApi
} else {
  console.error('Real API not implemented yet')
}
export default selectedApi
