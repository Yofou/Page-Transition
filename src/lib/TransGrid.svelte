<script lang="ts">
    import { flip_grid } from "$lib/flip-grid"
    
    export let classDefault: string = ""
    export let currentLayout: string = ""
</script>

<section use:flip_grid={{}} class="{classDefault} {currentLayout}">
    <slot />
</section>
