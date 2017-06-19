## Getting Started
* [Cloning from GitHub](#cloning-from-github)
* [Create New GitHub Repository](#create-new-github-repository)
* [Create New Heroku App](#create-new-heroku-app)

### Cloning from GitHub
Getting started with RD-Listen is quick and easy. From your terminal, use [Git](http://git-scm.com) to clone a copy of the repository [from GitHub](https://github.com/mqschwanda/RD-Listen).

```shell
# clone project from github
git clone https://github.com/mqschwanda/RD-Listen.git <project-name>
# install node packages
npm install
```

RD-Listen relies on a few packages via NPM that are not included in the source. To satisfy all dependencies, make sure to run `npm install` from the root of RD-Listen before attempting to start it up.

### Create New GitHub Repository
First [create your GitHub repo](https://github.com/) and run the terminal code below to link project to this new repository. (GitHub Help: [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/))

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

### Create New Heroku App
Heroku Help: [Deploying with Git](https://devcenter.heroku.com/articles/git), [Deploy to Heroku with Git](https://devcenter.heroku.com/articles/git),

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
