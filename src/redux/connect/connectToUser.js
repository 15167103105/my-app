
import { connect } from '../../model/redux';
//  简化写法
const userSelector = state => {
  return {
    user: state.user,
  }
};

const userDispatch = (dispatch) => {
  return {
    updateUser: (attrs) => dispatch({
      action: 'update',
      payload: attrs,
    })
  }
};

export const connectToUser = connect(userSelector, userDispatch);