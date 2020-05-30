const Tasks = require('../tasks/tasks-model.js')



const validId = (req, res, next) => {
  const { id } = req.params
  Tasks.findById(id)
    .then((errand) => {
    errand ? req.errand || next() : res.status(404).json({message: 'That Errand Does Not Exist!'})
    })
    
}

const validBody = (req, res, next) => {
  const { errand } = req.body
  Object.entries(req.body).length === 0
    ? res.status(404).json({ message: 'No Task Data' })
    : !errand
      ? res.status(400).json({ message: 'Missing required information. Please add an Errand' })
      :next()
}

module.exports = {
  validId,
  validBody
}