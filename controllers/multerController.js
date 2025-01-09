const multerPostTest = (req, res) => {
	try {
		const file = req?.file?.location;
		const name = req?.body?.name;

		console.log({ file, name });

		return res.status(200).json({
			file,
			name,
		});
	} catch (error) {
		console.error(error);
	}
};

module.exports = { multerPostTest };
