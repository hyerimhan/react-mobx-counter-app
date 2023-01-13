import { action, computed, makeObservable, observable } from "mobx";

export default class CounterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNagative: computed,
      increase: action,
      decrease: action,
    });
  }

  get isNagative() {
    return this.count < 0 ? "Yes" : "No";
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}
