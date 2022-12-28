<script lang="ts">
  export let text: string;
  export let href = "#";
  export let className: string = "";
</script>

<a {href} class={className}>{text}</a>

<style scoped>
  a {
    color: var(--theme-1-100);
    transition: 0.2s ease-in-out;
    text-decoration: none;
    padding: 1.5vh 3vh;
    border-radius: 0.75vh;
    text-transform: uppercase;
    border-bottom: 0.5vh solid var(--invisible);
  }

  a:hover {
    background-color: var(--theme-3-100);
    color: var(--theme-2-100);
    border-bottom: 0.5vh solid var(--theme-2-100);
  }
</style>