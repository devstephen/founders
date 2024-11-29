import foundersModel from '../models/founders.model.js'

export function getFounders(req, res) {
  res.json(foundersModel)
}

export function getFounder(req, res) {
  const { id } = req.params
  const founderId = String(id)
  const founder = foundersModel.find((f) => f.id === founderId)

  if (founder) {
    res.json(founder)
  } else {
    res.status(404).json({ error: 'Founder does not exist' })
  }
}

export function addFounder(req, res) {
  const { name, company, description } = req.body

  if (!name || !company || !description) {
    res.status(400).json({
      error: 'All fields are required',
    })
  }

  const newFounder = {
    id: crypto.randomUUID(),
    name,
    company,
    description,
  }

  const exists = foundersModel.some((f) => f.name === newFounder.name)
  if (exists) {
    return res.status(409).json({ error: 'This founder already exists.' })
  }

  foundersModel.push(newFounder)
  res
    .status(201)
    .json({ message: 'New founder has been successfully', newFounder })
}
