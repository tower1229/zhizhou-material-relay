import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulPageMeta: ComponentMetadata = {
  componentName: 'ColorfulPage',
  title: 'ColorfulPage',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulPage',
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
            'en-US': 'getShow',
            'zh-CN': 'getShow',
          },
        },
        name: 'getShow',
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
      {
        important: false,
        type: 'field',
        title: '我的属性',
        name: 'dialogSlot',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SlotSetter',
                initialValue: {
                  type: 'JSSlot',
                  title: 'dialogSlot',
                  value: [],
                },
                props: {},
              },
              'VariableSetter',
            ],
          },
        },
        extraProps: {
          display: 'inline',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: 'ColorfulPage',
    screenshot: '',
    schema: {
      componentName: 'ColorfulPage',
      props: {},
    },
  },
];

export default {
  ...ColorfulPageMeta,
  snippets,
};
