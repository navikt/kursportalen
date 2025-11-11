import { Button } from '@navikt/ds-react';
import styles from './page.module.css';


export default function Home() {
  return (
      <main>
        <Button className={styles.limeButton}>Knapp</Button>
      </main>
  );
}