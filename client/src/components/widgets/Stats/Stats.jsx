import styles from './Stats.module.css';
import { Widget } from '../../ui/Widget/Widget';

function Stats() {

    return (
        <Widget title='Stats' theme='dark-green-theme'>
            <div className={styles.stats}>
                <div className={styles['daily-stats']}>
                    <div className={styles.statistic}>
                        <div><span>27</span>/500</div>
                        <div>words today</div>
                    </div>
                    <div className={styles.statistic}>
                        <div><span>0</span>/1</div>
                        <div>letters today</div>
                    </div>
                </div>
                <div className={styles.tags}>
                    <div className={styles.tag}>27d streak</div>
                    <div className={styles.tag}>2 unread</div>
                </div>
            </div>
        </Widget>
    );
}

export { Stats };