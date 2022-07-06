const Url = require("../models/Url");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
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
module.exports.addUrl = async (req, res) => {
  token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(504).send(err.message);
      } else {
        const id = decodedToken.id;
        let user = await User.findOne({ id });
        let full = req.body.full;
        await Url.create({ full, short: shortify(), user_id: id });
        res.redirect(process.env.CLIENT_HOMEPAGE);
      }
    });
  }
};

module.exports.getUrls = async (req, res) => {
  token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.send("error occured");
      } else {
        const id = decodedToken.id;
        const urls = await Url.find({ user_id: id });
        res.send(urls);
      }
    });
  } else {
    res.send([]);
  }
};

module.exports.removeUrl = async (req, res) => {
  let id = req.params.id;
  await Url.deleteOne({ _id: id });
  res.redirect(process.env.CLIENT_HOMEPAGE);
};

module.exports.onClickUrl = async (req, res) => {
  let link = req.params.url;
  const url = await Url.findOne({ short: link });
  if (!url) {
    res.redirect(process.env.CLIENT_HOMEPAGE + "/notfound");
    return;
  }
  url.clicks++;
  await url.save();
  res.redirect(url.full);
};
