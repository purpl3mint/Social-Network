import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validatiors/validators';
import style from '../common/FormsControls/FormsControls.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer.js';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "Remember me")}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);