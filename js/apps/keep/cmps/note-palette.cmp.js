export default {
    template: `
 <section class="palette-hub">
    <div v-for="(item, index) in 20"
     class="colors-pallete"
    :style="{ 'background-color': getCurrColor}">
    <h2>
        {{updateColor(index+1)}}
    </h2>
    </div>
</section>
`,
    data() {
        return {
            currColorIdx: 1,
        };
    },
    created() { },
    methods: {
        updateColor(num) {
            if (!this.currColorIdx) {
                console.log('num: ', num)
            }
            this.currColorIdx = num
            return this.currColorIdx
        }
    },
    computed: {
        getCurrColor() {
            return `var(--kp${this.currColorIdx})`
        }
    },
    unmounted() { },
};