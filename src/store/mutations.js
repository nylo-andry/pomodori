import * as MutationTypes from 'src/store/mutationTypes';
import * as SequenceStatus from 'src/const/sequenceStatus';

const POMODORO_DURATION = 1500;
const BREAK_DURATION = 300;

export const initialState = {
  pomodoriCount: 3,
  remainingPomodori: 0,
  status: SequenceStatus.IDLE,
  remainingTime: 0,
  totalTime: 0,
  timer: null,
};

export const mutations = {
  [MutationTypes.INCREASE_POMODORI_COUNT](state) {
    state.pomodoriCount += 1;
  },

  [MutationTypes.DECREASE_POMODORI_COUNT](state) {
    state.pomodoriCount -= 1;
  },

  [MutationTypes.START](state, timer) {
    state.remainingTime = POMODORO_DURATION;
    state.totalTime = POMODORO_DURATION;
    state.remainingPomodori = state.pomodoriCount;
    state.status = SequenceStatus.POMODORO_IN_PROGRESS;
    state.timer = timer;
  },

  [MutationTypes.RESUME](state, timer) {
    state.status = SequenceStatus.POMODORO_IN_PROGRESS;
    state.timer = timer;
  },

  [MutationTypes.START_BREAK](state) {
    state.status = SequenceStatus.BREAK;
    state.remainingTime = BREAK_DURATION;
    state.totalTime = BREAK_DURATION;
    state.remainingPomodori -= 1;
  },

  [MutationTypes.START_NEXT_POMODORO](state) {
    state.status = SequenceStatus.POMODORO_IN_PROGRESS;
    state.remainingTime = POMODORO_DURATION;
    state.totalTime = POMODORO_DURATION;
  },

  [MutationTypes.STOP](state) {
    clearInterval(state.timer);

    state.timer = null;
    state.status = SequenceStatus.STOPPED;
  },

  [MutationTypes.END](state) {
    clearInterval(state.timer);

    state.timer = null;
    state.status = SequenceStatus.FINISHED;
  },

  [MutationTypes.TICK](state) {
    state.remainingTime -= 1;
  },

  [MutationTypes.RESET](state) {
    clearInterval(state.timer);

    state.status = SequenceStatus.IDLE;
    state.timer = null;
    state.remainingPomodori = 0;
    state.remainingTime = 0;
  },
};
