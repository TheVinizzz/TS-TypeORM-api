import {Router} from 'express'
import { getRepository, getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import User from '../models/User'

const userRouter = Router()

userRouter.post('/', async(request, response) => {
    try {
        const repository = getRepository(User)
        const {email, password} = request.body

        const userExists = await repository.findOne({ where: { email } })

        if(userExists){
            return response.sendStatus(409)
        } 

        const user = repository.create({email, password})
        await repository.save(user)
        
        return response.json(user)
    }
    catch(err) {
        response.send(err.message)
    }
})

userRouter.get('/', async (request, response) => {
    response.json(await getRepository(User).find());
  });
  
  userRouter.get('/:id', async (request, response) => {
    const repository = getCustomRepository(UserRepository);
    const res = await repository.findByName(request.params.id);
    response.json(res);
  });

export default userRouter