<template>
    <div id="popbar">
        <div class="flex items-center pill">
            <svg-icon icon="fire" /> <span class="mr-2">Hot</span
            ><i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="flex items-center pill">
            <span class="mr-2">United States</span
            ><i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="items-center flex pill">
            <span class="mr-2">All States</span><i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="items-center hidden md:flex nobg text-gray-dim">
            <svg-icon icon="new" />
            <span class="mr-2">New</span>
        </div>

        <div class="items-center hidden md:flex nobg text-gray-dim">
            <svg-icon icon="top" />
            <span class="mr-2">Top</span>
        </div>

        <div class="flex items-center pill text-gray-dim">
            <svg-icon icon="card" class="text-gray-dim" /> <i class="fa fa-caret-down text-gray-dim" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#popbar {
    z-index: 0;
    grid-area: pop;
    padding: 0 0.5rem;
    width: 100%;
    max-width: 640px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--app-color);
    border-bottom: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
    @include md {
        border-radius: 4px;
    }
    .nobg {
        background: none;
        font-weight: 500;
        font-size: 0.9rem;
       
        height: 30px;
        padding: 0 6px;
        border-radius: 24px;
    }
    .pill {
        background: var(--pill-color);
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--pill-text);
        cursor: pointer;
        height: 30px;
        padding: 8px 8px;
        border-radius: 24px;
        svg {
            margin-right: 0.2rem;
        }
      
    }
}
</style>
