<script>
  import { onMount } from 'svelte';
  import Footer from './Footer.svelte';
  import PieMenu from './PieMenu.svelte';

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<PieMenu />

<main class="page-wrapper">
  <div class="content-card">
    <h1 class="page-title">Privacy Policy for Capture Codes</h1>
    <p class="last-updated">Last updated: January 2025</p>

    <div class="sections">
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Capture Codes. We respect your privacy and are committed to protecting your personal data. This
          privacy policy will inform you about how we look after your personal data when you visit our website and tell
          you about your privacy rights and how the law protects you.
        </p>
      </section>

      <section>
        <h2>2. Data We Collect</h2>
        <p>
          We do not collect any personal data from our visitors. When you visit our website, you can browse without
          having to provide any personal information.
        </p>
      </section>

      <section>
        <h2>3. Use of Cookies and Tracking</h2>
        <p>
          Our website does not use cookies or any form of tracking technologies that collect personal information about
          visitors.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Links</h2>
        <p>
          Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may
          allow third parties to collect or share data about you. We do not control these third-party websites and are
          not responsible for their privacy statements.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We have put in place suitable security measures to prevent your personal data from being accidentally lost,
          used, or accessed in an unauthorized way, altered, or disclosed. However, as we do not collect personal data,
          the risk to your personal data is minimal.
        </p>
      </section>

      <section>
        <h2>6. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, such
          as the right to request access, correction, erasure, or transfer of your personal data. Since we do not collect
          any personal data, these rights may not be applicable.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new
          privacy policy on this page.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at
          <a href="mailto:hello@capturecodes.com">hello@capturecodes.com</a>.
        </p>
      </section>
    </div>
  </div>

  <Footer />
</main>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    color: #1a1a2e;
    background: #fff;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page-wrapper {
    background: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 0;
  }

  .content-card {
    width: 100%;
    max-width: 700px;
    padding: 2.5rem;
    margin: 2rem 1rem 3rem 1rem;
    box-sizing: border-box;
  }

  .page-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #7623c4;
    margin: 0 0 0.5rem 0;
  }

  .last-updated {
    font-size: 0.8rem;
    color: rgba(26, 26, 46, 0.5);
    margin: 0 0 1.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(26, 26, 46, 0.1);
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  section h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #7623c4;
  }

  section p {
    font-size: 0.95rem;
    color: rgba(26, 26, 46, 0.85);
    line-height: 1.7;
    margin: 0;
  }

  a {
    color: #7623c4;
    text-decoration: underline;
  }

  a:hover {
    color: #8b35de;
  }

  @media (max-width: 768px) {
    .content-card {
      padding: 1.5rem;
      margin: 1.5rem 1rem 2rem 1rem;
    }

    .page-title {
      font-size: 1.5rem;
    }

    section h2 {
      font-size: 1.05rem;
    }
  }
</style>