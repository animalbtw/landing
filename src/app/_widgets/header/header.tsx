import AppLink from '@/app/_shared/ui/link/link';
import Typography from '@/app/_shared/ui/typography/typography';
import { links } from '@/app/_shared/constants/navigation';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <AppLink className={styles.home_link} href={links.home}>
                    Vadim &nbsp;<Typography className={styles.title_sub}>Maklakov</Typography>
                </AppLink>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <AppLink isActive href={links.about}>
                            About
                        </AppLink>
                    </li>
                    <li className={styles.nav_item}>
                        <AppLink isActive href={links.portfolio}>
                            Portfolio
                        </AppLink>
                    </li>
                    <li className={styles.nav_item}>
                        <AppLink isActive href={links.contacts}>
                            Contact
                        </AppLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}