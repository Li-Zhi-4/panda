import styles from './ProfileAvatar.module.css';

function ProfileAvatar({ username, handle }) {

    return (
        <div className={styles['profile-avatar']}>
            <img src="/src/assets/profile-icon.svg" alt="profile icon" />
            <div className={styles['profile-info']}>
                <p className={styles.username}>{username}</p>
                <p className={styles.handle}>{handle}</p>
            </div>
        </div>
    );
}

export { ProfileAvatar };