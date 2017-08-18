import {PaperworkAddAction} from '../paperwork-actions';
import {InvoiceClientModel} from '../../model/invoice.model';

export class InvoiceAddAction extends PaperworkAddAction<InvoiceClientModel> {
  readonly scope = 'invoice';

  constructor(payload: InvoiceClientModel[]) {
    super(payload);
  }
}
