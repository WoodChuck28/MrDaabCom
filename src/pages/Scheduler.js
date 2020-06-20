import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import './styles/Scheduler.css';
import { extend } from '@syncfusion/ej2-base';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './libs/sample-base';
import { PropertyPane } from './libs/property-pane';
import * as dataSource from './libs/data-source.json';

/**
 * Schedule Default sample
 */
export class Scheduler extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.scheduleData, null, true);
    }
    change(args) {
        this.scheduleObj.selectedDate = args.value;
        this.scheduleObj.dataBind();
    }
    onDragStart(args) {
        args.navigation.enable = true;
    }
    render() {
        return (
          <div>
          <div className='schedule-control-section'style={{marginTop: "130px"}}>
        <div className='control-section' >
          <div className='control-wrapper'>
            <ScheduleComponent title="tester" height='600px'  ref={schedule => this.scheduleObj = schedule} selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: this.data }} dragStart={(this.onDragStart.bind(this))}>
              <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
                <ViewDirective option='Agenda'/>
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
        <div className='col-lg-3 property-section'>
          <PropertyPane title='Properties'>
            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
              <tbody>
                <tr style={{ height: '20px' }}>
                  <td style={{ width: '30%' }}>
                    <div className='col-md-4' style={{ paddingTop: '8px' }}>Current Date</div>
                  </td>
                  <td style={{ width: '70%' }}>
                    <div className='datepicker-control-section'>
                      <DatePickerComponent value={new Date(2019, 0, 10)} showClearButton={false} change={this.change.bind(this)}></DatePickerComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div>
      </div>
      </div>);
    }
}
