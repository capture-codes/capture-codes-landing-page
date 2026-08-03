import TermsWebsite from './lib/TermsWebsite.svelte';
import { mount } from 'svelte';

const app = mount(TermsWebsite, {
  target: document.getElementById('app'),
});

export default app;