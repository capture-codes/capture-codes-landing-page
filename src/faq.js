import FAQ from './pages/FAQ.svelte';
import { mount } from 'svelte';

const app = mount(FAQ, {
  target: document.getElementById('app'),
});

export default app;