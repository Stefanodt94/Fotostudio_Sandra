<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import Card from "./Card.svelte";
  import { angebote } from "$lib/angebote";
  import { leistungen } from "$lib/angebote";
  import { onMount, tick } from "svelte";
  import { base } from "$app/paths";

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { SplitText } = await import("gsap/SplitText");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    await tick();

    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".sandra", {
      type: "lines, words, chars",
    });

    gsap.from("#page", {
      autoAlpha: 0,
      duration: 0.5,
      ease: "expo.out",
    });

    gsap.from(split.chars, {
      autoAlpha: 0,
      duration: 0.8,
      ease: "expo.out",
      scale: 4,
      scrollTrigger: {
        trigger: ".sandra",
        start: "top bottom",
        once: true,
      },
      stagger: {
        each: 0.06,
        from: "start",
      },
    });
  });
</script>

<svelte:head>
  <title>Sandra Fotostudio – Emotionale Fotografie für besondere Momente</title>
  <meta
    name="description"
    content="Sandra Fotostudio – Professionelle Fotografie für Hochzeiten, Porträts, Familien und mehr. Buche jetzt dein Fotoshooting in Höchstadt und Umgebung."
  />
</svelte:head>

<div class="flex flex-col h-[100dvh] w-full">
  <SectionWrapper>
    <div id="page" class="flex flex-col flex-1 mx-auto w-full pb-10 md:pb-14">
      <div
        class="relative flex flex-col flex-1 mx-auto h-[40vh] sm:h-[50vh] md:min-h-64 lg:h-auto w-full items-center justify-center backdrop-blur-sm overflow-hidden"
      >
        <img
          src="{base}/assets/camera.webp"
          alt="Camera Background"
          class="bild absolute inset-0 object-cover w-full h-full z-[-1]"
          loading="eager"
        />

        <div
          class="flex flex-col justify-center bg-black/70 border-2 border-white rounded w-11/12 sm:w-3/4 md:w-1/2 h-[50vh] mx-auto shadow-lg p-4"
        >
          <span class="flex flex-col flex-1 justify-center mx-auto">
            <h1
              class="text-white text-3xl md:text-4xl lg:text-6xl text-center justify-center tracking-widest überschrift"
            >
              Fotostudio<br /><span class="block mt-10">Sandra</span>
            </h1>
          </span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</div>
<SectionWrapper>
  <div class="flex flex-col mx-auto w-full h-[50dvh] pb-16 pt-12">
    <h2
      class="sandra text-black text-4xl md:text-5xl lg:text-7xl text-center tracking-widest font-extralight m-auto"
    >
      Sandra Seibert<br /><span
        class="text-black text-xl md:text-2xl lg:text-3xl mx-auto"
        >Fotografin</span
      >
    </h2>
  </div>
  <div
    class="flex flex-col mx-auto w-full justify-center items-center shadow-inner pt-15 pb-5 md:pt-20 pb-20 lg:pt-30 pb-30 bg-cover bg-center"
    style="background-image: url({base}/assets/bg3.png)"
  >
    <h3
      class="text-white text-6xl md:text-8xl lg:10xl text-center p-4 erinnerung"
    >
      Jede Erinnerung ist <span class="wertvoll text-[#B8860B]">wertvoll</span
      ><span class="dots">...</span>
    </h3>
    <p
      class="text-white text-center font-light text-2xl md:4xl lg:6xl tracking-widest p-4"
    >
      darum sollte man die schönsten Momente festhalten!
    </p>

    <div class="flex flex-col p-4 lg:px-40 mt-20 mx-auto w-full max-w-[2000px]">
      <div class="flex flex-col md:flex-row flex-wrap gap-10 justify-center">
        {#each angebote as angebot}
          <Card
            image="{base}{angebot.image}"
            title={angebot.title}
            description={angebot.description}
            class="flex-1 w-full md:w-96"
          />
        {/each}
      </div>
    </div>
    <a
      class="my-auto text-white tracking-widest text-lg md:text-xl lg:text-2xl bg-transparent rounded border border-[#B8860B] hover:bg-[#B8860B] active:scale-[0.95] transition duration-100 p-4 cursor-pointer shadow-xl hover:shadow-2xl cursor-pointer mt-[5%]"
      href="{base}/bildergalerie">Zur Bildergalerie</a
    >
  </div>
  <div class="flex flex-col flex-1 items-center">
    <h4
      class="text-[#B8860B] font-extralight tracking-widest text-2xl pb-10 md:text-4xl pt-15 lg:text-6xl pt-25 pb-25 text-center"
    >
      WEITERE LEISTUNGEN
    </h4>
  </div>
  <div
    class="flex flex-col mx-auto w-full items-center bg-center bg-cover py-20"
    style="background-image: url('{base}/assets/background.png')"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 p-6"
    >
      {#each leistungen as leistung}
        <button
          class="flex flex-col mx-auto border-white border rounded min-w-[300px] lg:w-96 p-10 transition duration-200 hover:scale-[1.05] hover:shadow-2xl hover:bg-white/10 cursor-pointer"
        >
          <p
            class="text-white tracking-widest font-extralight tetx-lg md:text-xl lg:text-2xl text-center"
          >
            {leistung.name}
          </p>
        </button>
      {/each}
    </div>
    <div class="flex flex-col py-10">
      <a
        class="text-white text-lg md:text-xl lg:text-2xl bg-transparent rounded border border-[#B8860B] hover:bg-[#B8860B] active:scale-[0.95] transition duration-200 p-4 cursor-pointer shadow-xl hover:shadow-2xl"
        href="{base}/kontakt"
        ><i class="fa-solid fa-phone pl-2 pr-2"></i>Termin vereinbaren</a
      >
    </div>
    <span class="text-white text-l md:text-xl lg:text-2xl p-10 text-center"
      >HINWEIS: Aufgrund der neuen Passbildverordnung ab 1. Mai 2025 werden
      <strong>keine</strong> biometrischen Passbilder für Personalausweis und Reisepass
      mehr angeboten.</span
    >
  </div>
</SectionWrapper>

<style>
</style>
