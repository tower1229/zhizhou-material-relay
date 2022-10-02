module.exports = {
  alias: {
    '@': './src',
  },

 
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: "@alilc",
        baseUrl: {
          prod: `http://116.196.125.106:18040`,
          daily: `http://116.196.125.106:18040`,
        },

        

        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.22.4',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.22.4/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.22.4/antd.min.css`,
                ],
                library: 'antd',
              },
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};
