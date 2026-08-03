<script>
  import pieMenuIcon from "./assets/icons/pie-menu.svg";

  let open = $state(false);

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }
</script>

<button class="pie-menu-trigger" onclick={toggle} aria-label="Open menu">
  <img src={pieMenuIcon} alt="" />
</button>

{#if open}
  <div class="pie-menu-overlay" onclick={close} role="dialog" aria-modal="true">
    <button class="pie-menu-close" onclick={close} aria-label="Close menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="32" height="32">
        <line x1="6" y1="6" x2="18" y2="18" stroke="#fff" stroke-width="2" stroke-linecap="round" />
        <line x1="18" y1="6" x2="6" y2="18" stroke="#fff" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
    <nav class="pie-menu-nav" onclick={(e) => e.stopPropagation()}>
      <ul>
        <li><a href="/" onclick={close}>Home</a></li>
        <li><a href="/faq/" onclick={close}>FAQ</a></li>
        <li><a href="/contact/" onclick={close}>Contact</a></li>
      </ul>
    </nav>
  </div>
{/if}

<style>
  .pie-menu-trigger {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .pie-menu-trigger:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .pie-menu-trigger img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
  }

  .pie-menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(26, 26, 46, 0.97);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .pie-menu-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 10001;
  }

  .pie-menu-close:hover svg line {
    stroke: #f5c542;
  }

  .pie-menu-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .pie-menu-nav a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Merriweather Sans", sans-serif;
    letter-spacing: 0.03em;
    transition: color 0.2s;
    padding: 0.5rem 1rem;
    display: block;
  }

  .pie-menu-nav a:hover {
    color: #f5c542;
  }
</style>