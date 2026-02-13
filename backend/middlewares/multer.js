import multer from "multer";

const storage = multer.memoryStorage();

// Expect frontend to send file with field name "resume"
export const singleUpload = multer({ storage }).single("resume");
