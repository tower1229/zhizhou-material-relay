import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulLinkBoxMeta: ComponentMetadata = {
  componentName: 'ColorfulLinkBox',
  title: 'ColorfulLinkBox',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.1.30',
    exportName: 'ColorfulLinkBox',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
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
      name: 'params',
      title: {
        label: '携带参数',
      },
      propType: 'string',
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    supportVariable: true,
                  },
                  {
                    name: 'value',
                    title: 'value',
                    setter: 'StringSetter',
                    supportVariable: true,
                  },
                ],
              },
            },
          },
        },
      },
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
      extraProps: {
        display: 'block',
      },
    },
  ],
  configure: {
    supports: { style: true },
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '链接块',
    screenshot: '',
    schema: {
      componentName: 'ColorfulLinkBox',
      props: {},
    },
  },
];

export default {
  ...ColorfulLinkBoxMeta,
  snippets,
};
