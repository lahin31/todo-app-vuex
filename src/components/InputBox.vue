<template>
    <div>
        <form v-on:submit.prevent="onSubmit(text)">
            <div class="form-group">
            <input type="text" 
                   class="form-control" 
                   placeholder="Enter your text"
                   v-model="text">
            </div>
            <div class="form-group">
                <button class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: ''
        }
    },
    computed: {
        
    },
    methods: {
        onSubmit(x) {
            this.$store.dispatch('addTodoActions', x);
            this.text = '';
        }
    }
}
</script>

<style>

</style>