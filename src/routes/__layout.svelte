<script lang="ts">
    import "../global.css"
    import { index } from "$lib/stores"
</script>

<main>
    <nav>
        <button on:click={ () => $index = 0 }>1</button>
        <button on:click={ () => $index = 1 }>2</button>
        <button on:click={ () => $index = 2 }>3</button>
        <button on:click={ () => $index = 3 }>4</button>
        <button on:click={ () => $index = 4 }>5</button>
        <button on:click={ () => $index = 5 }>6</button>
    </nav>
    <slot>
    </slot>
    <footer></footer>
</main>

<style lang="scss">
    main {
        display: grid;
        grid-template: max-content auto max-content / auto;
        width: 100%;
        height: 100%;
        
        nav {
            display: flex;
            width: 100%; 
            height: 85px;
            border-bottom: 1px solid var(--border-color);

            button {
                min-width: 200px;
            }
        }

        footer { 
            width: 100%;
            height: 85px;
            border-top: 1px solid var(--border-color);
        }
    }
</style>