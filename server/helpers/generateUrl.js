const shortify = () => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let string_length = 12;
  let randomstring = "";
  for (let i = 0; i < string_length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

module.exports = shortify;
