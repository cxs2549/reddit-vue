<template>
    <div id="posts">
        <post
            v-for="post in posts"
            :key="post"
            :title="post.title"
            :image="post.image"
            :source="post.source"
            :author="post.author"
            :created="post.created"
        />
    </div>
</template>

<script>
import Post from "./Post"
export default {
    components: { Post },
    computed: {
        posts() {
            return this.$store.state.posts
        },
    },
}
</script>

<style>
#posts {
    grid-area: posts;
    width: 100%;
    max-width: 640px;
    height: 100%;
}
</style>
