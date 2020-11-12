<template>
    <div id="post">
        <div class="flex justify-between text-xs source">
            <div class="flex">
                <img
                    class="w-6 h-6 mr-1 rounded-full"
                    src="https://styles.redditmedia.com/t5_2ro2c/styles/communityIcon_zfvfsg5v3rn41.png"
                    alt=""
                />
                <span class="font-semibold reddit">r/{{ source }}</span>
            </div>

            <div class="flex">
                <div class="mr-2 author">
                    Posted by u/<span>{{ author }}</span>
                </div>
                <div>{{ created }} ago</div>
            </div>
        </div>
        <div class="flex items-center ml-6 text-xs special-votes text-gray-dim">
            <div class="flex items-center mr-1">
                <img
                    class="w-4 mr-1"
                    src="https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=32&height=32&crop=smart&auto=webp&s=90be8e434ed8946ec1d3e2546e5fffcc71cd657d"
                    alt=""
                />
                36
            </div>
            <div class="flex items-center mr-1">
                <img
                    class="w-4 mr-1"
                    src="https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&height=32&crop=smart&auto=webp&s=e50908c50d797edd935ba8b5d9f0fb1372ff0bae"
                    alt=""
                />
                36
            </div>
            <div class="flex items-center mr-1">
                <img
                    class="w-4 mr-1"
                    src="https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&height=32&crop=smart&auto=webp&s=b3267c9d510c7b06dda6ec7d53cb587b9e822e44"
                    alt=""
                />
                36
            </div>
            <div class="flex items-center mr-1">
                <img
                    class="w-4 mr-1"
                    src="https://www.redditstatic.com/gold/awards/icon/silver_32.png"
                    alt=""
                />
                36
            </div>
            <div>& 87 More</div>
            <button class="mb-1 ml-auto font-semibold uppercase text-md">
                <i class="fa fa-plus" aria-hidden="true"></i> Join
            </button>
        </div>
        <div class="text-xl font-semibold title">
            {{ title }}
        </div>
        <div>
            <img class="mx-auto my-2 rounded" :src="image" alt="" />
        </div>
        <div class="flex text-xs">
            <div class="flex mr-4 vote">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <div>
                    9.4k
                </div>
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
            <div class="flex items-center mr-4 comments">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <div class="mr-4">321 comments</div>
                <div class="flex items-center ">
                    <i
                        class="fill-current fa fa-ellipsis-h ellips text-gray-dim"
                        aria-hidden="true"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["avatar", "source", "title", "image", "author", "created"],
}
</script>

<style lang="scss">
#post {
    color: var(--text-color);
    margin-bottom: 1rem;
    padding: 0.5rem 0.55rem;
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
    background: var(--app-color);
    display: grid;
    grid-gap: 0.25rem;
    grid-template-rows: repeat(5, auto);
    @include lg {
        border-radius: 4px;
        border: 1px solid var(--border-color);
    }
    button {
        background: var(--button-color);
        color: var(--button-text);
        padding: 2px 8px;
        border-radius: 4px;
    }
    .source {
        color: var(--text-dim);
    }
    .reddit {
        color: var(--text-color);
    }
    .vote,
    .comments {
        padding: 4px 0;
        color: var(--text-dim);
        div {
            margin: 0 6px;
        }
        svg {
            font-size: 1rem;
        }
        .ellips {
            color: var(--text-dim);;
        }
    }
}
.author:after {
    content: "\00B7";
    padding-left: .5rem;
}
</style>
