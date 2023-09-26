// // webpack.config.js
// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // Entry point of your application
//   output: {
//     filename: 'bundle.js', // Output file name
//     path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // Match JavaScript and JSX files
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // Use Babel as the loader
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
// };

// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // Entry point of your application
//   output: {
//     filename: 'bundle.js', // Output file name
//     path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // Match JavaScript and JSX files
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // Use Babel as the loader
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
//         use: [
//           {
//             loader: 'file-loader', // Use file-loader for handling images
//             options: {
//               outputPath: 'images/', // Output directory for images
//               name: '[name].[ext]', // Specify the filename format
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // Entry point of your application
//   output: {
//     filename: 'bundle.js', // Output file name
//     path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // Match JavaScript and JSX files
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // Use Babel as the loader
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/, // Match CSS files
//         use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
//         use: [
//           {
//             loader: 'file-loader', // Use file-loader for handling images
//             options: {
//               outputPath: 'images/', // Output directory for images
//               name: '[name].[ext]', // Specify the filename format
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
 