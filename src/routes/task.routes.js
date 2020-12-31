import {Router} from 'express'

import * as taskCtrl from '../controllers/task.controller';

const router = Router()

router.get('/', taskCtrl.findAllTasks);

router.post('/', taskCtrl.createTask);

router.get('/done', taskCtrl.findAllDoneTask);

router.get('/:id', taskCtrl.findOneTask);

router.delete('/:id', taskCtrl.deleteTask);

router.put('/:id', taskCtrl.updateTask);

export default router;