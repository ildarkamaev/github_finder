class ui{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML=
            `<div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog/Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`;
    }
    // show alert message
    showAlert(message, className){
        // clear remaining alerts
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add classname
        div.className= className;
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // timeout after 3 seconds
        setTimeout(()=>{
            this.clearAlert();
        }, 3000);
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    // clear profile
    clearProfile(){
        this.profile.innerHTML= '';
    };
}