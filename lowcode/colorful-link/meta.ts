import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulLinkMeta: ComponentMetadata = {
  componentName: 'ColorfulLink',
  title: 'ColorfulLink',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulLink',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      setter: ['StringSetter', 'VariableSetter'],
      supportVariable: true,
      defaultValue: '链接文字',
    },
    {
      name: 'type',
      title: { label: '' },
      propType: { type: 'oneOf', value: ['inside', 'outside'] },
      defaultValue: 'inside',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '内部链接',
              value: 'inside',
            },
            {
              title: '外部链接',
              value: 'outside',
            },
          ],
        },
      },
    },
    {
      name: 'route',
      title: { label: '链接地址' },
      propType: 'string',
      setter: ['StringSetter'],
      condition: {
        type: 'JSFunction',
        value:
          "condition(target) {\n          return target.getProps().getPropValue('type') === 'inside';\n        }",
      },
    },
    {
      name: 'href',
      title: { label: '跳转链接', tip: '跳转链接' },
      propType: 'string',
      setter: 'StringSetter',
      defaultValue: '',
      condition: {
        type: 'JSFunction',
        value:
          "condition(target) {\n          return target.getProps().getPropValue('type') === 'outside';\n        }",
      },
    },
    {
      name: 'target',
      title: { label: '跳转位置', tip: '在何处显示链接的资源' },
      propType: {
        type: 'oneOf',
        value: ['_self', '_blank', '_parent', '_top'],
      },
      defaultValue: '_self',
      condition: {
        type: 'JSFunction',
        value:
          "condition(target) {\n          return target.getProps().getPropValue('type') === 'outside';\n        }",
      },
    },
    {
      name: 'clickHandler',
      title: { label: '点击事件' },
      setter: 'FunctionSetter',
    },
  ],
  configure: {
    supports: { style: true },
  },
};
const snippets: Snippet[] = [
  {
    title: '链接',
    screenshot: '',
    schema: {
      componentName: 'ColorfulLink',
      props: {},
    },
  },
];

export default {
  ...ColorfulLinkMeta,
  snippets,
};
