import axios from 'axios';
import { POST_FILTER_DATA } from './types';


const postFilterData = (newPresetName, currentValueOfFilters) => (dispatch) => {
  axios.post('api/superURL', {
    newPresetName,
    currentValueOfFilters,
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export default postFilterData;
