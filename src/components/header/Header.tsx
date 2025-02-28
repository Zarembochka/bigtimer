import { useStoreHeader } from "@/store/storeHeader";
import Nav from "./Nav";
import { Settings } from "./Settings";
import styles from "./ui/header.module.css";

export default function Header() {
    const { isHeader } = useStoreHeader();

    return (
        <header className={`${styles.header} ${isHeader ? "visible" : styles.hide}`}>
            <Nav />
            <Settings />
        </header>
    );
}
