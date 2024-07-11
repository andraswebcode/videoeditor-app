import { createPinia } from 'pinia';
import useUser from './user';
import useEditor from './editor';

export default createPinia();
export { useUser, useEditor };
