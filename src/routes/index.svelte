<script lang="ts">
    import TransGrid from "$lib/TransGrid.svelte"
    import Red from "$lib/colors/Red.svelte"
    import Green from "$lib/colors/Green.svelte"
    import Blue from "$lib/colors/Blue.svelte"
    import { index } from "$lib/stores"

    const layouts = ["layout--1", "layout--2", "layout--3", "layout--4", "layout--5", "layout--6"]
    const layoutComps = {
        "layout--4": [Red, Green, Blue],
        "layout--5": [Red, Green, Blue],
        "layout--6": [Green],
        default: [Red, Green],
    }

    $: current = layouts[ $index % layouts.length ]
</script>

<TransGrid classDefault={"layout--default"} currentLayout={current}>
    {#each layoutComps[current] ?? layoutComps.default as component (component)}
        <svelte:component this={component} />
    {/each}
</TransGrid>

<style global lang="scss">
    .layout--default {
        display: grid;
        width: 100%;
        height: 100%;
    }

    .layout--1 {
        grid-template: auto / 1fr 1fr;
        grid-template-areas: "red green";
    }

    .layout--2 {
        grid-template: auto / minmax(0px, 309px) auto;
        grid-template-areas: "red green";
    }

    .layout--3 {
        grid-template: auto / minmax(0px, 880px) auto;
        grid-template-areas: "red green";
    }

    .layout--4 {
        grid-template: auto / repeat(3, 1fr);
        grid-template-areas: "red green blue";
    }

    .layout--5 {
        grid-template: 1fr 310px / minmax(0px, 353px) 1fr;
        grid-template-areas: "red red" "blue green";
    }

    .layout--6 {
        grid-template: 1fr / 1fr;
        grid-template-areas: "green";
    }
</style>