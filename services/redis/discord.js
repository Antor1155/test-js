const axios = require("axios")

const discordClient = axios.create({
	baseURL: "https://discord.com/api/webhooks/",
	headers: {
		"Content-Type": "application/json",
	},
})

const sendToChannel = async (url, message) => {
	try {
		const response = await discordClient.post(`${url}`, {
			content: message,
		})

		console.log(response)

		return response.status === 204
	} catch (error) {
		throw error
	}
}

module.exports = {
	sendToChannel,
}
