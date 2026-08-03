import PrivacyPolicy from './lib/PrivacyPolicy.svelte';
import { mount } from 'svelte';

const app = mount(PrivacyPolicy, {
  target: document.getElementById('app'),
});

export default app;