// sort alphabeticly
Array.prototype.sortAlphabetically = function () {
  return this.sort((a, b) => {
    const A = a.toUpperCase();
    const B = b.toUpperCase();
    return (A < B) ? -1 : ((A > B) ? 1 : 0);
  });
};
// move array index of item inside array
Array.prototype.makeFirst = function (oldIndex) {
  if (this.length <= 0) {
    let k = 0 - this.length;
    while ((k -= 1) + 1) { this.push(undefined); }
  }
  this.splice(0, 0, this.splice(oldIndex, 1)[0]);
  return this; // for testing purposes
};
// move array index of item inside array
Array.prototype.makeOriginFirst = function () {
  return this.makeFirst(this.indexOf('origin'));
};
// split the master descriptive string on each remote and make an array // lit-shelf-80257.herokuapp.com/
String.prototype.toHerokuAppName = function () { return this.match(/https:\/\/(.*).herokuapp.com\//)[1]; };
// split the master descriptive string on each remote and make an array
String.prototype.splitOnLineBreak = function () { return this.split(/\r?\n/); };
// split the master descriptive string on each tab
String.prototype.splitOnTab = function () { return this.split(/\t/); };
// get the base of the remote from descriptive string
String.prototype.sliceBeforeTab = function () { return this.splitOnTab()[0]; };
// get the base of the remote from descriptive string
Array.prototype.sliceEachBeforeTab = function () { return this.map(string => string.sliceBeforeTab()); };
// get the base of the remote from descriptive string
Array.prototype.mapHerokuAppName = function () {
  return this.filter(string => string.match(/https:\/\/git.heroku.com\/(.*).git/))
             .map(str => str.match(/https:\/\/git.heroku.com\/(.*).git/)[1]);
};
// remove empty strings from the array
Array.prototype.removeEachEmptyString = function () { return this.filter(string => string.trim() !== ''); };
// filter heroku remotes
Array.prototype.removeEachNonHerokuRemote = function () { return this.filter(string => string.includes('git.heroku.com')); };
// filter heroku remotes
Array.prototype.removeEachNonMatchingRemote = function (match) { return this.filter(string => string.includes(`https://git.heroku.com/${match}.git`)); };
// create a unique array from an existing array
Array.prototype.makeUnique = function () { return Array.from(new Set(this)); };
// get git remote array from terminal output
String.prototype.toGitRemoteArray = function () {
  return this.splitOnLineBreak()
             .sliceEachBeforeTab()
             .removeEachEmptyString()
             .makeUnique()
             .makeOriginFirst();
};
// get git remote array for heroku apps from terminal output
String.prototype.toHerokuRemoteArray = function () {
  return this.splitOnLineBreak()
             .removeEachNonHerokuRemote()
             .sliceEachBeforeTab()
             .removeEachEmptyString()
             .makeUnique();
};
// get git remote array for heroku apps from terminal output
String.prototype.getRemoteFromAppName = function (appName) {
  return this.splitOnLineBreak()
             .removeEachNonHerokuRemote()
             .removeEachEmptyString()
             .removeEachNonMatchingRemote(appName)
             .sliceEachBeforeTab()
             .makeUnique();
};
// get git remote array for heroku apps from terminal output
String.prototype.getAppNameArray = function () {
  return this.splitOnLineBreak()
             .removeEachNonHerokuRemote()
             .removeEachEmptyString()
             .mapHerokuAppName()
            //  .sliceEachBeforeTab()
             .makeUnique();
};
// get the base of the branch from descriptive string
String.prototype.toBranchBase = function () { return this.split(' ')[1].trim(); };
