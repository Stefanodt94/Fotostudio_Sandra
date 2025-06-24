<script>
  export let menuOpen;
</script>

<nav
  class="absolute top-full right-0 w-3/4 max-w-xs bg-black z-50 transition-transform duration-300 transform flex flex-col p-4 gap-4 items-center"
  class:translate-x-0={menuOpen}
  class:translate-x-full={!menuOpen}
>
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="/">HOME</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="/ueber_mich">ÜBER MICH</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="/bildergalerie">BILDERGALERIE</a
  >
  <a
    class="text-white hover:text-[#B8860B] p-4 active:scale-[0.95] transition duration-50"
    href="/kontakt">KONTAKT</a
  >
</nav>
