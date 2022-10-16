import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulCardMeta: ComponentMetadata = {
  componentName: 'ColorfulCard',
  title: 'ColorfulCard',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulCard',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'styleTyle',
      title: { label: '样式' },
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '卡片',
                value: 'normal',
              },
              {
                title: '透明',
                value: 'transparent',
              },
            ],
          },
        },
      ],
      defaultValue: 'normal',
      isRequired: true,
    },
    {
      name: 'title',
      title: { label: '标题' },
      propType: { type: 'oneOfType', value: ['string'] },
      defaultValue: '分组标题',
    },
    {
      name: 'subTitle',
      title: { label: '子标题' },
      propType: { type: 'oneOfType', value: ['string'] },
    },
    {
      name: 'description',
      title: { label: '解释文案' },
      propType: { type: 'oneOfType', value: ['string'] },
    },
    {
      name: 'withBorder',
      title: { label: '头部分割线' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'withCollapse',
      title: { label: '收起操作' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'withPadding',
      title: { label: '内容区间距' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'headerExt',
      title: { label: '操作项' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: '按钮文字',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'actionList',
                    title: '事件',
                    setter: {
                      componentName: 'ArraySetter',
                      props: {
                        itemSetter: {
                          componentName: 'FunctionSetter',
                        },
                      },
                    },
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                title: '按钮',
                actionList: [],
              };
            },
          },
        },
      },
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '分组',
    screenshot: '',
    schema: {
      componentName: 'ColorfulCard',
      props: {},
    },
  },
];

export default {
  ...ColorfulCardMeta,
  snippets,
};
