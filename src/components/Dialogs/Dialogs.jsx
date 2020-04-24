import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validatiors/validators';

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength100]}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />
      </div>
      <div><button>Send message</button></div>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

const Dialog = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.dialogsPage.messagesData.map(message => <Message text={message.text} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>
          {messagesElements}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialog;