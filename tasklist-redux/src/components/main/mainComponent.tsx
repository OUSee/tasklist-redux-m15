import { useDispatch, useSelector } from "react-redux";
import { FooterComponent } from "../footer/footer";
import { HeaderComponent } from "../header/header";
import styles from "./styles.module.css";
import { AppDispatch, RootState } from "../../redux/store";
import { deleteTask, getTask } from "../../redux/tasksSlice";
import { CardComponent } from "../card/card";
import { Status, Task, TaskStatus } from "../../types";
import { useEffect } from "react";
import { ModalWindow } from "../Modal/modal";

export const MainComponent = () => {
    const data = useSelector((state: RootState) => state.tasks.data);
    const status = useSelector((state: RootState) => state.tasks.status);
    const modal = useSelector((state: RootState) => state.tasks.modal);
    const dispatch = useDispatch<AppDispatch>();

    const getTasks = async () => {
        await dispatch(getTask());
    };

    const handleDelete = (task: Task) => {
        dispatch(deleteTask(task.id));
        dispatch(getTask());
    };

    const fillTables = () => {
        const acceptableData = Array.from(data);
        return (
            <>
                {acceptableData.map((task) => {
                    if (task.status == TaskStatus.inProgress) {
                        return (
                            <CardComponent
                                task={task}
                                key={task.id}
                                onDelete={() => handleDelete(task)}
                            />
                        );
                    }
                })}
                <span className={styles.divider} />

                {acceptableData.map((task) => {
                    if (task.status == TaskStatus.completed) {
                        return (
                            <CardComponent
                                task={task}
                                key={task.id}
                                onDelete={() => handleDelete(task)}
                            />
                        );
                    }
                })}
            </>
        );
    };
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <HeaderComponent />
            <div className="content">
                <div className={styles.table}>
                    {fillTables()}
                    {status == Status.LOADING && <div>Loading...</div>}
                </div>
            </div>
            <FooterComponent />
        </>
    );
};
