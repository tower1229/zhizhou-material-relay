import { logPages } from './api/pages';
let data = {
  userName: 'sdzz',
  password: 'Zz@123456',
  loginType: 'USERNAME',
};
logPages(data).then((res) => {});

export type { ColorfulButtonProps } from './components/colorful-button';
export { default as ColorfulButton } from './components/colorful-button';

export type { ColorfulInputProps } from './components/colorful-input';
export { default as ColorfulInput } from './components/colorful-input';

export type { ColorfulFormProps } from './components/colorful-form';
export { default as ColorfulForm } from './components/colorful-form';

export type { ColorfulPageProps } from './components/colorful-page';
export { default as ColorfulPage } from './components/colorful-page';

export type { ColorfulDialogProps } from './components/colorful-dialog';
export { default as ColorfulDialog } from './components/colorful-dialog';

export type { ColorfulTableProps } from './components/colorful-table';
export { default as ColorfulTable } from './components/colorful-table';

export type { ColorfulComplexProps } from './components/colorful-complex';
export { default as ColorfulComplex } from './components/colorful-complex';

// layout components

export type { ColorfulIframeProps } from './components/colorful-iframe';
export { default as ColorfulIframe } from './components/colorful-iframe';

export type { ColorfulContainerProps } from './components/colorful-container';
export { default as ColorfulContainer } from './components/colorful-container';

export type { ColorfulContainerCellProps } from './components/colorful-container-cell';
export { default as ColorfulContainerCell } from './components/colorful-container-cell';

export { default as ColorfulCard } from './components/colorful-card';

export type { ColorfulTabProps } from './components/colorful-tab';
export { default as ColorfulTab } from './components/colorful-tab';
export { default as ColorfulTabPane } from './components/colorful-tab-pane';

export type { ColorfulLinkBoxProps } from './components/colorful-link-box';
export { default as ColorfulLinkBox } from './components/colorful-link-box';

export { default as ColorfulDrawer } from './components/colorful-drawer';

export type { ColorfulLinkProps } from './components/colorful-link';
export { default as ColorfulLink } from './components/colorful-link';

const bizCssPrefix = 'bizpack';

export { bizCssPrefix };
