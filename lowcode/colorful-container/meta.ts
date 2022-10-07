import { ComponentMetadata, Snippet } from "@alilc/lowcode-types";
import { uuid } from "../util";

const ColorfulContainerMeta: ComponentMetadata = {
  componentName: "ColorfulContainer",
  title: "容器",
  docUrl: "",
  screenshot: "",
  devMode: "proCode",
  npm: {
    package: "zhizhou-material-relay",
    version: "0.0.26",
    exportName: "ColorfulContainer",
    main: "src/index.tsx",
    destructuring: true,
    subName: "",
  },
  props: [
    {
      name: "alias",
      title: { label: "别名" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "autoHeight",
      title: { label: "高度自适应" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true,
    },
    {
      name: "height",
      title: { label: "固定高度" },
      setter: [
        {
          componentName: "NumberSetter",
        },
      ],
      defaultValue: 500,
      isRequired: false,
      condition: {
        type: "JSFunction",
        value:
          "condition(target) {\n          return target.getProps().getPropValue("autoHeight") === false;\n        }",
      },
    },
    {
      name: "gap",
      title: { label: "间距" },
      setter: [
        {
          componentName: "NumberSetter",
        },
      ],
      defaultValue: 20,
      isRequired: false,
    },
    {
      name: "direction",
      title: { label: "布局方向" },
      setter: [
        {
          componentName: "RadioGroupSetter",
          props: {
            options: [
              {
                title: "行布局",
                value: "row",
              },
              {
                title: "列布局",
                value: "column",
              },
            ],
          },
        },
      ],
      defaultValue: "row",
      isRequired: true,
    },
    {
      name: "cells",
      title: "单元格",
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "ObjectSetter",
            props: {
              config: {
                items: [
                  {
                    name: "key",
                    title: "key",
                    setter: "StringSetter",
                    initialValue: (val) => val || uuid(),
                    supportVariable: true,
                  },
                  {
                    name: "flexNumber",
                    title: "单元格尺寸",
                    setter: "NumberSetter",
                    initialValue: 1,
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                flexNumber: 1,
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue("key") ? String(child.getPropValue("key")) : child.id;
            return {
              key,
              flexNumber: child.getPropValue("flexNumber"),
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
            map[item.key] = Object.assign({}, item);
          });

          node.children.mergeChildren(
            (child) => {
              const key = String(child.getPropValue("key"));
              if (Object.hasOwnProperty.call(map, key)) {
                child.setPropValue("flexNumber", map[key].flexNumber);
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
                    componentName: "ColorfulContainerCell",
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1, child2) => {
              const a = value.findIndex(
                (item) => String(item.key) === String(child1.getPropValue("key")),
              );
              const b = value.findIndex(
                (item) => String(item.key) === String(child2.getPropValue("key")),
              );
              return a - b;
            },
          );
        },
      },
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { style: true },
  },
};
const snippets: Snippet[] = [
  {
    title: "容器",
    screenshot: "",
    schema: {
      componentName: "ColorfulContainer",
      props: {},
      children: [
        {
          componentName: "ColorfulContainerCell",
          props: {
            flexNumber: 1,
          },
        },
        {
          componentName: "ColorfulContainerCell",
          props: {
            flexNumber: 2,
          },
        },
      ],
    },
  },
];

export default {
  ...ColorfulContainerMeta,
  snippets,
};
