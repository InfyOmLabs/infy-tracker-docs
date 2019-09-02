module.exports = {
    base: "/infy-tracker/",
    title: 'InfyTracker',
    description: 'Minimal Task and Time Management tool',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: '/assets/css/all.css' }],
        ['link', { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.12/css/lightgallery.min.css' }],
        ['link', { rel: 'stylesheet', href: '/assets/css/style.css' }],
        ["script", { src: "https://code.jquery.com/jquery-1.12.4.min.js" }],
        ["script", { src: "/assets/js/popper.min.js" }],
        ["script", { src: "/assets/js/bootstrap.min.js" }],
        ["script", { src: "https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.js" }],
        ["script", { src: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.3.2/js/lightgallery.js" }],
    ],
    themeConfig: {
        search: false,
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/docs/' },
        ],
        sidebar: 'auto'
    }
}
