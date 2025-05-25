import styles from './TotalStats.module.css';
import { Widget } from '../../ui/Widget/Widget';


function TotalStats() {
    const data = {
        'Words': 543,
        'Letters': 12,
        'Time': '32m 23s',
        'Longest Streak': 32
    }

    return (
        <Widget title='Total Stats' showToggle={false} height='100%'>
            <div className={styles['total-stats']}>
                <table className={styles.totalStats}>
                    <tbody>
                        {Object.entries(data).map( ([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Widget>
    );
}

export { TotalStats };