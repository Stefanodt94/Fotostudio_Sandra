<script>
  import SectionWrapper from "../../components/SectionWrapper.svelte";
  import { images } from "$lib/image";
  import { onMount, tick } from "svelte";
  import { base } from "$app/paths";

  onMount(async () => {
    const { gsap } = await import("gsap");
    await tick();

    gsap.from("#page", {
      autoAlpha: 0,
      duration: 0.5,
      ease: "expo.out",
    });
  });

  let selectedImage = null;

  const openImage = (img) => {
    selectedImage = img;
  };

  const closeImage = () => {
    selectedImage = null;
  };

  const handleKey = (event) => {
    if (event.key === "Escape") {
      closeImage();
    }
  };
</script>

<svelte:window on:keydown={handleKey} />

<main>
  <SectionWrapper>
    <div class="h-5"></div>

    <div
      id="page"
      class="bildergalerie columns-2 md:columns-3 lg:columns-4 gap-4 px-4 md:px-15"
    >
      {#each images as img, i}
        <button
          type="button"
          class="w-full overflow-hidden rounded shadow-lg mb-4 cursor-pointer border-0 bg-transparent p-0 hover:scale-105 transition-transform duration-300"
          on:click={() => openImage(img.src)}
          aria-label="Open Bild {i + 1}"
        >
          <img
            src="{base}{img.src}"
            alt={`Bild ${i + 1}`}
            class="w-full rounded shadow-lg"
            loading="eager"
          />
        </button>
      {/each}
    </div>

    <div class="flex flex-col flex-1 p-10">
      <span
        class="text-center text-gray-600 font-light text-lg md:text-xl lg:text-2xl"
        >Weitere Bilder auf Facebook <br />-<a
          href="https://www.facebook.com/fotostudio.sandraSeibert"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-[#B8860B]">Fotostudio Sandra</a
        >-</span
      >
    </div>

    <div class="h-6"></div>
  </SectionWrapper>
</main>

{#if selectedImage}
  <div
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    on:click={closeImage}
    role="dialog"
    aria-modal="true"
    tabindex="0"
    on:keydown={handleKey}
  >
    <!-- Questo blocca la chiusura cliccando dentro -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div on:click|stopPropagation class="relative">
      <button
        on:click={closeImage}
        class="absolute top-2 right-2 text-white text-xl"
        aria-label="Schließe"
      >
        ✕
      </button>

      <img
        src={selectedImage}
        alt="Immagine"
        class="max-w-[90vw] max-h-[90vh] border-4 border-white rounded"
      />
    </div>
  </div>
{/if}
