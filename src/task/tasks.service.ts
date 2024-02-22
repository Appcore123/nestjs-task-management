import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository:Repository<Task>,
    ){}
    
    async findAll():Promise<Task[]>{
      return this.taskRepository.find();
    }


    //hfhhfhffh



    async getTaskById(id: string): Promise<Task> {
      const found = await this.taskRepository.findOne({where: {id}});
  
      if (!found) {
        throw new NotFoundException(`Task with ID "${id}" not found`);
      }
      return found;
    }


}
