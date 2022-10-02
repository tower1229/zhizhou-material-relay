import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulTableMeta: ComponentMetadata = {
  componentName: 'ColorfulTable',
  title: 'ColorfulTable',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.40',
    exportName: 'ColorfulTable',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getShowClick',
            'zh-CN': 'getShowClick',
          },
        },
        name: 'getShowClick',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getUser',
            'zh-CN': 'getUser',
          },
        },
        name: 'getUser',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: true,
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'ColorfulTable',
    screenshot: '',
    schema: {
      componentName: 'ColorfulTable',
      props: {},
    },
  },
];

export default {
  ...ColorfulTableMeta,
  snippets,
};
