import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { TaskRequest } from "apps/api/src/core/interface/task.interface";
import { TaskServiceGrpc } from '../../../core/interface/task.interface';
import { timeout, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class TaskService implements OnModuleInit {

    private taskService: TaskServiceGrpc;

    constructor(
        @Inject('TASK_SERVICE') 
        private client : ClientGrpc
    ) {}

    onModuleInit() {
        this.taskService = this.client.getService<TaskServiceGrpc>('TaskService')
    }

    async createTask(payload : TaskRequest) {
        return this.taskService.createTask(payload)
        .pipe(
          timeout(10000),
          catchError(err => {
            return throwError(err);
          }),
        ).toPromise();
    };

    async getTask() {
      let i = 1; 
      // let call = this.taskService.getTask();
      // call.on('data', data => {
      //   console.log(data)
      // })
      // return this.taskService.getTask().subscribe(res => {
      //   return res;
      // });
    }
}