
import { logPages } from './api/pages'
let data = {
  userName: 'sdzz',
  password: 'Zz@123456',
  loginType: 'USERNAME'
};
logPages(data).then(res => {
})

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
 



const bizCssPrefix = 'bizpack';

export { bizCssPrefix };
