import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulTreeMeta: ComponentMetadata = {
  componentName: 'ColorfulTree',
  title: 'ColorfulTree',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulTree',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'treeData',
      title: {
        label: '数据',
        tip: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）',
      },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'autoExpandParent',
      title: { label: '是否自动展开父节点', tip: '是否自动展开父节点' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'blockNode',
      title: { label: '是否节点占据一行', tip: '是否节点占据一行' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'checkable',
      title: {
        label: '节点前添加 Checkbox 复选框',
        tip: '节点前添加 Checkbox 复选框',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'checkedKeys',
      title: {
        label: '复选框节点',
        tip: '（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联',
      },
      propType: {
        type: 'oneOfType',
        value: [{ value: 'arrayOf', type: 'string' }, 'object'],
      },
    },
    {
      name: 'checkStrictly',
      title: {
        label: '完全受控',
        tip: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'defaultCheckedKeys',
      title: { label: '默认选中值', tip: '默认选中值' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'defaultExpandAll',
      title: { label: '默认展开所有树节点', tip: '默认展开所有树节点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'defaultExpandedKeys',
      title: { label: '默认展开指定的树节点', tip: '默认展开指定的树节点' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'defaultExpandParent',
      title: { label: '默认展开父节点', tip: '默认展开父节点' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '默认选中值', tip: '默认选中值' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'draggable',
      title: { label: '节点可拖拽', tip: '设置节点可拖拽（IE>8）' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'expandedKeys',
      title: {
        label: '展开指定节点',
        tip: '（受控）展开指定的树节点',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'filterTreeNode',
      title: {
        label: '筛选树节点',
        tip: '按需筛选树节点（高亮），返回 true',
      },
      propType: 'func',
    },
    {
      name: 'loadData',
      title: { label: '异步加载数据', tip: '异步加载数据' },
      propType: 'func',
    },
    {
      name: 'loadedKeys',
      title: {
        label: '已经加载节点',
        tip: '（受控）已经加载的节点，需要配合 `loadData` 使用',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'multiple',
      title: {
        label: '支持多选',
        tip: '支持点选多个节点（节点本身）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'selectable',
      title: { label: '是否可选中', tip: '是否可选中' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'selectedKeys',
      title: {
        label: '选中的树节点',
        tip: '（受控）设置选中的树节点',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'StringSetter',
          },
        },
      },
    },
    {
      name: 'showIcon',
      title: {
        label: '展示图标',
        tip: '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    // {
    //   name: 'switcherIcon',
    //   title: {
    //     label: '自定义树节点的展开/折叠图标',
    //     tip: '自定义树节点的展开/折叠图标',
    //   },
    //   propType: 'node',
    // },
    {
      name: 'showLine',
      title: { label: '是否展示连接线', tip: '是否展示连接线' },
      propType: { type: 'oneOfType', value: ['bool', 'object'] },
    },
  ],
  configure: {
    supports: { style: true },
  },
};
const snippets: Snippet[] = [
  {
    title: '树',
    screenshot: '',
    schema: {
      componentName: 'ColorfulTree',
      props: {},
    },
  },
];

export default {
  ...ColorfulTreeMeta,
  snippets,
};
