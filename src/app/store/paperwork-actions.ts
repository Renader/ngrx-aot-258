import {Action} from '@ngrx/store';
import {PaperworkScope} from './reducer.factory';

export const ADD = '[Paperwork] ADD';

export interface ScopedAction extends Action {
  readonly scope: PaperworkScope;
  readonly type: string;
}

export abstract class PaperworkAddAction<T> implements ScopedAction {
  readonly type = ADD;
  abstract scope: PaperworkScope;

  payload: T[];

  constructor(payload: T[]) {
    this.payload = payload;
  }
}

export type PaperWorkActionsType<T> = PaperworkAddAction<T>;
