import axios from 'axios'
import * as actionType from './constants';

export const addUserInputSuccess = result => ({
  type: actionType.ADD_USER_INPUT_SUCCESS,
  payload: result,
})

export const addUserInputStart = result => ({
  type: actionType.ADD_USER_INPUT_START
})

export const addUserInput = (userInput) => {

  const input = { input: userInput }
  return (dispatch) => {
    dispatch(addUserInputStart())
    axios.post('http://hoax-fighter-backend-dev.ap-southeast-1.elasticbeanstalk.com/api/check', input)
      .then(res => {
        dispatch(addUserInputSuccess(res.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}