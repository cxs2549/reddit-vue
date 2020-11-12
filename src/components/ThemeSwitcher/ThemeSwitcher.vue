<template>
    <div>
        <input type="checkbox" id="theme-switch" class="theme-switch" v-model="darkMode" />
        <label for="theme-switch">
            <span v-if="darkMode === true">
                <img
                    class="mr-5 cursor-pointer"
                    alt="logo"
                    src="../../assets/images/sun.png"
                    width="24"
                />
            </span>
            <span v-else>
                <img alt="logo" src="../../assets/images/moon.png" class="mr-5 opacity-75" width="24" />
            </span>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
        }
    },
    mounted() {
        // check for active theme
        let htmlElement = document.documentElement
        let theme = localStorage.getItem("theme")

        if (theme === "dark") {
            htmlElement.setAttribute("theme", "dark")
            this.darkMode = true
        } else {
            htmlElement.setAttribute("theme", "light")
            this.darkMode = false
        }
    },
    watch: {
        darkMode: function() {
            // add/remove class to/from html tag
            let htmlElement = document.documentElement

            if (this.darkMode) {
                localStorage.setItem("theme", "dark")
                htmlElement.setAttribute("theme", "dark")
            } else {
                localStorage.setItem("theme", "light")
                htmlElement.setAttribute("theme", "light")
            }
        },
    },
}
</script>
