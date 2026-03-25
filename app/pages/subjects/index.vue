<template>
    <h1>Subjects</h1>
    <div class="grid">
        <Card v-for="subj in subjects" v-bind:key="key= subj.title" :title="subj.title" :img="subj.img" :link="subj.link"/>
    </div>
</template>

<script>
import Card from '~/components/Card.vue';
    export default {
        components: {
            Card
        },
        data() {
            return {
                subjects: [
                    {
                        title: 'Afrikaans',
                        img: {
                            src: 'https://blog.pangeanic.com/hubfs/Afrikaans-Translations-art.jpg',
                            alt: 'RSA Flag Afrikaans',
                        },
                        link: '/subjects/afrikaans',
    
                    },
                    {
                        title: 'English',
                        img: {
                            src: './assets/img/flag_of_england.png',
                            alt: 'Flag of England',
                        },
                        link: '/subjects/english',
    
                    },
                    {
                        title: 'Life Skills',
                        img: {
                            src: 'https://kite-college.org/wp-content/uploads/2023/02/Life-Skills-1.png',
                            alt: 'Life Skills Image',
                        },
                        link: '/subjects/life-skills',
    
                    },
                    {
                        title: 'Mathematics',
                        img: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtazR-5-xhW1SymZAd3SjSOwY8CISGaKx2A&s',
                            alt: 'RSA Flag Afrikaans',
                        },
                        link: '/subjects/mathematics',
    
                    },
                    {
                        title: 'Religion',
                        img: {
                            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDIS_mnd7lYnP-lmCwcB26vuj3Go9wGbNKw&s',
                            alt: 'RSA Flag Afrikaans',
                        },
                        link: '/subjects/Religion',
    
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        .card {
            margin: 0.8rem;
        }
    }
</style>