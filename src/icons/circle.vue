
  <template>
    <svg
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" :stroke="color" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
    >
      <path d="M20 2V22H4V2H12H20Z"></path><path d="M14 9.5H16"></path><path d="M8 9.5H10"></path><path d="M11 10.5C11.5523 10.5 12 10.0523 12 9.5C12 8.94772 11.5523 8.5 11 8.5C10.4477 8.5 10 8.94772 10 9.5C10 10.0523 10.4477 10.5 11 10.5Z"></path><path d="M8 14.5H10"></path><path d="M14 14.5L16 14.5"></path><path d="M13 15.5C13.5523 15.5 14 15.0523 14 14.5C14 13.9477 13.5523 13.5 13 13.5C12.4477 13.5 12 13.9477 12 14.5C12 15.0523 12.4477 15.5 13 15.5Z"></path>
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
