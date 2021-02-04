### stylus

- npm install -D stylus-loader stylus

### 适配

- npm i postcss-px2rem lib-flexible

    ```
    const postcss = px2rem({remUnit: 37.5})
    
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
    ```

### 表单验证

- [vee-validate](https://vee-validate.logaretm.com/v3)

### token

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

### better-scroll

- [better-scroll](https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md)
