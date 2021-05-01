import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import {  TaskRequest, TaskResponse } from "apps/api/src/core/interface/task.interface";
import { TaskService } from '../../service/task/task.service';


@Controller('task')
export class TaskController {

    constructor(private readonly taskService : TaskService) {}

    @Post('create')
    async createTask(@Body() payload : TaskRequest ) : Promise<TaskResponse> {
        return await this.taskService.createTask(payload);
    }

    @Get('get/')
    async getTask(): Promise<any> {
        // await this.taskService.getTask();
        return null
    }
}