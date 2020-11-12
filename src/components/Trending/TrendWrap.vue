<template>
    <div class="trend-wrap">
        <trending />
    </div>
</template>

<script>
import Trending from "./Trending"
export default {
    components: { Trending },
}
</script>

<style lang='scss'>
.trend-wrap {
    grid-area: trend;
    overflow-x: auto;
    min-width: 375px;
    @include md {
        width: 100%;
    }
}
</style>
