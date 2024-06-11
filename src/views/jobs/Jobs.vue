<script>
export default {
    name: "JobsView",
    data() {
        return {
            jobs: [
                {id: 1, title: 'Storage worker needed', details: 'Worker for big storage facility needed asap'},
                {id: 2, title: 'Web developer', details: 'Looking for a web developer'},
                {id: 3, title: 'Tutor for homework', details: 'Looking for a math tutor for homework'},
            ]
        }
    }
}
</script>

<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id }}" exact>
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>