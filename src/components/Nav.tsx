import NavLink from "./NavLink";
import { InfoIcon, PrefencesIcon, BlogIcon } from "@/utils/svg/icons";
import styles from "./ui/nav.module.css";

export default function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink title="Info" hrefSrc="" icon={<InfoIcon />} />
                <NavLink title="Preferences" hrefSrc="" icon={<PrefencesIcon />} />
                <NavLink title="Blog" hrefSrc="" icon={<BlogIcon />} />
            </nav>
        </>
    );
}
