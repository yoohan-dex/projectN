import React from 'react';
import {observer} from 'mobx-react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import CSSModules from 'react-css-modules';
import autobind from 'autobind-decorator';
import {Link, Match} from 'react-router';
import s from './styles.styl';

const query = gql`
  mutation Mutation($email: String!, $password: String!) {
    registerUser(email: $email, password: $password)
  }`;
@graphql(query)
@observer(['form', 'globalState'])
@CSSModules(s)
export default class LoginForm extends React.Component {
  @autobind
  handleSubmit(e) {
    const {form, mutate, globalState} = this.props;
    e.preventDefault();
    if (!form.$('email').error && !form.$('password').error) {
      mutate({
        variables: form.values(),
      }).then(({data}) => {
        console.log('got token', JSON.parse(data.registerUser));
        const {token, username} = JSON.parse(data.registerUser);
        console.log(token);
        globalState.login(token, username);
      })
      .catch(err => console.log('got error', err));
    }
  }
  render() {
    const {pathname, isExact, form} = this.props;

    return (
      <div styleName="container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>注册</legend>
            <input
              type="email"
              name={form.$('email').name}
              value={form.$('email').value}
              placeholder={form.$('email').label}
              onChange={form.$('email').sync}
              />
            <p>{form.$('email').error}</p>
            <input
              type="password"
              name={form.$('password').name}
              value={form.$('password').value}
              placeholder={form.$('password').label}
              onChange={form.$('password').sync}
              />
            <p>{form.$('password').error}</p>
            <button>
              确定
            </button>
            <p>{form.error}</p>
          </fieldset>

        </form>
      </div>
    );
  }
}
