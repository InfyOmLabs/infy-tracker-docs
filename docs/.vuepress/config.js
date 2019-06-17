module.exports = {
    base: "/infy-tracker/",
    title: 'InfyTracker',
    description: 'Minimal Task and Time Management tool',
    themeConfig: {
        head: [
            ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
        ],
        search: false,
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: 'auto'
    }
}
