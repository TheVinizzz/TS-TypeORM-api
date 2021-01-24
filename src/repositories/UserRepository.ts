import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByName(email: string): Promise<User[]> {
    return this.find({
      where: {
        email,
      },
    });
  }
}
