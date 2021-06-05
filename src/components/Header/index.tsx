import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ignews" />
                <nav>
                    <a className={styles.active}  href="">Inicio</a>
                    <a href="">Postagens</a>
                </nav>
                <SignInButton />
            </div>
        </header>

    );
}