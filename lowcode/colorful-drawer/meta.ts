import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulDrawerMeta: ComponentMetadata = {
  componentName: 'ColorfulDrawer',
  title: 'ColorfulDrawer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulDrawer',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'alias',
      title: { label: '别名' },
      propType: { type: 'oneOfType', value: ['string'] },
    },
    {
      name: 'title',
      title: { label: '标题', tip: 'title | 标题' },
      propType: { type: 'oneOfType', value: ['string'] },
      setter: ['StringSetter', 'VariableSetter'],
      defaultValue: '标题',
    },
    {
      name: 'placement',
      title: { label: '位置', tip: 'placement | 抽屉的显示位置' },
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'right',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '上方',
              value: 'top',
            },
            {
              title: '右侧',
              value: 'right',
            },
            {
              title: '下方',
              value: 'bottom',
            },
            {
              title: '左侧',
              value: 'left',
            },
          ],
        },
      },
    },
    {
      name: 'size',
      title: { label: '大小', tip: 'size | 抽屉的大小' },
      propType: { type: 'oneOf', value: ['default', 'large'] },
      defaultValue: 'default',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '默认',
              value: 'default',
            },
            {
              title: '超大',
              value: 'large',
            },
          ],
        },
      },
    },
    {
      name: 'width',
      title: { label: '宽度', tip: 'width | 宽度' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
      setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
    },
    {
      name: 'height',
      title: {
        label: '高度',
        tip: 'height | 高度, 在 placement 为 top 或 bottom 时使用',
      },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
      setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
    },
    {
      name: 'zIndex',
      title: { label: 'z-index', tip: '设置 Drawer 的 `z-index`' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'visible',
      title: { label: '是否可见', tip: 'visible | Drawer 是否可见' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'mask',
      title: { label: '显示遮罩', tip: 'mask | 是否显示遮罩' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
  },
};

const snippets: Snippet[] = [
  {
    title: '抽屉',
    screenshot: '',
    schema: {
      componentName: 'ColorfulDrawer',
      props: {},
    },
  },
];

export default {
  ...ColorfulDrawerMeta,
  snippets,
};
