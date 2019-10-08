import axios from 'axios';
import { responseSignupApi } from '~/constants';

function requestSignup(body) {
  console.log('body', body);
  // const body = {
  //   first_name: "ISER",
  //   last_name: "A",
  //   display_name: "ISER A",
  //   password: "Leminhtai123@",
  //   username: "isera1234",
  //   mobile_number: "+65896333"
  // }
  return axios.post(responseSignupApi,body);
}

export default requestSignup;