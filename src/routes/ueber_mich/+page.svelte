<script>
  import SectionWrapper from "../../components/SectionWrapper.svelte";
  import { onMount, tick } from "svelte";
  import { base } from "$app/paths";

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { SplitText } = await import("gsap/SplitText");
    await tick();

    gsap.registerPlugin(SplitText);

    gsap.from("#page", {
      autoAlpha: 0,
      duration: 0.5,
      ease: "expo.out",
    });

    const text = new SplitText(".satz", {
      type: "lines",
      lineClass: "line",
      autoSplit: true,
      mask: "lines",
    });

    gsap.from(text.lines, {
      yPercent: 200,
      autoAlpha: 0,
      /* transformOrigin: "center bottom", */
      stagger: {
        each: 0.08,
        from: "start",
      },
    });
  });
</script>

<svelte:head>
  <title>Über mich – Sandra Fotostudio</title>
  <meta
    name="description"
    content="Lerne Sandra kennen – Fotografin mit Leidenschaft und einem Auge fürs Detail."
  />
</svelte:head>

<main>
  <SectionWrapper>
    <div
      id="page"
      class="relative bg-dark-overlay flex flex-col md:flex-row items-center gap-8 p-8 overflow-hidden"
    >
      <img
        src="{base}/assets/lens.webp"
        alt="Sfondo Fotografia - Sandra Fotografin"
        class="absolute inset-0 object-cover w-full h-full z-[-1]"
        loading="eager"
      />
      <div class="flex-1 z-10 flex justify-center items-center">
        <img
          src="{base}/assets/sandra.webp"
          class="w-full max-w-md rounded-lg shadow-lg"
          alt="Sandra"
        />
      </div>
      <div class="flex-1 z-10 text-white lg:mr-30">
        <h1
          class="text-6xl md:text-8xl lg:text-10xl font-extralight mb-4 titel"
        >
          Hallo, ich bin Sandra!
        </h1>

        <p
          class="satz mb-4 font-extralight tracking-widest text-xl md:text-2xl lg:text-4x"
        >
          Ich liebe es, besondere Momente mit meiner Kamera festzuhalten. Ob
          Hochzeit, Familienfotos oder kreative Portraits. Ich erzähle
          Geschichten mit Licht und Emotion.
        </p>

        <div class="mt-10">
          <a
            class="text-white tracking-widest text-lg md:text-xl lg:text-2xl bg-transparent rounded border border-[#B8860B] active:scale-[0.95] hover:bg-[#B8860B] transition duration-200 p-4 cursor-pointer shadow-xl cursor-pointer"
            href="{base}/kontakt">Termin Buchen</a
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 bg-white w-full">
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 pt-4 md:px-10 pt-10 lg:px-20 pt-20"
      >
        <div class="flex flex-col mx.auto w-full bg-black p-4 md:p-10 lg:p-20">
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a
            odit doloribus ipsam praesentium delectus enim alias, eaque et quis
            accusamus at voluptatem rem quia, sequi provident placeat, vero
            quos! Ipsa eius sit a alias ducimus, deleniti vitae culpa eligendi
            obcaecati, unde eaque nihil dolores est reiciendis cum. Laborum
            mollitia, dolor dolorum animi aut ducimus sed maxime tenetur
            aspernatur modi illum vel omnis culpa obcaecati.
          </p>
        </div>
        <div
          class="flex flex-col mx.auto w-full bg-gray-200 p-4 md:p-10 lg:p-20"
        >
          <p class="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae nesciunt harum hic! Quia nostrum ipsam molestias vel sunt.
            Quaerat, saepe alias culpa aliquid aperiam sequi maxime iusto
            laborum? Nemo doloribus a quod. Corrupti deleniti ex ipsum facere
            dolores eum expedita praesentium beatae reprehenderit officia vitae
            at numquam, iure tempora, eos animi consequuntur dignissimos! Magnam
            et quia eum explicabo nulla, rem architecto sunt sequi.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 px-4 pb-4 md:px-10 pb-10 lg:px-20 pb-20"
      >
        <div
          class="flex flex-col mx.auto w-full bg-gray-200 p-4 md:p-10 lg:p-20"
        >
          <p class="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a
            odit doloribus ipsam praesentium delectus enim alias, eaque et quis
            accusamus at voluptatem rem quia, sequi provident placeat, vero
            quos! Ipsa eius sit a alias ducimus, deleniti vitae culpa eligendi
            obcaecati, unde eaque nihil dolores est reiciendis cum. Laborum
            mollitia, dolor dolorum animi aut ducimus sed maxime tenetur
            aspernatur modi illum vel omnis culpa obcaecati.
          </p>
        </div>
        <div class="flex flex-col mx.auto w-full bg-black p-4 md:p-10 lg:p-20">
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestiae nesciunt harum hic! Quia nostrum ipsam molestias vel sunt.
            Quaerat, saepe alias culpa aliquid aperiam sequi maxime iusto
            laborum? Nemo doloribus a quod. Corrupti deleniti ex ipsum facere
            dolores eum expedita praesentium beatae reprehenderit officia vitae
            at numquam, iure tempora, eos animi consequuntur dignissimos! Magnam
            et quia eum explicabo nulla, rem architecto sunt sequi.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>

<style>
  .titel {
    font-family: "MS Madi";
  }

  .bg-dark-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
</style>
