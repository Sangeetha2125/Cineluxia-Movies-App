import axios from 'axios';

export default axios.create({
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.REACT_APP_AUTHORIZATION}`
  }
})