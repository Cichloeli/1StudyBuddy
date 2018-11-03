<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        
        <router-link class="nav-link" to="/profile">Profile</router-link>
        <router-link class="nav-link" to="/classes">Classes</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
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