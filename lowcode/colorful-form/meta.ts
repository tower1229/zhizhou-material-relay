import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulFormMeta: ComponentMetadata = {
  componentName: 'ColorfulForm',
  title: 'ColorfulForm',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  category: '常用',
  group: '精选组件',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.1.0',
    exportName: 'ColorfulForm',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "type",
      //       "zh-CN": "类型"
      //     },
      //     "tip": "type | 类型"
      //   },
      //   "name": "type",
      //   "description": "类型",
      //   "setter": {
      //     "componentName": "RadioGroupSetter",
      //     "props": {
      //       "dataSource": [
      //         {
      //           "label": "primary",
      //           "value": "primary"
      //         },
      //         {
      //           "label": "secondary",
      //           "value": "secondary"
      //         },
      //         {
      //           "label": "normal",
      //           "value": "normal"
      //         }
      //       ],
      //       "options": [
      //         {
      //           "label": "primary",
      //           "value": "primary"
      //         },
      //         {
      //           "label": "secondary",
      //           "value": "secondary"
      //         },
      //         {
      //           "label": "normal",
      //           "value": "normal"
      //         }
      //       ]
      //     },
      //     "initialValue": "primary"
      //   }
      // },

      {
        title: '标题',
        name: 'activeValue',
        setter: {
          componentName: 'MixedSetter',
          isRequired: true,
          props: {
            setters: ['StringSetter', 'NumberSetter', 'VariableSetter'],
          },
        },
      },

      {
        title: '元数据',
        name: 'activeValue',
        setter: {
          componentName: 'MixedSetter',
          isRequired: true,
          props: {
            setters: ['StringSetter', 'NumberSetter', 'VariableSetter'],
          },
        },
      },
      {
        title: '是否显示',
        name: 'boolValue',
        setter: {
          componentName: 'BoolSetter',
          isRequired: true,
          // props: {
          //   setters: [
          //     "BoolSetter",
          //   ],
          // },
        },
      },
    ],
    supports: {
      style: true,
      events: ['onPressEnter', 'onClear', 'onChange', 'onKeyDown', 'onFocus', 'onBlur'],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'ColorfulForm',
    screenshot: '',
    schema: {
      componentName: 'ColorfulForm',
      props: {},
    },
  },
];

export default {
  ...ColorfulFormMeta,
  snippets,
};
