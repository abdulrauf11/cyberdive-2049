const all_jobs = require("./src/models/jobs.json")

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  const allJobs = all_jobs

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/job.js"),
    context: { allJobs },
  })

  // Create a page for each Pokémon.
  allJobs.forEach(job_object => {
    if (job_object.id < 100) {
      createPage({
        path: `/job/${job_object.id}/`,
        component: require.resolve("./src/templates/job.js"),
        context: { job_object },
      })
    }
  })
}
