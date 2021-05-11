const multer = require("multer");

const storage = (path) =>
	multer.diskStorage({
		destination: "./uploads/",
		filename: (req, file, cb) => {
			cb(null, `${file.originalname}`);
		},
	});

const upload = (path) =>
	multer({
		storage: storage(path.replace("\\", "/")),
		fileFilter: (req, file, cb) => {
			if (
				file.mimetype === "image/png" ||
				file.mimetype === "image/jpg" ||
				file.mimetype === "image/jpeg"
			) {
				cb(null, true);
			} else {
				cb(null, false);
				return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
			}
		},
	});

module.exports = upload;
