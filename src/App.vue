<script>
export default {
    methods: {
        redirect() {
            this.$router.push({ name: 'Home' })
        },
        back() {
            this.$router.go(-1)
        },
        forward() {
            this.$router.go(1)
        },
    }
}
</script>

<template>
    <nav>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        |
        <router-link :to="{ name: 'About' }">About</router-link>
        |
        <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </nav>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>

    <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #dddddd;
}
</style>
