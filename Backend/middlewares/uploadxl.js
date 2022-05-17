const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage(),
    fileFilter:function (req, file, cb) {
        if (file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            req.fileValidationError = 'goes wrong on the mimetype';
            return cb(null, false, new Error('goes wrong on the mimetype'));
        }
        cb(null, true);
    }
});


module.exports = upload