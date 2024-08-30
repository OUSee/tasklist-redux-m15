import styles from "./styles.module.css";

export const DoneIcon = () => {
    return (
        <div className={styles.container}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="9" stroke="#059862" />
                <path d="M8 12L11 15L16 9" stroke="#059862" />
            </svg>
        </div>
    );
};
