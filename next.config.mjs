// const isGithubActions = process.env.GITHUB_ACTIONS || false;
// let assetPrefix = '';
// let basePath = '';

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// } else {
//   // Manually set the repository name
//   const repo = 'blog'; // This should match your repository name
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`
// }

// export default {
//   reactStrictMode: true,
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   output: 'export'
// };

export default {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
      unoptimized: true, // Optional: if you want to disable Vercel's image optimization
    },
    output: 'export', // This is only needed if you're generating a static site.
  };
