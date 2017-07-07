import fs from 'fs-extra';

export default filePath => new Promise((resolve, error) => {
  if (fs.existsSync(filePath)) {
    return fs.remove(filePath, (err) => {
      if (err) return error(err);
      console.log(`${filePath} Was Removed`);
      return resolve();
    });
  }
  console.log(`${filePath} Does Not Exist`);
  return resolve();
});
