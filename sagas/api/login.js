import axios from 'axios';
import { responseLoginApi } from '~/constants';

function requestLogin(body) {
  // const body = {
  //     username: "isera",
  //   password: "Leminhtai1129@"
  // }
  
  return axios.post(responseLoginApi, body);
}

export default requestLogin;