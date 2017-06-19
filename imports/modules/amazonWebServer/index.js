const config = {
  bucket: 'myfangate.com',
  folder: 'rdlisten',
};

const { bucket, folder } = config;

export default function aws(file) {
  return `https://s3.amazonaws.com/${bucket}/${folder}/${file}`;
}
