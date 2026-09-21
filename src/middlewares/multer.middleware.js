import multer from "multer"

const crypto = require('crypto')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/temp')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) //since we doing this for server,then well upload it to cloudinary asap,so doenst matter if multiple same name file comes,since itll be there in server only for very short time
    
  }
})

const upload = multer({ storage: storage }) 