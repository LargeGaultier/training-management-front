import { Action, State, StateContext } from '@ngxs/store';
import { SetUsername } from './app.actions';

export interface AppStateModel {
  username: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: ''
  }
})
export class AppState {
  constructor() {}
  @Action(SetUsername)
  setUsername(
    { patchState }: StateContext<AppStateModel>,
    { payload }: SetUsername
  ) {
    patchState({ username: payload });
  }
}
