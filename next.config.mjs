const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
} else {
  // Manually set the repository name
  const repo = 'blog'; // This should match your repository name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`
}

export default {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export'
};
