// npm init --y  // npm install --save-dev parcel-bundler  // npm audit fix
// to run the server do  -->  npm start
const { load } = require('./users');
const ProfileCard = require('./components/profile-card');

function init() {
    // Safe to query for DOM nodes now that window is loaded
    const main = document.querySelector('main');

    load()
     .then(users => {
        if(!(users && users.length)) {
            main.innerHTML = 'Unable to load user data at this time.';
            return;
        }

        users.forEach(user => {
            const id = user.id;
            const name = `${user.first_name} ${user.last_name}`;
            const email = user.email;
            const avatarUrl = user.avatar;

            const profileCard = new ProfileCard(id, name, email, avatarUrl);  // pay attention here between lower and upper profileCard.
            main.appendChild(profileCard.render());

        });

     });
}

window.onload = init;