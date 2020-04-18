import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer.js';
import Dialog from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(sendMessageCreator()); },
    updateNewMessageText: (text) => { dispatch(updateNewMessageTextCreator(text)); }
  }
}

const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default SuperDialogContainer;