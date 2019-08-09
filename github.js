class gitHub{
    constructor(){
        this.client_id = '952c245a5102066c3950';
        this.client_secret = '478c681cb8daabfc5ae8303a73cbea81521b921c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile, 
            repos
        }
    }
}