// Init github
const github = new gitHub;

// init ui
const UI = new ui;

//search input
const searchUser = document.querySelector('#searchUser');

// search input eventListener
searchUser.addEventListener('keyup', (e) =>{
    // get input text
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // show alert
                }else{
                    // show profile
                    UI.showProfile(data.profile);
                }
            })
    }else{
        // clear profile
        UI.clearProfile();
    }
})