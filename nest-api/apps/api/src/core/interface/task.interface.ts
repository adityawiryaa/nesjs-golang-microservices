import { Observable } from 'rxjs';


export interface TaskServiceGrpc {

    createTask(request : TaskRequest) : Observable<TaskResponse>;
    getTask() : Observable<any>;
}

export interface TaskRequest {
    name : string;
    desc : string;
}

export interface TaskResponse {
    id : number;
    name : string;
    desc : string;
}
