import { logPages } from "./api/pages";
var data = {
  userName: 'sdzz',
  password: 'Zz@123456',
  loginType: 'USERNAME'
};
logPages(data).then(function (res) {});
export { default as ColorfulButton } from "./components/colorful-button";
export { default as ColorfulInput } from "./components/colorful-input";
export { default as ColorfulForm } from "./components/colorful-form";
export { default as ColorfulPage } from "./components/colorful-page";
export { default as ColorfulDialog } from "./components/colorful-dialog";
export { default as ColorfulTable } from "./components/colorful-table";
export { default as ColorfulComplex } from "./components/colorful-complex"; // layout components

export { default as ColorfulIframe } from "./components/colorful-iframe";
export { default as ColorfulContainer } from "./components/colorful-container";
export { default as ColorfulContainerCell } from "./components/colorful-container-cell";
export { default as ColorfulCard } from "./components/colorful-card";
export { default as ColorfulTab } from "./components/colorful-tab";
export { default as ColorfulTabPane } from "./components/colorful-tab.tab-pane";
export { default as ColorfulLinkBox } from "./components/colorful-link-box";
export { default as ColorfulDrawer } from "./components/colorful-drawer";
export { default as ColorfulLink } from "./components/colorful-link";
var bizCssPrefix = 'bizpack';
export { bizCssPrefix };