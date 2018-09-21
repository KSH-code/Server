/**
 * @author Henry Kim <tjdgnsqn133@gmail.com>
 */
const { User } = require('../models')
module.exports = async (req, res) => {
  let { country, visitedCount, startDate, endDate, age, gender, job } = req.body
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  res.json(await new User({
    country,
    visitedCount,
    startDate,
    endDate,
    age,
    gender,
    job
  }))
}
