<script>
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";
  import MobilNav from "./MobilNav.svelte";
  import { browser } from "$app/environment";
  import { base } from "$app/paths";

  let menuOpen = false;
  let navRef;

  function toggleMenu(event) {
    event.stopPropagation(); // Impedisce la propagazione dell'evento
    menuOpen = !menuOpen;
    console.log("toggle menu chiamato", menuOpen);
  }

  function handleClickOutside(event) {
    if (menuOpen && navRef && !navRef.contains(event.target)) {
      menuOpen = false;
      console.log("Menu chiuso da click esterno");
    }
  }

  onMount(() => {
    if (browser) {
      document.addEventListener("click", handleClickOutside);
      console.log("Event listener aggiunto");
    }
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener("click", handleClickOutside);
      console.log("Event listener rimosso");
    }
  });
</script>

<header class="flex flex-col relative z-20 shadow-2xl">
  <div class="flex w-full items-center justify-between p-4 py-6 bg-black">
    <img
      src="{base}/assets/logo_sandra.svg"
      alt="fotostudio-logo"
      class="w-60 h-auto"
    />

    <button
      on:click={toggleMenu}
      aria-label="menu-button"
      class="md:hidden grid place-items-center hover:text-[#B8860B] transition-colors duration-200 active:scale-[0.95] transition duration-50"
    >
      <i
        class="fa-solid fa-bars text-white hover:text-[#B8860B] transition-colors duration-200"
      ></i>
    </button>

    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
      <a
        href="{base}/"
        class="duration-200 hover:text-[#B8860B] cursor-pointer active:scale-[0.95] transition duration-50"
        class:text-[#B8860B]={$page.url.pathname === `${base}/`}
        class:text-white={$page.url.pathname !== `${base}/`}>HOME</a
      >
      <a
        href="{base}/ueber_mich"
        class="duration-200 hover:text-[#B8860B] cursor-pointer active:scale-[0.95] transition duration-50"
        class:text-[#B8860B]={$page.url.pathname === `${base}/ueber_mich`}
        class:text-white={$page.url.pathname !== `${base}/ueber_mich`}
        >ÜBER MICH</a
      >
      <a
        href="{base}/bildergalerie"
        class="duration-200 hover:text-[#B8860B] cursor-pointer active:scale-[0.95] transition duration-50"
        class:text-[#B8860B]={$page.url.pathname === `${base}/bildergalerie`}
        class:text-white={$page.url.pathname !== `${base}/bildergalerie`}
        >BILDERGALERIE</a
      >
      <a
        href="{base}/kontakt"
        class="duration-200 hover:text-[#B8860B] cursor-pointer active:scale-[0.95] transition duration-50"
        class:text-[#B8860B]={$page.url.pathname === `${base}/kontakt`}
        class:text-white={$page.url.pathname !== `${base}/kontakt`}>KONTAKT</a
      >
    </nav>
  </div>

  <MobilNav {menuOpen} bind:navRef />
</header>
