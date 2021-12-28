
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :stroke="color" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M20 2v20H4V2h16z"></path><path d="M14 9.5h2"></path><path d="M8 9.5h2"></path><path d="M11 10.5a1 1 0 100-2 1 1 0 000 2z"></path><path d="M8 14.5h2"></path><path d="M14 14.5h2"></path><path d="M13 15.5a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  </template>
  <script>
    import { defineComponent } from "vue";

    export default defineComponent({
      name: "OiCircle",
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
