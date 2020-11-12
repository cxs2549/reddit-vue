<template>
    <div id="trending">
        <div class="flex justify-between pb-2 mx-5 text-xl font-semibold md:mx-0 heading">
            <div>
                Trending today
            </div>
            <span class="self-end mr-1 text-sm font-semibold">See all</span>
        </div>
        <div class="cards">
            <div v-for="card in cards" :key="card" class="relative card">
                <img :src="card.image" alt="" />
                <div class="absolute bottom-0 flex items-start overlay">
                    <div class="flex items-center">
                        <img :src="card.reddit" class="" alt="" />
                        <span class="font-semibold">r/{{ card.subreddit }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cards() {
            return this.$store.state.cards
        },
    },
}
</script>

<style lang="scss">
#trending {
    z-index: -2;
    grid-area: trend;
    min-width: 375px;
    .heading {
        color: var(--text-color);
    }
    .cards {
        display: flex;
        overflow-x: scroll;
        .card {
            min-width: 175px;
            border-radius: 8px;
            min-width: 295px;
            height: 180px;
            margin-right: 1.5rem;
            @include lg {
                min-width: 23%;
            }
            .overlay {
                cursor: pointer;
                height: 100%;
                width: 100%;
                font-weight: 500;
                border-radius: 8px;
                background: rgba(0, 0, 0, 0.2);
                color: whitesmoke;
                img {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    padding: 0.5rem;
                }
            }
            img {
                border-radius: 8px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
            &:first-child {
                margin-left: $margin;
                @include lg {
                    margin-left: 0;
                }
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
