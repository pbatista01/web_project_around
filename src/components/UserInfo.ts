import type { UserInfoSelectors, UserData} from "../types/types.js";

export class UserInfo{
    private nameElement : HTMLElement;
    private jobElement : HTMLElement;

    constructor({nameSelector,jobSelector}: UserInfoSelectors){
        this.nameElement = document.querySelector(nameSelector) as HTMLElement;
        this.jobElement = document.querySelector(jobSelector) as HTMLElement;
    }

    public getUserInfo():UserData{
        return {
            name: this.nameElement.textContent ?? "",
            job: this.jobElement.textContent ?? "",
        };
    }

    public setUserInfo({name, job}: UserData): void{
        this.nameElement.textContent = name;
        this.jobElement.textContent = job;
    }
}