import {ActionReducerMap, combineReducers} from '@ngrx/store';
import {InjectionToken} from '@angular/core';
import {InvoiceClientModel} from '../model/invoice.model';
import {PaperWorkState} from './invoice.state';
import {PaperworkReducerFactory} from 'app/store/reducer.factory';

export interface RootState {
  process: {
    invoice: PaperWorkState<InvoiceClientModel>,
  };
}


export const reducerToken = new InjectionToken<ActionReducerMap<RootState>>('Registered Reducers');

export const reducers = {
  process: combineReducers(
    {
      invoice: PaperworkReducerFactory<InvoiceClientModel>('invoice'),
    }),
};

