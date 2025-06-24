<script>
  import Hero from "../components/Hero.svelte";
  import { onMount } from "svelte";
  import "aos/dist/aos.css";
  import AOS from "aos";

  onMount(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
</script>

<main class="flex flex-col">
  <Hero />
</main>
