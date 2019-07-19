const all_jobs = require("./src/models/jobs.json")
const all_portfolios = require("./src/models/portfolios.json")

exports.createPages = async ({ actions: { createPage } }) => {
  const allJobs = all_jobs
  createPage({
    path: `/careers`,
    component: require.resolve("./src/templates/careers.js"),
    context: { allJobs },
  })
  allJobs.forEach(job_object => {
    if (job_object.id < 100) {
      createPage({
        path: `/job/${job_object.id}/`,
        component: require.resolve("./src/templates/job.js"),
        context: { job_object },
      })
    }
  })

  // `getPokemonData` is a function that fetches our data
  const allPortfolios = all_portfolios
  // Create a page that lists all Pokemon.
  createPage({
    path: `/work`,
    component: require.resolve("./src/templates/work.js"),
    context: { allPortfolios },
  })
  // Create a page for each Pokemon.
  allPortfolios.forEach(portfolio_object => {
    createPage({
      path: `/portfolio/${portfolio_object.id}/`,
      component: require.resolve("./src/templates/portfolio.js"),
      context: { portfolio_object },
    })
  })
}
