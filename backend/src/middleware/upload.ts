import fs from "fs";
import path from "path";
import multer from "multer";

const uploadsDir = path.join(__dirname, "..", "..", "uploads");

// Ensure uploads directory exists at runtime
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    const sanitized = file.originalname.replace(/\s+/g, "_");
    cb(null, `${timestamp}-${sanitized}`);
  },
});

export const upload = multer({ storage });

