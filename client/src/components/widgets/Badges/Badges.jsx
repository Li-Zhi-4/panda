import styles from './Badges.module.css';
import { Widget } from '../../ui/Widget/Widget';

function Badges() {

    return (
        <Widget title='Badges' height='100%'>
            <p className={styles.nothing}>EMPTY</p>
        </Widget>
    );
}

export { Badges };