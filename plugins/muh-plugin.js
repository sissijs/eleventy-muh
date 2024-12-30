import path from 'node:path';
import { template } from '@sissijs/muh/template';

export default async (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('muh');

  eleventyConfig.addExtension('muh', {
    outputFileExtension: 'html',
    compile: async (content, fullPath) => {
      if (path.basename(fullPath).startsWith('_')) {
        console.error('will not be processed: ', fullPath, path.parse(fullPath).name);
        return;
      }

      return async (data) => {
				return template(content, data);
      };
    },
  });
};
