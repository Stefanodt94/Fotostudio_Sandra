<script>
  import Header from "../../components/Header.svelte";
  import SectionWrapper from "../../components/SectionWrapper.svelte";
  import Footer from "../../components/Footer.svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<main>
  <SectionWrapper>
    <Header />
    <div
      class="flex flex-col flex-1 bg-cover bg-center"
      style="background-image: url('/assets/bg3.png')"
    >
      <div class="flex flex-col flex-1">
        {#if visible}
          <h2
            in:fly={{ y: -100, duration: 1500 }}
            class="text-white text-3xl md:text-4xl lg:text-6xl text-center tracking-widest schrift p-10 mt-5 md:mt-8 lg:mt10"
          >
            KONTAKT
          </h2>
        {/if}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-16 md:px-10">
        {#if visible}
          <div
            in:fly={{ x: -100, duration: 1500 }}
            class="flex flex-col items-start justify-center gap-8 p-4 md:p-16 lg:p-20 border-white border rounded-md"
          >
            <span
              class="text-white text-center tracking-widest text-xl md:text-2xl lg:text-3xl schrift"
              >Der Termin kann nach Vereinbarung festgelegt werden. Ich freue
              mich darauf, Ihre Vorstellungen und Wünsche in einem persönlichen
              Gespräch kennenzulernen.
            </span>
            <br />
            <div
              class="flex flex-col items-center gap-6 p-10 text-white pt-2 text-xl md:text-2xl lg:text-3xl schrift"
            >
              <div class="flex items-center gap-10">
                <i class="fa-solid fa-phone-volume"></i>
                <span>Tel. 09193 / 689474</span>
              </div>
              <div class="flex items-center gap-10">
                <i class="fa-solid fa-paper-plane"></i>
                <span>fotostudio-sandra@web.de</span>
              </div>
              <div class="flex items-center gap-10">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>
                  Oswaldweg 2<br />
                  91315 Höchstadt an der Aisch
                </span>
              </div>
            </div>
            <br />
          </div>
        {/if}
        {#if visible}
          <div in:fly={{ x: 100, duration: 1500 }} class="flex justify-center">
            <form
              class="bg-white p-10 rounded-lg shadow-md w-full max-w-3xl space-y-6"
              method="post"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-800">Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="mt-1 w-full border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-800">Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="mt-1 w-full border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-800"
                  >Nachricht</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  required
                  class="mt-1 w-full border border-gray-300 rounded-md p-3 text-black resize-none focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-black text-white py-3 rounded-md hover:bg-[#B8860B] transition active:scale-[0.98] transition duration-100"
              >
                Senden
              </button>
            </form>
          </div>
        {/if}
      </div>
      <Footer />
    </div></SectionWrapper
  >
</main>

<style>
  .schrift {
    font-weight: 300;
  }
</style>
