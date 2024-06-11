<script>
export default {
    name: "JobsView",
    data() {
        return {
            jobs: [
                { id: 1, title: 'Storage worker needed', details: 'Worker for big storage facility needed asap'},
                { id: 2, title: 'Web developer', details: 'Looking for a web developer'},
                { id: 3, title: 'Tutor for homework', details: 'Looking for a math tutor for homework'},
            ]
        }
    }
}
</script>

<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>
            {{ job.title }}
        </h2>
    </div>
</template>

<style scoped>

</style>