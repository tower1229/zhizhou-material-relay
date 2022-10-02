import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulComplexMeta: ComponentMetadata = {
  componentName: 'ColorfulComplex',
  title: 'ColorfulComplex',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.0',
    exportName: 'ColorfulComplex',
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
    title: 'ColorfulComplex',
    screenshot: '',
    schema: {
      componentName: 'ColorfulComplex',
      props: {},
    },
  },
];

export default {
  ...ColorfulComplexMeta,
  snippets,
};
