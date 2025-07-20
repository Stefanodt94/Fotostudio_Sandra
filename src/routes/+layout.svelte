<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount, tick } from "svelte";

  let lenis;

  onMount(async () => {
    await tick();
    await new Promise((r) => setTimeout(r, 50));

    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { SplitText } = await import("gsap/SplitText");
    const { default: Lenis } = await import("lenis");

    gsap.registerPlugin(ScrollTrigger, SplitText);

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<Header />

<main id="page">
  <slot />
</main>

<Footer />
