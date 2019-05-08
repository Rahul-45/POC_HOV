import {FETCH_DATA} from './types';
export const fetchdata = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(api=>dispatch({
          type:FETCH_DATA,
          payload:api
      })
    )
}
