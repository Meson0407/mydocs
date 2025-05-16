module.exports = {
    base: '/docs/',
    title: "X",
    description: "分享技术知识和经验",
    head: [
        // ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        // logo: '/assets/img/logo.png',
        sidebar: [
            {
                title: '指南',
                collapsable: true,
                children: [
                    '/guide/getting-started',
                    '/guide/configuration',
                ],
                sidebarDepth: 1,
                path: '/guide/getting-started'
            },
            {
                title: '前端',
                collapsable: true,
                children: [
                    '/front-end/html',
                    '/front-end/js',
                    '/front-end/vue3'
                ],
                sidebarDepth: 1,
                path: '/front-end/html'
            },
        ],
        navbar: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '关于', link: '/about/' },
            { text: '前端', link: '/front-end/' }
        ],
        search: true,
        searchMaxSuggestions: 10
    },

}