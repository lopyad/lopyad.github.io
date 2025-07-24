import type {FC} from "react";
import styles from "../styles/Footerbar.module.css"
import ThemeToggle from "./ThemeToggle";

interface FooterbarProps {
}
const Footerbar: FC<FooterbarProps> = () => {

    return (
        <footer className={styles.footerbar}>
            <p>&copy; {new Date().getFullYear()} Lopyad Page</p>
            <div className={styles.themeToggleContainer}>
                <ThemeToggle />
            </div>
        </footer>
    );
}
export default Footerbar;
