import { observable, action } from "mobx";

export default class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

}