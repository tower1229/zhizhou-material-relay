import { ComponentMetadata } from '@alilc/lowcode-types';
import { uuid } from '../util';

const ColorfulContainerCellMeta: ComponentMetadata = {
  componentName: 'ColorfulContainerCell',
  title: '容器单元',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulContainerCell',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'key',
        title: 'key',
        setter: 'StringSetter',
        initialValue: (val) => val || uuid(),
        supportVariable: true,
      },
      {
        name: 'flexNumber',
        title: '单元格尺寸',
        setter: 'NumberSetter',
        initialValue: 1,
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

export default {
  ...ColorfulContainerCellMeta,
};
