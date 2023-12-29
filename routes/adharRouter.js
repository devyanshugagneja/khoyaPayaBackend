const express = require('express')
const app = express()
const path = require('path');
const adharRouter = express.Router();
const multer = require('multer');
const{createAdhar,getAllAdhars,getAdhar,updateAdhar,deleteAdhar}=require("../controller/adharController")
app.use("/adhar", adharRouter)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination folder based on the file type
        if (file.fieldname === 'image') {
            cb(null, 'images/');
        } else if (file.fieldname === 'fingerPrint') {
            cb(null, 'fingerprints/');
        } else {
            cb(new Error('Invalid fieldname'));
        }
    },
    filename: function (req, file, cb) {
        // Create a unique filename for each uploaded file
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

adharRouter.route('/addAdhar')
    .post(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fingerPrint', maxCount: 1 }]), createAdhar);

adharRouter.route('/allAdhars')
    .get(getAllAdhars)

adharRouter.route('/crud/:id')
    .get(getAdhar)
    .patch(updateAdhar)
    .delete(deleteAdhar)


module.exports = adharRouter;