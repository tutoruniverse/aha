export default {
    title: 'Aha Design System',
    titleTemplate: '%s | Aha Design System',
    description: 'An ever-evolving system that enables us to build higher quality products more efficiently',
    themeConfig: {
        siteTitle: 'Aha Design System',
        lastUpdated: true,
        cleanUrls: true,
        markdown: {
            headers: {
              level: [0, 0]
            }
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/gotitinc/ahaui#readme',
            },
            {
                icon: 'slack',
                link: 'https://bit.ly/aha-design-system-slack-invitation',
            }
        ],
        footer: {
            message: 'Released under the <a href="https://github.com/gotitinc/ahaui/blob/main/LICENSE" target="_blank">Apache-2.0 License.</a>',
            copyright: 'Copyright © 2019-present <a href="https://www.got-it.co/" target="_blank">Got It, Inc.</a>'
        },
        editLink: {
            pattern: 'https://github.com/aha/docs/tree/v2x/main/docs/:path',
        },
        nav: [
            { text: 'Design', link: '/design/overview'},
            { text: 'Components', link: '/components/button', activeMatch: '^/components/' },
            { text: 'CSS Utilities', link: '/css/overview' },
        ],
        sidebar: {
            '/design/': designSidebar(),
            '/components/': componentsSidebar(),
            '/css/': cssSidebar(),
        }
    },
    base: '/v2x/',
}

function designSidebar() {
    return [
        { text: 'Overview', link: '/design/overview'},
        { text: 'Colors', link: '/design/colors'},
    ]
}

function componentsSidebar() {
    return [
        { text: 'Overview', link: '/components/overview'},
        { text: 'Button', link: '/components/button'},
    ]
}

function cssSidebar() {
    return [
        { text: 'Overview', link: '/css/overview'},
        { text: 'Colors', link: '/css/color'},
    ]
}