<template>
    <div class=" prem">
        <div><i class="text-xl fa fa-shield" aria-hidden="true"></i></div>
        <div class="flex flex-col leading-4">
            <span class="font-semibold">Reddit Premium</span>
            <div class="leading-4">
                The best Reddit experience, with monthly Coins
            </div>
        </div>
        <div class="trynow">
            Try now
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.prem {
    grid-area: prem;
    display: none;
    @include md {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        background: var(--app-color);
        color: var(--text-color);
        padding: 1rem 0.75rem;
    }
    svg {
        color: #ff4500;
        font-size: 1.5rem;
        margin-right: 0.75rem;
    }
    .trynow {
        background: #ff4500;
        font-weight: 600;
        color: whitesmoke;
        text-transform: uppercase;
        white-space: nowrap;
        padding: 0.35rem .75rem;
        border-radius: 4px;
    }
}
</style>
