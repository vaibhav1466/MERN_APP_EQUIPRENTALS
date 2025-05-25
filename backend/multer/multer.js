const multer = require("multer");

const idProofPicStorage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "./images/idProofs");
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }

});

const upload = multer({ storage: idProofPicStorage });

const productStorage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "./images/products");
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }

});

const productUpload = multer({ storage: productStorage });

module.exports = { upload, productUpload };