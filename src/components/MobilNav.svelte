<script>
  export let menuOpen;
  export let navRef;
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  console.log("MobilNav: menuOpen =", menuOpen);

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav
  bind:this={navRef}
  id="mobile-nav"
  class="absolute top-full right-0 w-3/4 max-w-xs bg-black z-50 flex flex-col p-4 gap-4 items-center transition-transform duration-300 ease-in-out"
  class:translate-x-0={menuOpen}
  class:translate-x-full={!menuOpen}
>
  <a
    href="{base}/"
    on:click={closeMenu}
    class="text-white hover:text-[#B8860B] active:scale-95 py-4 transition-all duration-200"
    class:text-[#B8860B]={$page.url.pathname === `${base}/`}>HOME</a
  >
  <a
    href="{base}/ueber_mich"
    on:click={closeMenu}
    class="text-white hover:text-[#B8860B] active:scale-95 py-4 transition-all duration-200"
    class:text-[#B8860B]={$page.url.pathname === `${base}/ueber_mich`}
    >ÜBER MICH</a
  >
  <a
    href="{base}/bildergalerie"
    on:click={closeMenu}
    class="text-white hover:text-[#B8860B] active:scale-95 py-4 transition-all duration-200"
    class:text-[#B8860B]={$page.url.pathname === `${base}/bildergalerie`}
    >BILDERGALERIE</a
  >
  <a
    href="{base}/kontakt"
    on:click={closeMenu}
    class="text-white hover:text-[#B8860B] active:scale-95 py-4 transition-all duration-200"
    class:text-[#B8860B]={$page.url.pathname === `${base}/kontakt`}>KONTAKT</a
  >
</nav>
