import { EntityRepository, Repository, getRepository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
// import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';


@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
    


}
