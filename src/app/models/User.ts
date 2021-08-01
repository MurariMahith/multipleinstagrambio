import { Bio } from "./Bio";
import { Click } from "./Click";

export class User
{
    uid : string;
    userName : string;
    userPhotoUrl : string;
    mainProfilLink : string;
    bios : Bio[];
    templateSelected : string;
    bioClicks : Click[];

    constructor()
    {
        this.uid = "";
        this.bios = [];
        this.userName = "";
        this.userPhotoUrl = "";
        this.templateSelected = "";
        this.bioClicks = [];
        this.mainProfilLink = "";
    }
}