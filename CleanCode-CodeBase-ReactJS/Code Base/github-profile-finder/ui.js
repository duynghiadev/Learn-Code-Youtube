class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        let memberSince = user.created_at.substring(0,10);
        //console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <h4>${user.login}</h4>
                        <p>(${user.name})</p>
                        <img class="img-fluid mb-2 mx-auto" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12 mb-3 btn-group">
                                <span class="badge badge-primary float-right ml-2">Public Repos: ${user.public_repos}</span>
                                <span class="badge badge-secondary float-right ml-2">Public Gists: ${user.public_gists}</span>
                                <span class="badge badge-success float-right ml-2">Followers: ${user.followers}</span>
                                <span class="badge badge-info float-right ml-2">Following: ${user.following}</span>
                            </div>
                        </div>
                        <p>${user.bio}</p>
                        
                    <ul class="list-group btn-group">
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${memberSince}</li>
                    </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }
    // Show user repos
    showRepos(repos){
        console.log(repos);
        let output = '';
        repos.forEach(function(repo){
            output += ` 
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary float-right ml-2">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary float-right ml-2">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success float-right ml-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
        });
        // Output
        document.getElementById('repos').innerHTML = output;
    }
    showAlert(message, className){
        // Clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);
        // Hide alert after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        }, 3000);
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
} 