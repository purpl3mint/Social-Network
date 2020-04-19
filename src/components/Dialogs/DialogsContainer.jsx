import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer.js';
import Dialog from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialog);

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(sendMessageCreator()); },
    updateNewMessageText: (text) => { dispatch(updateNewMessageTextCreator(text)); }
  }
}

const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default SuperDialogContainer;