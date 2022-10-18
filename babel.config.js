/** @type {import('jest').Config} */
module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}]
    ],
};