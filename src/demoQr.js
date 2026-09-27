import DemoQr from './pages/DemoQr.svelte';
import { mount } from 'svelte';

const app = mount(DemoQr, {
  target: document.getElementById('app'),
});

export default app;
