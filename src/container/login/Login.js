import React from 'react';
import {login} from '../../service/loginService';
import {md5} from '../../utils/md5';
import {CODE_SUCCESS, prefix} from '../../utils';
import Header from '../../components/header/Header';
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const username = this.userName.value;
    const password = md5(this.password.value);
    console.log('登录', username + '---' + password);
    const loginResult = login({username, password});
    loginResult.then(res => {
      console.log(res);
      if (res.code === CODE_SUCCESS) {
        const {accessToken, userId} = res.result;
        sessionStorage.setItem(`${prefix}accessToken`, accessToken);
        sessionStorage.setItem(`${prefix}userId`, userId);
        this.props.history.push('/');
      }
    }).catch(err => {

    })
  }

  render() {
    return (
      <div id="login_container">
        <Header title="登录"/>
        <div className="login_from">
          <div>
            用户名：
            <input
                type="text"
                placeholder="输入用户名"
                ref={(node) => this.userName = node} />
          </div>
          <div>
            密码：
            <input
                type="password"
                placeholder="请输入密码"
                ref={(node) => this.password = node} />
          </div>
          <button onClick={this.onLogin}>登录</button>
        </div>
      </div>
    )
  }
}

export default Login;

