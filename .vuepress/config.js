module.exports = {
    "title": "my blog",
    "description": "my blog",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "GitHub",
                "icon": "reco-github",
                "link": "https://github.com/WE180"
            }
        ],
        "sidebar": {
            "/blogs/Web/vuepress/": [
                {
                    //组名
                    title: 'vuepress-theme-reco',
                    //不折叠
                    collapsable: false,
                    //该分组下要显示的文件的目录
                    children: [
                        {
                            title: '介绍', path: 'what'
                        },
                        {
                            title: '安装', path: 'how'
                        }
                    ]
                }
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "2020-05-20",
        "author": "we",
        "authorAvatar": "https://images.sudk.top/scc-2022-1-2915%3A38%3A41.jpg",
        "record": "",
        "startYear": "2021",
        "subSidebar": "auto"
    },
    "markdown": {
        "lineNumbers": true
    }
}
