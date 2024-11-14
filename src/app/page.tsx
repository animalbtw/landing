import Card from './_shared/ui/card/card';
import classNames from 'classnames';

import AppLink from './_shared/ui/link/link';
import { links } from './_shared/constants/navigation';
import { cardDescription } from './_shared/constants/texts';

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={classNames(styles.page, 'content')}>
      <div className={styles.mainframe}>
        <Card className={styles.a}>
          <div>
            lets create dance floor magic for your special day
          </div>
        </Card>
        <Card className={styles.pic}>b</Card>
        <Card className={styles.description}>
          {cardDescription}
        </Card>
        <Card className={styles.contacts}>
          <div className={styles.contacts_title_block}>
            <div className={styles.contacts_title}>
              have some questions?
            </div>
            <AppLink href={links.contacts} className={styles.contacts_link}>
              <div>s</div>
            </AppLink>
          </div>
          <div className={styles.contacts_sub}>
            Contact me :-)
          </div>
        </Card>
      </div>
      <div className={styles.sidebar}>
        <Card className={styles.c}>c</Card>
        <Card className={styles.links}>
          <AppLink isBlank href={links.hh}>hh</AppLink>
          <AppLink isBlank href={links.habr}>Habr</AppLink>
        </Card>
      </div>
    </div>
  );
}
