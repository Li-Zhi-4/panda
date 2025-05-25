import styles from './ToolBar.module.css';
import { Widget } from '../../ui/Widget/Widget';
import { ProfileAvatar } from '../../ProfileAvatar/ProfileAvatar';

function ToolBar() {

    return (
        <Widget>
            <div className={styles.toolbar}>
                <ProfileAvatar username='Anonymous Panda' handle='@panda-party'/>
                <button className={styles['new-letter']}>New Letter</button>
            </div>
        </Widget>
    );
}

export { ToolBar };