<script>
  import { base } from "$app/paths";

  let formData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  let isSubmitting = false;
  let submitStatus = "";

  function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;

    // Simula invio form (sostituisci con la tua logica)
    setTimeout(() => {
      isSubmitting = false;
      submitStatus = "success";

      // Reset form dopo successo
      formData = {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      };

      // Nascondi messaggio dopo 5 secondi
      setTimeout(() => {
        submitStatus = "";
      }, 5000);
    }, 2000);
  }
</script>

<svelte:head>
  <title>Kontakt - Sandra Fotostudio</title>
  <meta
    name="description"
    content="Kontaktiere Sandra für professionelle Fotoshootings und Beratung"
  />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  <!-- Hero Section -->
  <section class="relative bg-black text-white py-20 px-4">
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"
    ></div>
    <div class="relative max-w-4xl mx-auto text-center">
      <h1
        class="title text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[#B8860B] bg-clip-text text-transparent"
      >
        Kontakt
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Lass uns deine Vision zum Leben erwecken. Ich freue mich darauf, von dir
        zu hören!
      </p>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="grid lg:grid-cols-2 gap-16">
      <!-- Contact Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">
          Schreib mir eine Nachricht
        </h2>

        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                for="name"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200"
                placeholder="deine@email.com"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                for="phone"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label
                for="service"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Service
              </label>
              <select
                id="service"
                bind:value={formData.service}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200"
              >
                <option value="">Service auswählen</option>
                <option value="portrait">Portrait Shooting</option>
                <option value="wedding">Hochzeit</option>
                <option value="family">Familie</option>
                <option value="business">Business</option>
                <option value="event">Event</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nachricht *
            </label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200 resize-vertical"
              placeholder="Erzähl mir von deiner Vision..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <div class="flex items-center justify-center">
                <div
                  class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"
                ></div>
                Wird gesendet...
              </div>
            {:else}
              Nachricht senden
            {/if}
          </button>

          {#if submitStatus === "success"}
            <div
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            >
              <strong>Danke!</strong> Deine Nachricht wurde erfolgreich gesendet.
              Ich melde mich bald bei dir!
            </div>
          {/if}
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <!-- Contact Details Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Kontaktinformationen
          </h3>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center"
              >
                <i class="fas fa-envelope text-white text-lg"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">E-Mail</h4>
                <a
                  href="mailto:info@sandra-fotostudio.de"
                  class="text-[#B8860B] hover:underline"
                >
                  fotostudio-sandra@web.de
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center"
              >
                <i class="fas fa-phone text-white text-lg"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Telefon</h4>
                <a
                  href="tel:+49123456789"
                  class="text-[#B8860B] hover:underline"
                >
                  09193/689474
                </a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center"
              >
                <i class="fas fa-map-marker-alt text-white text-lg"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Adresse</h4>
                <p class="text-gray-600">
                  Oswaldweg 2<br />
                  91315 Höchstadt a. d. Aisch<br />
                  Deutschland
                </p>
              </div>
            </div>

            <!--  <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center"
              >
                <i class="fas fa-clock text-white text-lg"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Öffnungszeiten</h4>
                <p class="text-gray-600">
                  Mo-Fr: 9:00 - 18:00<br />
                  Sa: 10:00 - 16:00<br />
                  So: Nach Vereinbarung
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
