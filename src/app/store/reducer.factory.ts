import {PaperWorkState, RequiredBaseType} from './invoice.state';
import {ADD, PaperWorkActionsType} from './paperwork-actions';

export type PaperworkScope = 'invoice';

export const paperworkInitState: PaperWorkState<any> = {
  entities: [],
  selectedId: null,
};


export function PaperworkReducerFactory<T extends RequiredBaseType>(scope: PaperworkScope): (state: PaperWorkState<T>, action: PaperWorkActionsType<T> ) => PaperWorkState<T> {
  return function (state: PaperWorkState<T> = paperworkInitState, action: PaperWorkActionsType<T>): PaperWorkState<T> {
    if (action.scope !== scope) {
      return state;
    }
    switch (action.type) {
      case ADD:
        return add<T>(state, action);

      default:
        return state;

    }
  };
}

export function add<T extends RequiredBaseType>(state: PaperWorkState<T>, action) {
  return Object.assign({}, state, {entities: action.payload});
}
