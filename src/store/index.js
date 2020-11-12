import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [
            {
                image:
                    "https://media.npr.org/assets/img/2020/10/16/2020-06-10t000000z_1925191047_rc226h9yy9mc_rtrmadp_3_usa-election-georgia-eb283f1ed853688cae4a42c57e3b11b652f50722-s500-c85.jpg",
                reddit:
                    "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b",
                subreddit: "politics",
                title: "Why Do Nonwhite Georgia Voters Have To Wait in Line for Hours?",
            },
            {
                image:
                    "https://preview.redd.it/jmrmb7o4ipt51.jpg?width=640&crop=smart&auto=webp&s=14ffdbd65d5025289aedb78dd821289901ddd8b0",
                reddit:
                    "https://styles.redditmedia.com/t5_324zi/styles/communityIcon_3eg4q9dlq1831.jpg?format=pjpg&s=1900c8fd4322192dd4fe171f01b100db5df59016",
                subreddit: "natureismetal",
                title: "Mountain Goats are Metal",
            },
            {
                image: "https://i.redd.it/3cw3k19eqot51.png",
                reddit:
                    "https://b.thumbs.redditmedia.com/MD9KQJnI4uIuXFUzA3DWabdGKJYceQ1uk2_ktRQXcgY.png",
                subreddit: "Eyebleach",
                title: "Happy spooky season.",
            },
            {
                image: "https://i.redd.it/ij6m1j808us41.jpg",
                reddit:
                    "https://styles.redditmedia.com/t5_2r12o/styles/communityIcon_tw7fqxwrl4q31.PNG",
                subreddit: "Sierra",
            },
            {
                image: "http://unsplash.it/364?random&gravity=center",
                reddit:
                    "https://a.thumbs.redditmedia.com/bzEVEi0S9A7FPilUt5TN3WcM3mIGAK-Ed4erVjASXZ4.png",
                subreddit: "criterion",
            },
        ],
        posts: [
            {
                title: "Guys, this weird hole appeared on my island, I'm scared what should I do?",
                image:
                    "https://preview.redd.it/rplgmhauytt51.jpg?width=640&height=360&crop=smart&auto=webp&s=07dbd0bee7f2842dc5cd361a3d6324f98d04d8bb",
                source: "AnimalCrossing",
                author: "Shayuxd",
                created: "2 hours",
            },
            {
                title:
                    "A mother once called into PBS, asking if Mr. Rogers could send an autograph to her daughter. She was suffering from seizures and set to have brain surgery. When Mr Rogers heard about it, he flew to see her in the hospital. He even brought his puppets along.",
                image: "https://i.redd.it/uj2swhtrapt51.jpg",
                source: "nextfuckinglevel",
                author: "FacelessOnes",
                created: "2 hours",
            },
            {
                title:
                    "A mother once called into PBS, asking if Mr. Rogers could send an autograph to her daughter. She was suffering from seizures and set to have brain surgery. When Mr Rogers heard about it, he flew to see her in the hospital. He even brought his puppets along.",
                image: "https://i.redd.it/uj2swhtrapt51.jpg",
                source: "nextfuckinglevel",
                author: "FacelessOnes",
                created: "2 hours",
            },
            {
                title:
                    "A mother once called into PBS, asking if Mr. Rogers could send an autograph to her daughter. She was suffering from seizures and set to have brain surgery. When Mr Rogers heard about it, he flew to see her in the hospital. He even brought his puppets along.",
                image: "https://i.redd.it/uj2swhtrapt51.jpg",
                source: "nextfuckinglevel",
                author: "FacelessOnes",
                created: "2 hours",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
})
