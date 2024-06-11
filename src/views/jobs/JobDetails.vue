<script>
export default {
    name: "JobDetails",
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(response => response.json())
            .then(data => this.job = data)
            .catch(error => console.log(error))
    }
}
</script>

<template>
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>{{ job.details }}</p>
    </div>

    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<style scoped>

</style>