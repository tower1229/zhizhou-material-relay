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
      name: 'alias',
      title: { label: '别名' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'url',
      title: { label: 'iframe地址' },
      propType: { type: 'oneOfType', value: ['string'] },
    },
    {
      name: 'autoHeight',
      title: { label: '高度自适应' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'offset',
      title: { label: '尺寸' },
      propType: 'object',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'height',
                title: { label: '内容区高度', tip: '内容区高度' },
                propType: { type: 'oneOfType', value: ['string', 'number'] },
                setter: [
                  {
                    componentName: 'NumberSetter',
                    initialValue: 500,
                  },
                ],
                isRequired: false,
              },
              {
                name: 'marginTop',
                title: { label: '顶部空间', tip: '顶部空间' },
                propType: { type: 'oneOfType', value: ['string', 'number'] },
                setter: [
                  {
                    componentName: 'NumberSetter',
                    initialValue: 0,
                  },
                ],
                isRequired: false,
              },
            ],
          },
        },
      },
    },
  ],
  configure: {
    component: {},
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
