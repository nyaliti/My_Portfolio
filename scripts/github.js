// scripts/github.js
const repolist = document.querySelector('#projects .project-list');


fetch('https://api.github.com/users/nyaliti/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoItem = document.createElement('div');
            repoItem.classList.add('project');


            repoItem.innerHTML= `
            <h2>${repo.name}</h2>
            <p>${repo.description || 'No description available.'}</p>
            <a href="${repo.html_url}" target="_blank">GitHub Repo</a>
            `;

            repolist.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));