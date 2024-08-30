import { useDispatch } from "react-redux";
import { Task, TaskStatus } from "../../types";
import { InProgressIcon } from "../icons/inProgressIcon";
import styles from "./styles.module.css";
import { AppDispatch } from "../../redux/store";
import { deleteTask, getTask, updateTask } from "../../redux/tasksSlice";
import { DoneIcon } from "../icons/doneIcon";
import { DelIcon } from "../icons/delIcon";
interface ICardComponent {
    task: Task;
    onDelete: () => void;
}

export const CardComponent = ({ onDelete, task }: ICardComponent) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleChangeStatus = (status: TaskStatus) => {
        dispatch(
            updateTask({
                id: task.id,
                status: status,
                title: task.title,
                description: task.description,
            })
        );
    };

    return (
        <div className={styles.container}>
            {task.status == TaskStatus.inProgress && (
                <button
                    className={"button " + styles.inProgressBtn}
                    onClick={() => {
                        handleChangeStatus(TaskStatus.completed);
                    }}
                >
                    <InProgressIcon />
                </button>
            )}
            {task.status == TaskStatus.completed && (
                <div
                    className={"button " + styles.completedbtn}
                    onClick={() => {
                        handleChangeStatus(TaskStatus.inProgress);
                    }}
                >
                    <DoneIcon />
                </div>
            )}
            <div className={styles.taskInfo}>
                <h3 className={styles.title}>{task.title}</h3>
                <p className={styles.description}>{task.description}</p>
            </div>
            {(task.status == TaskStatus.inProgress && (
                <button
                    className={"button " + styles.delButton}
                    onClick={onDelete}
                >
                    <DelIcon />
                </button>
            )) || <div></div>}
        </div>
    );
};
