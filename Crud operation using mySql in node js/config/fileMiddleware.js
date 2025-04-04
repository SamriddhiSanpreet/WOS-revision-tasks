const multer = require('multer');
const imagePath = '/uploads';
const path = require('path');

const imageStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',imagePath))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now());
    }
})

module.exports.uploadImage = multer({storage:imageStorage}).single('image');