// vue.config.js
const px2rem = require("postcss-px2rem")

const postcss = px2rem({remUnit: 37.5})

module.exports = {
    runtimeCompiler: true,
    // lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
};
