import styles from "./styles.module.css";

export const EscIcon = () => {
    return (
        <div className={styles.container}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="9" stroke="#222222" />
                <path d="M9.00009 14.9997L15.0001 8.99966" stroke="#222222" />
                <path d="M15 15L9 9" stroke="#222222" />
            </svg>
        </div>
    );
};
