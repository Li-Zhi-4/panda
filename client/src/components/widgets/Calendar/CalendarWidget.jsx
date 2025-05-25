import { Widget } from '../../ui/Widget/Widget';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarWidget.module.css';

function CalendarWidget() {

    return (
        <div>
            <Widget title='Calendar'>
                <Calendar calendarType="gregory"/>
            </Widget>
        </div>
    );
}

export { CalendarWidget };