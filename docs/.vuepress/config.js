module.exports = {
    base: "/infy-tracker/",
    title: 'InfyTracker',
    description: 'Minimal Task and Time Management tool',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ["script", { src: "/assets/js/jquery-3.4.1.min.js" }],
        ["script", { src: "/assets/js/popper.min.js" }],
        ["script", { src: "/assets/js/bootstrap.min.js" }],
        ["script", { src: "/assets/js/contact.js" }],
        ["script", { src: "/assets/js/validate.js" }],
    ],
    themeConfig: {
        search: false,
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/docpage/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: 'auto'
    }
}
