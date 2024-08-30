import styles from "./styles.module.css";

export const InProgressIcon = () => {
    return (
        <div className={styles.container}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="8.5" stroke="#ffcc00" />
                <path
                    d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
                    stroke="#ffcc00"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};
