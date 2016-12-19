export interface ITask {
  id: string;
  name: string;
  description: string;
}

let counter: number = 0;
let Tasks: ITask[] = [];

export class TaskModel {
  public getTasks(): Promise<ITask[]> {
    return new Promise<ITask[]>((resolve, reject) => {
      resolve(Tasks);
    });
  }

  public findByName(name: string): Promise<ITask> {
    return new Promise<ITask>((resolve, reject) => {
      resolve(this.getTaskByName(name));
    });
  }

  public findById(id: string): Promise<ITask> {
    return new Promise<ITask>((resolve, reject) => {
      resolve(this.getTaskById(id));
    });
  }

  public addTask(newTask: ITask): Promise<ITask> {
    return new Promise<ITask>((resolve, reject) => {
      let task: ITask = this.getTaskByName(newTask.name);
      if (task) {
        reject('Task existed.');
        return;
      }

      newTask.id = counter.toString();
      counter += 1;
      Tasks.push(newTask);
      resolve(newTask);
    });
  }

  public updateTask(updatingTask: ITask): Promise<ITask> {
    return new Promise<ITask>((resolve, reject) => {
      let task: ITask = this.getTaskById(updatingTask.id);
      if (!task) {
        reject('Task does not exist.');
        return;
      }

      let index: number = Tasks.indexOf(task);
      Tasks[index] = updatingTask;
      resolve(updatingTask);
    });
  }

  public deleteTask(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let task: ITask = this.getTaskById(id);
      if (!task) {
        reject('Task does not exist.');
        return;
      }

      let index: number = Tasks.indexOf(task);
      Tasks.splice(index, 1);
      resolve();
    });
  }

  private getTaskByName(name: string): ITask {
    return Tasks.find(task => task.name === name);
  }

  private getTaskById(id: string): ITask {
    return Tasks.find(task => task.id === id);
  }
}

export const Task: TaskModel = new TaskModel();
