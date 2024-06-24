// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     webpack: (config, { isServer }) => {
//       // Add rule for SVG files
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: [
//           '@svgr/webpack',
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//               fallback: require.resolve('file-loader'),
//               publicPath: `/_next/static/images/`,
//               outputPath: `${isServer ? '../' : ''}static/images/`,
//               name: '[name].[hash].[ext]',
//             },
//           },
//         ],
//       });
  
//       return config;
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
