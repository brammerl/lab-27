import React from 'react';

const DisplayRepos = ({userRepos}) => {
  userRepos.forEach(repository => {return (
    <>
      <h2>Repositories</h2>
      <ul>
        <li><a href={repository.html_url}>{repository.name}</a></li>
      </ul>
    </>
  )
})
};


export default DisplayRepos;