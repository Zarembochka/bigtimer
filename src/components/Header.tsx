import Nav from "./Nav";
import { Settings } from "./Settings";
import styles from "./ui/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Nav />
            <Settings />
        </header>
    );
}
