import EventOrganisers from './pages/EventOrganisers.svelte';
import { mount } from 'svelte';

const app = mount(EventOrganisers, {
  target: document.getElementById('app'),
});

export default app;
