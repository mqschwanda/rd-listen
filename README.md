## Getting Started
* [Managing GitHub](#managing-github)
* [Node Scripts](#node-scripts)
* [Heroku Scripts](#heroku-scripts)

### Managing GitHub
GitHub: [App Repo](https://github.com/mqschwanda/HS)  
Git: [Docs](https://git-scm.com/doc), [Download](https://git-scm.com/downloads)
- ##### Cloning from GitHub
  ```shell
  # clone project from github
  git clone https://github.com/mqschwanda/RD-Listen)
  # navigate into the code directory where application lives
  cd rd-listen/
  # install NPM packages
  npm install
  ```
- #### Create New GitHub Repository
  ```shell
  # The git remote set-url command changes an existing remote repository URL.
  git remote set-url origin https://github.com/<USERNAME>/<REPOSITORY>.git
  # Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.
  git add .
  # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
  git commit -m "Upload App"
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  git push -u origin master
  ```
- ##### Git Status
  Docs: [git status](https://git-scm.com/docs/git-status)
  ```shell
  # check current working branch by returning a status report from git
  git status
  ```
- ##### Checkout Branch
  Docs: [git checkout](https://git-scm.com/docs/git-checkout)
  ```shell
  # change current working branch to an existing branch named `<BRANCH_NAME>`
  git checkout <BRANCH_NAME>
  ```
- ##### Checkout New Branch
  Docs: [git checkout](https://git-scm.com/docs/git-checkout)
  ```shell
  # change current working branch by creating a new branch named `<BRANCH_NAME>`
  git checkout -b <BRANCH_NAME>
  ```
- ##### Push Update to Branch
  Docs: [git add](https://git-scm.com/docs/git-add) | [git commit](https://git-scm.com/docs/git-commit) | [git push](https://git-scm.com/docs/git-push)
  ```shell
  # Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD <YOUR-FILE>'.
  git add .
  # Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.
  git commit -m "<COMMIT_MESSAGE>"
  # Pushes the changes in your local repository up to the `<BRANCH_NAME>` of the remote repository you specified as origin
  git push origin <BRANCH_NAME>
  ```
- ##### Pull Branch from Github
  Docs: [git pull](https://git-scm.com/docs/git-pull)
  ```shell
  # Pulls contents from a remote repository's `<BEANCH_NAME>` into your local repository
  git pull origin <BRANCH_NAME>
  ```

### Node Scripts
Node: [Docs](https://nodejs.org/en/docs/), [Download](https://nodejs.org/en/download/)  
NPM: [Docs](https://docs.npmjs.com/)
- ##### Start
  ```shell
    # Runs package.json start script
  npm start
  ```
- ##### Test
  ```shell
  # Runs `package.json` test script
  npm run test
  ```
- ##### Lint
  ```shell
  # Runs `package.json` lint script and returns ESlint report
  npm run lint
  ```
- ##### Install Node Module
  Docs: [npm install](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
  ```shell
  # Install and save a node module to the `package.json`
  # If the node package only for dev pass the `--save-dev` flag instead
  npm install <PACKAGE_NAME> --save
  ```
- ##### Updating Node Modules
  Docs: [npm update](https://docs.npmjs.com/getting-started/updating-local-packages)
  ```shell
  # Every so often, you should update the packages you depend on so you can get any changes that have been made to code upstream.
  npm update
  ```

### Heroku Scripts
- #### Create New Heroku App
Docs: [Deploying with Git](https://devcenter.heroku.com/articles/git), [Deploy to Heroku with Git](https://devcenter.heroku.com/articles/git),
```shell
# Create a Heroku app from the command line
heroku create
# Link to Heroku with a git remote.
heroku git:remote -a <APP_NAME> -r <REMOTE_NAME>
# Set this repository as the buildpack URL
heroku buildpacks:set -r <REMOTE_NAME> https://github.com/AdmitHub/meteor-buildpack-horse.git
# Set the ROOT_URL environment variable
heroku config:set -r <REMOTE_NAME> ROOT_URL="https://<APP_NAME>.herokuapp.com"
#
git push <REMOTE_NAME> master
```

The application is now hosted at `https://<APP_NAME>.herokuapp.com`
