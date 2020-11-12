<template>
    <div class="footer">
        <div class="list">
            <ul>
                <li>Help</li>
                <li>Reddit App</li>
                <li>Reddit Coins</li>
                <li>Reddit Premium</li>
                <li>Reddit Gifts</li>
                <li>Communities</li>
                <li>Top Posts</li>
                <li>Topics</li>
            </ul>
        </div>
        <div class="list2">
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Advertise</li>
                <li>Blog</li>
                <li>Terms</li>
                <li>Content Privacy</li>
                <li>Privacy Policy</li>
                <li>Mod Policy</li>
            </ul>
        </div>
        <div class="whitespace-no-wrap signature">
            &copy; 2020 SuperVision Design
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
    color: var(--text-color);
    font-size: 0.8rem;
    padding: 0.75rem;
    grid-area: footer;
    /* position: sticky; */
    top: 0;
    display: none;
    /* grid-area: footer; */
    border-radius: 4px;
    background: var(--app-color);
    border: 1px solid var(--border-color);
    @include md {
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "list list2"
            "footer footer";
    }
    .list {
        grid-area: list;
    }
    .list {
        grid-area: list2;
    }
    .signature {
        grid-area: footer;
    }
    li {
        cursor: pointer;
    }
}
</style>
