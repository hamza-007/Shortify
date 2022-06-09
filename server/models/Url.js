const mongoose = require('mongoose');

const shortify = ()=>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let string_length = 6;
    let randomstring = 'shortify.';
    for (let i=0; i<string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: [true, 'Please enter an link !!'],
  },
  short: {
    type: String,

  },
  clicks : {
      type : Number,
      default : 0
  },
  user_id :{
    type : String,
    
  }
});


urlSchema.pre('save', async function(next) {
 this.short = shortify();
  next();
});

const Url = mongoose.model('url', urlSchema);

module.exports = Url;