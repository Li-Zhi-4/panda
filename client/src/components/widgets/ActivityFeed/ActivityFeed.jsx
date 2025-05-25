import styles from './ActivityFeed.module.css';
import { Widget } from '../../ui/Widget/Widget';
import { Tabs } from '../../ui/Tabs/Tabs';

function ActivityFeed() {

    return (
        <Widget title='Activity Feed' height='100%' showToggle={false}>
            <Tabs tabs={['General', 'Letters']} />
            <div className={styles.nothing}>EMPTY</div>
        </Widget>
    );
}

export { ActivityFeed };