<script lang="ts">
    export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p" = 'div';
    export let size: 's' | 'm' | 'l' | 'xl' = 'm';
    export let weight: null | 'lighter' | 'light' | 'bold' = null;
    export let color: 'rhino' | 'dove' = 'rhino';
    export let italic = false;
    export let uppercase = false;
    export let center = false;
    export let inline = false;

    $: classesToUse = [
        'typography',
        `typography--${color}`,
        size ? `typography-size--${size}` : '',
        weight && `typography-weight--${weight}`,
        italic && `typography--italic`,
        uppercase && `typography--uppercase`,
        center && `typography--center`,
        inline && `typography--inline`,
    ]
    // Filters out all the 'false' values.
    .filter(value => value)
    .join(' ');

</script>
{#if tag === 'div'}
    <div class={classesToUse}>
        <slot />
    </div>
{/if}
{#if tag === 'span'}
    <span class={classesToUse}>
        <slot />
    </span>
{/if}
{#if tag === 'h1'}
    <h1 class={classesToUse}>
        <slot />
    </h1>
{/if}
{#if tag === 'h2'}
    <h2 class={classesToUse}>
        <slot />
    </h2>
{/if}
{#if tag === 'h3'}
    <h3 class={classesToUse}>
        <slot />
    </h3>
{/if}
<style lang="scss">
    @use "../../../stylesheets/colors.scss";

    .typography {
        font-family: 'Lato', sans-serif;
        line-height: 24px;
        word-wrap: break-word;
        &.typography--rhino {
            color: colors.$rhino
        }
        &.typography--dove {
            color: colors.$dove
        }
        &.typography-size--s {
            font-size: 14px;
        }
        &.typography-size--m {
            font-size: 16px;
        }
        &.typography-size--l {
            font-size: 18px;
        }
        &.typography-size--xl {
            font-size: 24px;
        }
        &.typography-weight--bold {
            font-weight: 900;
        }
        &.typography-weight--light {
            font-weight: 300;
        }
        &.typography-weight--lighter {
            font-weight: lighter;
        }
        &.typography--uppercase {
            text-transform: uppercase;
        }
        &.typography--italic {
            font-style: italic;
        }
        &.typography--center {
            text-align: center;
        }
        &.typography--inline {
            display: inline;
        }
    }
</style>