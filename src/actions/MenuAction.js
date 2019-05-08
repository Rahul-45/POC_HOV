import {MENU_CHANGE} from './types';
export const menuChange = (activeItem) => dispatch => {
    dispatch({
      type : MENU_CHANGE,
      payload : activeItem
    })
}