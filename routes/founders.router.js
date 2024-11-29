import { Router } from 'express'
import {
  getFounders,
  getFounder,
  addFounder,
} from '../controllers/founders.controller.js'

const foundersRouter = Router()

foundersRouter.get('/', getFounders)

foundersRouter.get('/:id', getFounder)

foundersRouter.post('/', addFounder)

export default foundersRouter
