module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/new-portfolio/'
    : '/',
    css: {
        loaderOptions: {
          sass: {
            prependData: `
                        @import "@/assets/style/_variables.scss";
                    `,
          },
        },
      },
}