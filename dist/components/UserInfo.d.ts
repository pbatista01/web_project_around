import type { UserInfoSelectors, UserData } from "../types/types.js";
export declare class UserInfo {
    private nameElement;
    private jobElement;
    constructor({ nameSelector, jobSelector }: UserInfoSelectors);
    getUserInfo(): UserData;
    setUserInfo({ name, job }: UserData): void;
}
//# sourceMappingURL=UserInfo.d.ts.map