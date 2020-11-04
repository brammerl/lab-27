export const getUserInfo = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(({name, followers, following, html_url}) => { 
      return {
      name,
      followers,
      following,
      html_url
    };
  })
}