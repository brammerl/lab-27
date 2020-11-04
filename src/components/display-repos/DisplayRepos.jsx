import React from 'react';

const DisplayRepos = ({userRepos}) => {
  return (
  <>
    <h2>Repositories</h2>
    <ul>
      {
        userRepos.map(repository => {
          return (
            <li>
              <a href={repository.svn_url}>{repository.name}</a>
            </li>
          )
        })
      }
    </ul>
  </>
)
};


export default DisplayRepos;