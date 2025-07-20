<script>
  export let menuOpen;
  export let navRef;

  import { base } from "$app/paths";
</script>

<nav
  bind:this={navRef}
  class="absolute top-full right-0 w-3/4 max-w-xs bg-black z-50 transition-transform duration-300 transform flex flex-col p-4 gap-4 items-center"
  class:translate-x-0={menuOpen}
  class:translate-x-full={!menuOpen}
>
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="{base}/">HOME</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="{base}/ueber_mich">ÜBER MICH</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="{base}/bildergalerie">BILDERGALERIE</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="{base}/kontakt">KONTAKT</a
  >
</nav>
