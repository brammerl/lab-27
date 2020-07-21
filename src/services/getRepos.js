export const getRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(repoArray => repoArray)
    
}