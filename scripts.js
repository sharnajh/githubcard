let card = document.getElementById('card');

axios.get('https://api.github.com/users/sharnajh', 
{ headers: {"Authorization" : `Bearer 067d4ae754df79a02ae29b119f25b8f3989db835`} })
.then((response) => {
    let data = response.data;
    let avatar = data.avatar_url;
    let user = data.login;
    let url = data.html_url;
    let name = data.name;
    let location = data.location; 
    let following = data.following;
    let followers = data.followers;
    let repos = data.public_repos;
    console.log(data,avatar,user,url,name,location,following,followers,repos);

    card.insertAdjacentHTML('afterbegin', `
        
        <img src="${avatar}"> 
        <h1><a href="${url}">${user}</a></h1>
        <h2>${name}</h2>
        <h3>${location}</h3>
        <center><table>
        <tr>
        <th>Following</th>
        <th>Followers</th>
        <th>Repos</th>
        </tr>
        <tr>
        <td>${following}</td>
        <td>${followers}</td>
        <td>${repos}</td>
        </center></table>`);
});
