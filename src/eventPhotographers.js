import EventPhotographers from './pages/EventPhotographers.svelte';
import { mount } from 'svelte';

const app = mount(EventPhotographers, {
  target: document.getElementById('app'),
});

export default app;
