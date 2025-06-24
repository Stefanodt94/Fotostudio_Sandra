<script>
  export let image;
  export let title;
  export let description;
</script>

<div class="flex flex-col w-full">
  <div class="flex flex-col md:flex-row w-full">
    <div class="flex w-full md:w-80 lg:w-120 h-96">
      <img src={image} alt={title} class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col flex-1 p-4 bg-black/60">
      <h3
        class="text-4xl mb-2 md:text-5xl mb-2 karte text-white my-auto text-center"
      >
        {title}
      </h3>
      <div class="flex mx-auto my-auto h-[1px] w-[50%] bg-white"></div>
      <p
        class="text-white text-center text-xl text-4xl tracking-widest font-extralight my-auto mt-2"
      >
        {description}
      </p>
    </div>
  </div>
</div>
