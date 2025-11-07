import multer from 'multer';

const multerUpload = multer({
    limits:{
        fileSize : 1024 * 1024 * 5
    }
});

const attachmentsMulter = multerUpload.array("productImages",5);

export default attachmentsMulter;