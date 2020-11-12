<template>
    <div id="app">
        <svg-sprite />
        <navbar />
        <trend-wrap />
        <popbar />
        <posts />
        <sidebar />
        <premium />
        <comm />
        <popComm />
        <footerbar />
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style lang="scss">
#app {
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 218px 55px 450px 70px 350px 399px 246px;
    grid-template-areas:
        "nav"
        "trend"
        "pop"
        "posts";
    @include md {
        grid-template-columns: 1fr 650px 310px 1fr;
        grid-template-areas:
             "navbar navbar navbar navbar"
            ". trend trend ."
            ". pop side ."
            ". posts side ."
            ". posts prem ."
            ". posts comm ."
            ". posts popComm ."
            ". posts footer .";
    }
}
</style>
