import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../util';

const ColorfulTabMeta: ComponentMetadata = {
  componentName: 'ColorfulTab',
  title: 'ColorfulTab',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zhizhou-material-relay',
    version: '0.0.26',
    exportName: 'ColorfulTab',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'tabs',
      title: '标签项',
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
                    initialValue: (val) => val || uuid(),
                    supportVariable: true,
                  },
                  {
                    name: 'tab',
                    title: '标题',
                    setter: 'StringSetter',
                    initialValue: '标签项',
                    supportVariable: true,
                  },
                  {
                    name: 'disabled',
                    title: '禁用',
                    setter: 'BoolSetter',
                    initialValue: false,
                    supportVariable: true,
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                tab: '标签项',
                closeable: true,
                disabled: false,
                forceRender: false,
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              tab: child.getPropValue('tab'),
              title: child.getPropValue('tab'),
            };
          });
          return map;
        },
        setValue(target, value) {
          const { node } = target;
          const map = {};

          if (!Array.isArray(value)) {
            value = [];
          }
          value.forEach((item) => {
            const tabItem = Object.assign({}, item);
            map[item.key] = tabItem;
          });

          node.children.mergeChildren(
            (child) => {
              const key = String(child.getPropValue('key') || child.id);
              if (Object.hasOwnProperty.call(map, key)) {
                child.setPropValue('tab', map[key].tab || map[key].title);
                delete map[key];
                return false;
              }
              return true;
            },
            () => {
              const items = [];
              for (const key in map) {
                if (Object.hasOwnProperty.call(map, key)) {
                  items.push({
                    componentName: 'ColorfulTabPane',
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1, child2) => {
              const a = value.findIndex(
                (item) => String(item.key) === String(child1.getPropValue('key') || child1.id),
              );
              const b = value.findIndex(
                (item) => String(item.key) === String(child2.getPropValue('key') || child2.id),
              );
              return a - b;
            },
          );
        },
      },
    },

    {
      name: 'size',
      title: {
        label: '尺寸',
      },
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '中',
                value: 'default',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
      ],
      defaultValue: 'normal',
    },
    {
      name: 'type',
      title: {
        label: '页签样式',
      },
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '普通型',
                value: 'line',
              },
              {
                title: '包裹型',
                value: 'card',
              },
              {
                title: '文本型',
                value: 'cumstom-text',
              },
              {
                title: '胶囊型',
                value: 'cumstom-capsule',
              },
            ],
          },
        },
      ],
      defaultValue: 'line',
    },
    {
      name: 'centered',
      title: { label: '标签居中', tip: '标签居中展示' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'headerExt',
      title: { label: '自定义操作项', tip: 'tab bar上额外的元素' },
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
    {
      name: 'tabBarGutter',
      title: { label: '标签间隙', tip: 'tabs之间的间隙' },
      propType: 'number',
      setter: 'NumberSetter',
      supportVariable: true,
    },
    {
      name: 'tabPosition',
      title: {
        label: '页签位置',
        tip: '页签位置',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'top',
    },
    {
      name: 'animated',
      title: {
        label: '切换动画',
        tip: '是否使用动画切换Tabs',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'onChange',
      title: { label: '切换面板的回调', tip: '切换面板的回调' },
      propType: 'func',
    },
    {
      name: 'onEdit',
      title: {
        label: '新增删除回调',
        tip: '新增和删除页签的回调，在`type="editable-card"`时有效',
      },
      condition(target) {
        return target.getProps().getPropValue('type') === 'editable-card';
      },
      propType: 'func',
    },
    {
      name: 'onTabClick',
      title: { label: 'tab点击回调', tip: 'tab被点击的回调' },
      propType: 'func',
    },
    {
      name: 'onTabScroll',
      title: { label: 'tab滚动触发', tip: 'tab滚动时触发' },
      propType: 'func',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(activeKey,${extParams}){\n// 切换面板的回调\nconsole.log('onChange',activeKey);}",
        },
        {
          name: 'onEdit',
          template:
            "onEdit(targetKey,action,${extParams}){\n// 新增和删除页签的回调\nconsole.log('onEdit',targetKey,action);}",
        },
        {
          name: 'onTabClick',
          template:
            "onTabClick(key,event,${extParams}){\n// tab 被点击的回调\nconsole.log('onTabClick',key,event);}",
        },
        {
          name: 'onTabScroll',
          template:
            "onTabScroll({direction},${extParams}){\n// tab 滚动时触\nconsole.log('onTabScroll',direction);}",
        },
      ],
    },
    advanced: {
      initialChildren: [
        {
          componentName: 'ColorfulTabPane',
          props: { key: 'item1', tab: 'Item 1' },
        },
        {
          componentName: 'ColorfulTabPane',
          props: { key: 'item2', tab: 'Item 2' },
        },
      ],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '选项卡',
    screenshot: '',
    schema: {
      componentName: 'ColorfulTab',
      props: {},
    },
  },
];

export default {
  ...ColorfulTabMeta,
  snippets,
};
