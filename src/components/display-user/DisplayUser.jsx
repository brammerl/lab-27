import React from 'react';

const DisplayUser = ({userInfo}) => {
  return (
  <>
    <h1>{userInfo.name}</h1>
    <ul>
      <li>Followers: {userInfo.followers}</li>
      <li>Following: {userInfo.following}</li>
      <li><a href={userInfo.html_url}>Site</a></li>
    </ul>
  </>
  )

}

export default DisplayUser;