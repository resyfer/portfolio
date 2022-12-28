<script lang="ts">
  import Icon from '@iconify/svelte';

  export let text: string;
  export let href: string;
</script>

<a {href} target="_blank" rel="noreferrer">
  {text} <Icon icon="ri:external-link-line" inline={true} />
</a>

<style>
  a {
    background-color: var(--theme-4-100);
    color: var(--theme-1-100);
    width: fit-content;
    padding: 0.5vh 1vh;
    border-radius: 10vh;
    border: 0.2vh solid var(--invisible);
    text-decoration: none;
    transition: 0.25s ease-in-out;
    margin: 0.5vh;
  }

  a:hover {
    color: var(--theme-2-100);
    background-color: var(--theme-3-100);
    border: 0.2vh solid var(--theme-2-100);
  }
</style>