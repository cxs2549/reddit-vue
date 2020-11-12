module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/app.scss";`,
            },
        },
    },
}
