<template>
    <div class="comm">
        <div class="text-lg font-semibold">Trending Communities</div>

        <div v-for="community in communities" :key="community" class="pb-2 item">
            <img class="w-8 h-8 rounded-full" :src="community.avatar" alt="" />
            <div class="flex flex-col text-xs">
                <span class="font-semibold">r/{{ community.subreddit }}</span>
                {{ community.members }} members
            </div>
            <div class="flex items-center justify-center px-6 py-2 font-semibold rounded join">
                JOIN
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            communities: [
                {
                    avatar:
                        "https://a.thumbs.redditmedia.com/SRpi-niqOxLVXV0ZTpUjqSi3xULeVsqfSV9nBTwqgC4.png",
                    subreddit: "SmashingPumpkins",
                    members: "12,645",
                },
                {
                    avatar:
                        "https://a.thumbs.redditmedia.com/ie03ps4TCIznFZvwpYSNScRC0IBBeiuclPJZLOHmn-8.png",
                    subreddit: "Hot Peppers",
                    members: "63,484",
                },
                {
                    avatar:
                        "https://b.thumbs.redditmedia.com/c8JIV8DVWJIDzs9ji-ZGZKEh6Tv0-J47z0JtVm3Tkbk.png",
                    subreddit: "fantasyfootball",
                    members: "19,966",
                },
                {
                    avatar:
                        "https://b.thumbs.redditmedia.com/Yyi4f-Cd7jOfCPzjKdMRLcgBxT1vYTw3gbji7z0uJNI.png",
                    subreddit: "MUAontheCheap",
                    members: "17,205",
                },
                {
                    avatar:
                        "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?format=pjpg&s=68c3e08c49d16ab93e504ac2ba7377283df08fc7",
                    subreddit: "politics",
                    members: "1,645,402",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.comm {
    display: none;
    grid-area: comm;
    border-radius: 4px;
    padding: 0 0.75rem;
    background: var(--app-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    @include md {
        display: grid;
        /* grid-gap: .5rem; */
        grid-template-rows: repeat(6, 1fr) 0.5rem;
        align-items: center;
    }
    .item {
        display: grid;
        grid-template-columns: 40px 120px 0.85fr;
        grid-template-rows: 40px;
        align-items: center;
    }
    .join {
        background: var(--navbtn-color);
        margin-left: 1rem;
        @include lg {
            margin-left: 2.35rem;
        }
        color: var(--navbtn-text);
    }
}
</style>
