import styles from "./styles.module.css";

export const FooterComponent = () => {
    return (
        <footer className={styles.container}>
            <div className="content">
                <h3>
                    <a className={styles.title} href="https://github.com/OUSee">
                        HACKERMAN
                    </a>
                </h3>
            </div>
        </footer>
    );
};
