export default {
    template: `
 <section class="palette-hub">
    <div v-for="(item, index) in 20"
     class="colors-pallete"
    :style="{ 'background-color': getCurrColor}"
    @click="changeColor(index)">
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
            }
            this.currColorIdx = num
            return this.currColorIdx
        },
        changeColor(index) {
            if(!index) {
            this.$emit('changeColor', 'var(--kp20)');
            }
            else{
                this.$emit('changeColor', `var(--kp${index})`);
            }
        }
    },
    computed: {
        getCurrColor() {
            return `var(--kp${this.currColorIdx})`
        }

    },
    unmounted() { },
};