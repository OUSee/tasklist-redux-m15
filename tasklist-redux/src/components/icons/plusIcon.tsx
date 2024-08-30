import styles from "./styles.module.css";

export const PlusIcon = () => {
    return (
        <div className={styles.container}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z"
                    stroke="#222222"
                />
                <path
                    d="M9 12L15 12"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 9L12 15"
                    stroke="#222222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
