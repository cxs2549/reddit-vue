<template>
    <div id="sidebar">
        <div class="flex font-bold header">
            <div class="flex items-end p-2 text-xl text-white capitalize heading">
                top aww communities
            </div>
        </div>

        <div v-for="tab in tabs" :key="tab.id" class="flex items-center w-full h-full tab">
            <div class="mr-2">{{ tab.id }}</div>
            <div class="mr-2">
                <i class=" fa fa-caret-up" aria-hidden="true"></i>
            </div>
            <img class="w-8 mr-2 rounded-full" :src="tab.avatar" alt="" />
            <span class="font-semibold">r/{{ tab.subreddit }}</span>
        </div>

        <div class="block mx-auto ">
            <button class="w-64 py-2 mt-6 font-semibold uppercase border rounded viewAll">
                view all
            </button>
        </div>

        <div class="flex justify-between pb-2 mx-4 tags">
            <div class="p-2 tag">
                Near You
            </div>
            <div class="p-2 tag">
                Sports
            </div>
            <div class="p-2 tag">
                News
            </div>
            <div class="p-2 tag">
                Gaming
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    avatar:
                        "https://styles.redditmedia.com/t5_324zi/styles/communityIcon_3eg4q9dlq1831.jpg?format=pjpg&s=1900c8fd4322192dd4fe171f01b100db5df59016",
                    subreddit: "natureismetal",
                },
                {
                    id: 2,
                    avatar:
                        "https://styles.redditmedia.com/t5_3gdh7/styles/communityIcon_pm39k02ckws01.png",
                    subreddit: "NatureIsFuckingLit",
                },
                {
                    id: 3,
                    avatar:
                        "https://b.thumbs.redditmedia.com/fy5ONa0GmECoSz_z4v28hBx2wJndO5ZM6NnLVhaHPRs.png",
                    subreddit: "AnimalsBeingDerps",
                },
                {
                    id: 4,
                    avatar:
                        "https://b.thumbs.redditmedia.com/MD9KQJnI4uIuXFUzA3DWabdGKJYceQ1uk2_ktRQXcgY.png",
                    subreddit: "Eyebleach",
                },
                {
                    id: 5,
                    avatar:
                        "https://styles.redditmedia.com/t5_3gdh7/styles/communityIcon_pm39k02ckws01.png",
                    subreddit: "WhatsWrongWithYourDog",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#sidebar {
    grid-area: side;
    background: var(--app-color);
    border-radius: 4px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border: 1px solid var(--border-color);
    display: none;
    color: var(--text-color);
    @include md {
        display: grid;
        align-items: center;
        grid-template-rows: 23% repeat(6, 60px) 45px;
    }
    .header {
        background-image: url("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
        background-size: cover;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        background-position: top;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr;
    }
    .heading {
        background: rgba(0, 0, 0, 0.5);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .tab {
        padding: 0 1.25rem;
        cursor: pointer;
        border-bottom: 1px solid var(--border-color);
        svg {
            color: rgb(42, 186, 42);
        }
        &:nth-child(6) {
            border-bottom: none;
        }
    }
    .viewAll {
        background: var(--navbtn-color);
        color: var(--navbtn-text);
        margin-bottom: 2rem;
    }
    .tags {
        display: flex;
    }
    .tag {
        background: var(--pill-color);
        cursor: pointer;
        font-size: .8rem;
        font-weight: 500;
        color: var(--pill-text);
        width: auto;
        border-radius: 4px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        margin-bottom: 0.75rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
