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


