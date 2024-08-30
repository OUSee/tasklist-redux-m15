import { useDispatch } from "react-redux";
import { PlusIcon } from "../icons/plusIcon";
import styles from "./styles.module.css";
import { AppDispatch } from "../../redux/store";
import { postTask } from "../../redux/tasksSlice";
import { TaskStatus } from "../../types";

export const HeaderComponent = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddTask = () => {
        const title = prompt("Enter Title");
        const des = prompt("Enter description");
        dispatch(
            postTask({
                title: title,
                description: des,
                status: TaskStatus.inProgress,
            })
        );
    };

    return (
        <header className={styles.container}>
            <div className={'content ' + styles.content}>
                <h1 className={styles.HeaderTitle}>TaskList</h1>
                <button
                    className={"button " + styles.addTaskButton}
                    onClick={handleAddTask}
                >
                    <PlusIcon />
                </button>
            </div>
        </header>
    );
};
