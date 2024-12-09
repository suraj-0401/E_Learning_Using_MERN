import multer from 'multer';
import fs from 'fs'; 
import cloudinary from '../cloudinary/cloudinary.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const limits = { fileSize: 100 * 1024 * 1024 }; 

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['video/mp4'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only mp4 files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter
}).array('videos', 20); 

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: 'video', 
      public_id: Date.now() 
    });

    fs.unlinkSync(filePath);
    return result.secure_url; 
  } catch (error) {
    throw new Error(`Error uploading video to Cloudinary: ${error.message}`);
  }
};

export { upload, uploadToCloudinary };
