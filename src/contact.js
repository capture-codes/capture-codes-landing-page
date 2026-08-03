import Contact from './pages/Contact.svelte';
import { mount } from 'svelte';

const app = mount(Contact, {
  target: document.getElementById('app'),
});

export default app;