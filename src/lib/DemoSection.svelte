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
      Point your webcam at a QR code and watch Capture Codes spot it, count you
      down and take the photo — the same detection the pipeline runs over real
      event footage.
    </p>

    <ol class="demo-points">
      <li>
        <span class="point-number" aria-hidden="true">1</span>
        <span class="point-text"
          >Open the demo and allow camera access on this device.</span
        >
      </li>
      <li>
        <span class="point-number" aria-hidden="true">2</span>
        <span class="point-text"
          >Open the demo code on your phone and hold it up to the webcam.</span
        >
      </li>
      <li>
        <span class="point-number" aria-hidden="true">3</span>
        <span class="point-text"
          >Get your photo the moment the code is recognised.</span
        >
      </li>
    </ol>

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
    font-size: 0.8rem;
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

  .demo-points {
    list-style: none;
    margin: 0.5rem 0 0 0;
    padding: 0;
    display: grid;
    gap: 0.9rem;
    text-align: left;
    width: 100%;
    max-width: 560px;
  }

  .demo-points li {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
  }

  .point-number {
    flex: none;
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f5c542;
    color: #331153;
    font-weight: 700;
    font-size: 0.95rem;
  }

  .point-text {
    font-size: 1rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.9);
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
  }
</style>
