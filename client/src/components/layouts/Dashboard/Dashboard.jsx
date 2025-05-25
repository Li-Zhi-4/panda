import styles from './Dashboard.module.css';
import * as Widgets from '/src/components/widgets';

function Dashboard() {

    return (
        <div className={`${styles['dashboard-container']} ${styles['rows']}`}>
            <div className={`${styles['dashboard-left']} ${styles['columns']}`}>
                <Widgets.Stats />
                <div className={styles['rows']}>
                    <Widgets.Badges />
                    <Widgets.Bamboo />
                </div>
                <div className={styles['rows']}>
                    <Widgets.Timer />
                    <Widgets.TotalStats />
                </div>
                <Widgets.Mailbox />
            </div>
            <div className={`${styles['dashboard-right']} ${styles['columns']}`}>
                <Widgets.CalendarWidget />
                <Widgets.ActivityFeed />
            </div>
        </div>
    );
}

export { Dashboard };