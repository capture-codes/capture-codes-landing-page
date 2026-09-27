<script>
  // Marketing block on the landing page that links through to the interactive demo at /demo/.
  // Deliberately free of any camera or decoder code, so the home page bundle stays as it was —
  // jsqr is only loaded on the demo route itself.
</script>

<section class="demo-section" id="demo">
  <div class="demo-inner">
    <p class="demo-eyebrow">Live demo</p>
    <h2 class="demo-heading">Try it in action</h2>
    <p class="demo-lead">
      Try the web demo to see how it works. Use your webcam and a QR code to get
      a feel for the system.
    </p>

    <a class="demo-cta" href="/demo/">Open the live demo</a>

    <p class="demo-note">
      No signup, and nothing leaves your browser — the demo never uploads your
      camera feed.
    </p>
  </div>
</section>

<style>
  .demo-section {
    background:
      radial-gradient(
        120% 100% at 50% 0%,
        rgba(118, 35, 196, 0.38) 0%,
        rgba(26, 26, 46, 0) 60%
      ),
      #1a1a2e;
    color: #fff;
    padding: 4rem 1.5rem;
  }

  .demo-inner {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;
  }

  .demo-eyebrow {
    margin: 0;
    /* Section title: 3x the previous 0.8rem. */
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #f5c542;
  }

  .demo-heading {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .demo-lead {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    max-width: 620px;
  }

  .demo-cta {
    margin-top: 0.75rem;
    display: inline-block;
    padding: 0.85rem 2rem;
    border-radius: 8px;
    background: #f5c542;
    color: #331153;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .demo-cta:hover {
    background: #ffd763;
    transform: translateY(-1px);
  }

  .demo-cta:active {
    transform: translateY(0);
  }

  .demo-note {
    margin: 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.55);
  }

  @media (max-width: 560px) {
    .demo-section {
      padding: 3rem 1.25rem;
    }

    /* Keep the enlarged LIVE DEMO wordmark on a single line on small screens. */
    .demo-eyebrow {
      letter-spacing: 0.06em;
    }
  }
</style>
