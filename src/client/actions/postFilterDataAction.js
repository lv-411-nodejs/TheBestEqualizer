import axios from 'axios';
import { POST_FILTER_DATA } from './types';


const postFilterData = (newPresetName, currentValueOfFilters) => (dispatch) => {
  console.log({ newPresetName, currentValueOfFilters });
  // axios.post(`api/someURL/`, newUser)
  //   .then(() => {
  //     dispatch({
  //       type: POST_USER_DATA,
  //       status: 'Success authentification',
  //     });
  //   })
  //   .then(() => {
  //     history.push('/main');
  //   })
  //   .catch(({ response: { data: { error } } }) => {
  //     dispatch({
  //       type: POST_USER_DATA,
  //       status: 'Authentification was failed',
  //     });
  //     console.error(error);
  //   });
};

export default postFilterData;
