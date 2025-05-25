import styles from './Timer.module.css';
import { Widget } from '../../ui/Widget/Widget';

function Timer() {

    return (
        <Widget title='Timer' width='fit-content'>
            <div className={styles.timer}>
                <span className={styles['timer-display']}>00:00</span>
                <span>today</span>
            </div>
        </Widget>
    );
}

export { Timer };