import muhPlugin from "./plugins/muh-plugin.js";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(muhPlugin);

	return {
		dir: {
			input: 'src',
			output: 'dist',
		}
	}
};
