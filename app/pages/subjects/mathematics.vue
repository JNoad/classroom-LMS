<template>
    <h2>Mathematics</h2>
    <h3>Resources:</h3>
    <ul>
        <li>
            <a
                target="_blank"
                href="./resources/mathematics/CAPS MATHS  ENGLISH GR 1-3 FS.pdf"
                >CAPS MATHS ENGLISH GR 1-3 FS.pdf</a
            >
        </li>
    </ul>

    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=lD-my4XnthgYfwRl&amp;list=PLw8ht3u1H9EURFBK_mamMCSilNySGnyCG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>

    <h3>Exercises</h3>
    <p>
        {{ ranName }} has {{ num1 }} apples. Her friend gives her
        {{ num2 }} more.
    </p>
    <p>How many apples does {{ ranName }} have now?</p>
    <p>{{ "🍎".repeat(num1) }}</p>
    <p>+</p>
    <p>{{ "🍎".repeat(num2) }}</p>
    <input type="number" ref="answer" />
    <button @click="checkAnswer()">Go!</button>
</template>
<script>
export default {
    data() {
        return {
            names: ['Alissa', 'Jessica', 'Joey', 'Victoria'],
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
        }
    },
    computed: {
        ranName(){
            return this.names[Math.floor(Math.random() * this.names.length)]
        }
    },
    methods: {
        checkAnswer() {
            if (this.$refs.answer.value == this.num1 + this.num2) {
                alert("Correct!!!");
            } else {
                alert("Ah, oh... Try again!");
            }
        }
    },
};
</script>
<style></style>
