export const enum Status {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCSESS = "SUCSESS",
    ERROR = "ERROR",
}

export const enum TaskStatus {
    inProgress = "inProgress",
    completed = "completed",
}


export type Task = {
    id: number;
    title: string;
    status: TaskStatus;
    description: string;
}