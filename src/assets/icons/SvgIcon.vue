<template>
    <svg class="icon">
        <use :xlink:href="`#${icon}`" />
    </svg>
</template>

<script>
export default {
    name: "SvgIcon",
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>
svg.icon {
    fill: currentColor;
    /* color: var(--icon-color); */
    height: 1.5rem;
    margin-bottom: 0.125em;
    /* margin-left: var(--gap); */
    vertical-align: middle;
    width: 1.5rem;
}
</style>
