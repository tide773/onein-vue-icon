
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :stroke="color" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M3 12.003a8.885 8.885 0 013.844-7.361c.818-.573 2.209-.736 2.7 0 .817.981-.655 2.454 0 3.271 1.635 1.963 4.989-1.88 8.996 0 2.863 1.473 2.454 5.153 2.127 6.544-1.064 3.762-4.58 6.543-8.67 6.543A8.971 8.971 0 013 12.003z"></path><path d="M16.087 13.639a1.636 1.636 0 100-3.272 1.636 1.636 0 000 3.272z"></path><path d="M6.272 12.82a.818.818 0 100-1.635.818.818 0 000 1.636z"></path><path d="M8.316 16.91a.818.818 0 100-1.635.818.818 0 000 1.635z"></path><path d="M12.815 18.546a.818.818 0 100-1.636.818.818 0 000 1.636z"></path>
    </svg>
  </template>
  <script>
    import { defineComponent } from "vue";

    export default defineComponent({
      name: "OiFilter",
      props: {
        size: {
          type: Number,
          default: 16
        },
        color: {
          type: String,
          default: "currentColor"
        }
      }
    });
  </script>
