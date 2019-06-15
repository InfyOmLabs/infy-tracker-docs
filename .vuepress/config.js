module.exports = {
    title: 'InfyTracker',
    description: 'Minimal Task and Time Management tool',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }]
        ],
        search: false,
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: 'auto'
    }
}