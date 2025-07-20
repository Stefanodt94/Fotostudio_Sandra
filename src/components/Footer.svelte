<script>
  import { base } from "$app/paths";
</script>

<footer>
  <div
    class="flex flex-col mx-auto items-center md:justify-evenly md:flex-row bg-black w-full p-10 gap-10"
  >
    <div class="flex flex-col text-center">
      <a
        class="text-white text-extralight tracking-widest hover:text-[#B8860B] transition duration-200"
        href="{base}/">Impressum</a
      >
      <a
        class="text-white text-extralight tracking-widest hover:text-[#B8860B] transition duration-200"
        href="{base}/">Datenschutz und AGB</a
      >
    </div>
    <div class="flex flex-col text-white md:ml-10">
      <p>© 2025 Fotostudio Sandra</p>
      <p>Alle Rechte vorbehalten</p>
    </div>
    <div class="flex flex-row md:ml-10 gap-10 py-4">
      <i
        class="fa-brands fa-square-facebook fa-2xl text-white/90 hover:text-[#B8860B] transition duration-200 cursor-pointer"
      ></i>
      <i
        class="fa-brands fa-instagram fa-2xl text-white/90 hover:text-[#B8860B] transition duration-200 cursor-pointer"
      ></i>
      <i
        class="fa-brands fa-linkedin fa-2xl text-white/90 hover:text-[#B8860B] transition duration-200 cursor-pointer"
      ></i>
    </div>
  </div>
</footer>
