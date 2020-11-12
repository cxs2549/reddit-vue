<template>
    <nav>
        <div class="flex items-center">
            <img src="../../assets/images/logo.png" alt="" />
            <span class="hidden ml-2 text-2xl font-semibold md:inline">reddit</span>
        </div>

        <div>
            <div v-if="showSearch" class="absolute searchModal">
                <input type="search" placeholder="Search" class="pl-2" />
            </div>
            <button @click="toggleSearch"><svg-icon icon="search" class="mr-6" /></button>

            <span class="btn">
                Login
            </span>
            <span class="btn2">
                Signup
            </span>

            <i class="mr-2 fa fa-user" aria-hidden="true"></i>
            <i class="mr-6 fa fa-caret-down" aria-hidden="true"></i>

            <theme-switcher />
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showSearch: false,
        }
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch
        },
    },
}
</script>

<style lang="scss">
nav {
    z-index: 100;
    position: fixed;
    grid-area: navbar;
    height: 50px;
    width: 100%;
    background: var(--app-color);
    display: grid;
    border-bottom: 1px solid var(--border-color);
    grid-template-columns: 0.75fr 1fr;
    align-items: center;
    div:first-child {
        img {
            width: 34px;
            margin-left: $margin;
        }
        span {
            color: var(--text-color);
            letter-spacing: -0.04em;
            opacity: 0.8;
        }
    }
    div:nth-child(2) {
        justify-self: end;
        display: flex;
        align-items: center;
        svg {
            opacity: 0.8;
            font-size: 1rem;
            color: var(--icon-color);
        }
        .searchModal {
            right: 7rem;
            @media screen and (min-width: 700px) {
                right: 24.5rem;
            }
        }
        input {
            outline: none;
            width: 170px;
            height: 36px;
            border-radius: 4px;
            background: var(--input-color);
            border: 1px solid var(--input-border);
            @include sm {
                width: 260px;
            }
            @include lg {
                width: 500px;
            }
            &::placeholder {
                color: var(--text-dim);
                opacity: 1;
            }
        }
    }
}
.btn {
    display: none;
    color: var(--navbtn-color);
    border: 1px solid var(--navbtn-color);
    width: 120px;
    height: 32px;
    cursor: pointer;
    @include md {
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-right: 1rem;
        font-weight: bold;
        display: flex;
    }
}
.btn2 {
    @extend .btn;
    display: none;
    color: var(--navbtn-text);
    background: var(--navbtn-color);
    margin-right: 1.25rem;
    @include md {
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-right: 1.25rem;
        font-weight: bold;
        display: flex;
    }
}
</style>
