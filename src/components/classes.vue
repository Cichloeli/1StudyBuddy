<template>
    <div id="classes">
        <h1>Classes</h1>
        <p>
            These are the classes
        </p>
        <router-link class="nav-link" to="/profile">Profile</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Classes',
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #classes {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>