<template>
    <div class="text-xs popComm">
        <div class="flex flex-col top">
            <h1 class="flex items-center justify-between px-3 mb-4 font-bold uppercase">
                popular communities
                <i class=" fa fa-chevron-up" aria-hidden="true"></i>
            </h1>
            <section class="flex pl-3">
                <ul class="flex flex-wrap font-semibold leading-6">
                    <li class="mr-8">AskReddit</li>
                    <li class="mr-8">NoStupidQuestions</li>
                    <li class="mr-8">explainlikeimfive</li>
                    <li class="mr-8">Minecraft</li>
                    <li class="mr-8">leagueoflegends</li>
                </ul>
            </section>
        </div>
        <h3 class="px-3 mt-2 font-semibold uppercase border-b seeMore">see more</h3>
        <h2 class="flex items-center px-3 font-semibold uppercase border-b seeMore">
            <div class="flex justify-between w-full">
                gaming
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
        <h2 class="flex items-center px-3 font-semibold uppercase border-b seeMore">
            <div class="flex justify-between w-full">
                sports
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
        <h2 class="flex items-center px-3 font-semibold uppercase border-b seeMore">
            <div class="flex justify-between w-full">
                tv
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
        <h2 class="flex items-center px-3 font-semibold uppercase border-b seeMore">
            <div class="flex justify-between w-full">
                travel
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
        <h2 class="flex items-center px-3 font-semibold uppercase border-b seeMore">
            <div class="flex justify-between w-full">
                health & fitness
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
        <h2 class="flex items-center px-3 font-semibold uppercase ">
            <div class="flex justify-between w-full">
                fashion
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
        </h2>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.popComm {
    display: none;
    grid-area: popComm;
    border-radius: 4px;
    padding: 0.75rem 0;
    background: var(--app-color);
    border: 1px solid var(--border-color);
    position: relative;
    color: var(--text-color);
    svg {
        font-size: 1rem;
        color: var(--text-dim);
    }
    @include md {
        display: grid;
        grid-template-rows: 1fr repeat(7, 40px);
    }
    h2 {
        border-bottom: 1px solid var(--border-color);
        font-size: 0.7rem;
        &:first-child {
            font-size: 1rem;
        }
        &:last-child {
            border-bottom: none;
            /* padding-bottom: 4px; */
        }
    }
    h3 {
        border-bottom: 1px solid var(--border-color);
        font-size: .9rem;
    }
}
</style>
