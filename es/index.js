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
export { default as ColorfulDialog } from "./components/colorful-dialog";
export { default as ColorfulIframe } from "./components/colorful-iframe";
export { default as ColorfulTable } from "./components/colorful-table";
export { default as ColorfulComplex } from "./components/colorful-complex";
var bizCssPrefix = 'bizpack';
export { bizCssPrefix };