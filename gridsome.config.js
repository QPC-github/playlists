// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'playlists de data.gouv.fr',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://stats.data.gouv.fr/',
        siteId: 97
      }
    }
  ]
}
