import styles from "./styles.module.css";
import { TaskStatus } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { postTask } from "../../redux/tasksSlice";
import { EscIcon } from "../icons/escIcon";

export const ModalWindow = () => {
    const dispatch = useDispatch<AppDispatch>();

    const formHandler = (e: any) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const task = {
            title: data.title,
            description: data.description,
            status: TaskStatus.inProgress,
        };
        dispatch(postTask(task));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={formHandler}>
                <button className={styles.resetbutton} type="reset">
                    <EscIcon />
                </button>
                <input name="title" type="text" placeholder="Title" />
                <input
                    name="description"
                    type="text"
                    placeholder="Description"
                />
                <button
                    type="submit"
                    className={"button" + styles.submitButton}
                >
                    Add
                </button>
            </form>
        </div>
    );
};
