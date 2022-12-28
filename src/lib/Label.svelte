<script lang="ts">
  export let text;
</script>

<div>
  {text}
</div>

<style scoped>
  div {
    background-color: var(--theme-3-100);
    color: var(--theme-2-100);
    width: fit-content;
    padding: 0.5vh 1vh;
    border-radius: 10vh;
    border: 0.2vh solid var(--theme-1-100);
    margin: 0.2vh 0.3vh;
  }
</style>