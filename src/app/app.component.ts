import {Component} from '@angular/core';
import {RootState} from './store/index';
import {Store} from '@ngrx/store';
import {InvoiceAddAction} from './store/actions/invoice.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private store: Store<RootState>) {
    this.store.dispatch(new InvoiceAddAction([
      {
        id: 1,
        label: 'Invoice 1',
        positions: []
      },
      {
        id: 2,
        label: 'Invoice 2',
        positions: []
      }
    ]))
  }
}
