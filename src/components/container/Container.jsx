import React, { Component } from 'react'
import ShortForm from '../short-form/ShortForm';
import DisplayUser from '../display-user/DisplayUser';
import DisplayRepos from '../display-repos/DisplayRepos';
import { getUserInfo } from '../../services/getUserInfo';
import { getRepos } from '../../services/getRepos';


export default class Container extends Component {
  state = {
    userName: '',
    userInfo: null,
    userRepos: null
  };

  handleChange = ({target}) => {
    this.setState({userName: target.value})
  }

  handleSubmit = event => {
    event.preventDefault();

    const { userName } = this.state;
    console.log(userName);

    Promise.all([
      getUserInfo(userName),
      getRepos(userName)
    ])
      .then(([userInfo, userRepos]) => this.setState({ userInfo, userRepos }))
  }
  render() {
    const {userName, userInfo, userRepos} = this.state;
    return (
      <>
        <ShortForm userName={userName} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        {
          userInfo ? <DisplayUser userInfo={userInfo}/> : <></>
        }
        {/* {
          userRepos ? 
            <DisplayRepos userRepos={userRepos}/>: <></>
        } */}
        
      </>
    )
  }
}
