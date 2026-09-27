import Demo from './pages/Demo.svelte';
import { mount } from 'svelte';

const app = mount(Demo, {
  target: document.getElementById('app'),
});

export default app;
