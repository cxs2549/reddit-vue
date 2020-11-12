import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/main.css"
import "./assets/app.scss"
import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"
import Navbar from "./components/Navbar/Navbar"
import TrendWrap from "./components/Trending/TrendWrap"
import Popbar from "./components/Popbar/Popbar"
import Posts from "./components/Posts/Posts"
import Sidebar from "./components/Sidebar/Sidebar"
import Premium from "./components/Sidebar/Premium"
import Comm from "./components/Sidebar/Comm"
import PopComm from "./components/Sidebar/PopComm"
import Footer from "./components/Sidebar/Footer"



Vue.config.productionTip = false

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component("theme-switcher", ThemeSwitcher)
Vue.component("navbar", Navbar)
Vue.component("trend-wrap", TrendWrap)
Vue.component("popbar", Popbar)
Vue.component("posts", Posts)
Vue.component("sidebar", Sidebar)
Vue.component("premium", Premium)
Vue.component("comm", Comm)
Vue.component("popComm", PopComm)
Vue.component("footerbar", Footer)



Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
