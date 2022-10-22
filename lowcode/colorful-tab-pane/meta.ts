import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulTabPaneMeta: ComponentMetadata = {
  componentName: 'ColorfulTabPane',
  title: 'ColorfulTabPane',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.1.22',
    exportName: 'ColorfulTabPane',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'key',
        title: {
          label: 'key',
          tip: 'key',
        },
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tab',
        title: {
          label: '标题',
          tip: '标题',
        },
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: '是否禁用',
          tip: '是否为禁用状态',
        },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'forceRender',
        title: {
          label: '隐藏时保留',
          tip: '被隐藏时是否渲染 DOM 结构',
        },
        propType: 'bool',
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Tab'],
      },
    },
  },
};

export default {
  ...ColorfulTabPaneMeta,
};
