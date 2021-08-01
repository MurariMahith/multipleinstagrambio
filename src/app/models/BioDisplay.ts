import { Bio } from "./Bio";
import { FusionDataSource } from "./FusionDataSource";

export class BioDisplay
{
    bio : Bio;
    dataSource : FusionDataSource;
    totalClicks : number;

    constructor()
    {
        this.bio = new Bio();
        this.dataSource = new FusionDataSource();
        this.totalClicks = 0;
    }
}