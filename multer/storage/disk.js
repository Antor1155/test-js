const multer = require("multer")
const fs = require("fs")

const generateStorageDisk = ({ folderName }) => {
	return multer.diskStorage({
		destination: (req, file, cb) => {
			const relativePath = "/media/" + folderName
			const dir = rootDir + relativePath
			req.absPath = dir
			req.relativePath = relativePath
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true })
			}
			cb(null, dir)
		},
		filename: (req, file, cb) => {
			const filename =
				new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
			req.file_url = req.absPath + "/" + filename
			/*
            if (isWin) req.file_url = req.absPath + "/" + filename;
            else req.file_url = req.relativePath + "/" + filename;
            */
			cb(null, filename)
		},
	})
}

const tempStorage = generateStorageDisk({
	folderName: "temp",
})

module.exports = {
	tempStorage,
}
