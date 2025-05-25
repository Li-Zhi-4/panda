import styles from './Bamboo.module.css';
import { Widget } from '../../ui/Widget/Widget';

import bambooIcon from '/src/assets/bamboo.svg';

function Bamboo() {

    return (
        <Widget title='Bamboo' showToggle={false} width='fit-content' height='100%'>
            <div className={styles.bamboo}>
                <img src={bambooIcon} alt="" className="bamboo-icon" />
                <p>123</p>
            </div>
        </Widget>
    );
}

export { Bamboo };