import { Bio } from "./Bio";

export class User
{
    uid : string;
    userName : string;
    userPhotoUrl : string;
    bios : Bio[];
    templateSelected : string;

    constructor()
    {
        this.uid = "";
        this.bios = [];
        this.userName = "";
        this.userPhotoUrl = "";
        this.templateSelected = "";
    }
}