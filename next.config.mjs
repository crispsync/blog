const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = ``;
} else {
  // Manually set the repository name
  const repo = ''; // This should match your repository name
  assetPrefix = `/${repo}/`;
  basePath = ``;
}

export default {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
//   output: 'export',
};
