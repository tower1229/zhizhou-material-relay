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
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tab',
            'zh-CN': 'tab',
          },
        },
        name: 'tab',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled',
          },
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender',
          },
        },
        name: 'forceRender',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closable',
            'zh-CN': 'closable',
          },
        },
        name: 'closable',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': 'closeIcon',
          },
        },
        name: 'closeIcon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls',
          },
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabKey',
            'zh-CN': 'tabKey',
          },
        },
        name: 'tabKey',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id',
          },
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'animated',
            'zh-CN': 'animated',
          },
        },
        name: 'animated',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': 'active',
          },
        },
        name: 'active',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyInactiveTabPane',
            'zh-CN': 'destroyInactiveTabPane',
          },
        },
        name: 'destroyInactiveTabPane',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};

export default {
  ...ColorfulTabPaneMeta,
};
