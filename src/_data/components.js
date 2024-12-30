export default {
	async YesNo(data) {
		if (data instanceof Promise) data = await data;
		return `<div style="border: 0.125em solid currentColor; border-radius: 0.5em; padding: 1em;">
			<h2>The answer is: ${data.answer}</h2>
			<img src="${data.image}" alt="A random meme for the answer '${data.answer}'">
		</div>`
	}
}
