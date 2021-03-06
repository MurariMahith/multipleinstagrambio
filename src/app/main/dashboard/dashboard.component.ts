import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FusionDataSource } from 'src/app/models/FusionDataSource';
import { FusionData } from 'src/app/models/FusionData';
import { Click } from 'src/app/models/Click';
import { BioDisplay } from 'src/app/models/BioDisplay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;
  data: Object[] = [];

  currentUser : User;

  totalBioDataSource: FusionDataSource;

  individualBioDataSources : FusionDataSource[] = [];

  individualbios : BioDisplay[] = [];

  constructor() {

    //this.preparedata();

    

    // this.dataSource = {
    //     "chart": {
    //       "caption": "Total Bio Clicks",
    //       "subCaption": "Your customer Traffic",
    //       "xAxisName": "Date",
    //       "yAxisName": "Visits",
    //       "numberSuffix": "",
    //       "theme": "ocean",
    //     },
    //     "data": this.data
    //   };

   }

  

  ngOnInit() {

    //get user

    //prepare total bio.
    this.currentUser = this.Users[0];
    
    //for total bio clicks
    this.totalBioDataSource = this.prepareDataSource(this.totalBioDataSource,this.currentUser.bioClicks,"'s total Page Visits","","Ocean")

    this.prepareIndividualBioClicks();
    console.log(this.individualBioDataSources)


  }

  prepareIndividualBioClicks()
  {
    this.currentUser.bios.forEach(b => {

      let dtSource = new FusionDataSource();

      dtSource = this.prepareDataSource(dtSource,b.clicks,": "+b.name,"")

      this.individualBioDataSources.push(dtSource);

      let count = 0;

      b.clicks.forEach(element => {
        count = element.count+count;
      });

      this.individualbios.push({bio:b,dataSource:dtSource,totalClicks:count});
      console.log(b.name)

    })
  }

  prepareDataSource(obj: FusionDataSource,clicks :Click[], captionext: string = "",subCaption: string = "",theme :string = "fint")
  {
    obj = new FusionDataSource();

    //chart
    obj.chart.caption = this.currentUser.userName + captionext
    obj.chart.subCaption = subCaption
    obj.chart.xAxisName = "Date"
    obj.chart.yAxisName = "Visits"
    obj.chart.numberSuffix = ""
    obj.chart.theme = theme;

    //data
    obj.data = this.preparedata(clicks);

    return obj;
  }

  preparedata(obj :Click[])
  {
    let data :FusionData[] = [];

    obj.forEach(b => {
      
      const item = new FusionData();
      item.label = b.date;
      item.value = b.count.toString();

      data.push(item);
    });

    return data;
  }

  Users :User[] = [
    {
      uid: "12345",
      userName: "Suggesto_Official",
      userPhotoUrl: "user.png",
      templateSelected:"one",
      mainProfilLink:"www.instagram.com",
      bioClicks:[
        {
          date:"01/01/2021",
          count:39
        },
        {
          date:"02/01/2021",
          count:24
        },
        {
          date:"03/01/2021",
          count:12
        },
        {
          date:"04/01/2021",
          count:25
        },
        {
          date:"05/01/2021",
          count:32
        },
        {
          date:"06/01/2021",
          count:45
        },
        {
          date:"07/01/2021",
          count:50
        },
        {
          date:"08/01/2021",
          count:54
        },
        {
          date:"09/01/2021",
          count:39
        },
        {
          date:"10/01/2021",
          count:23
        },
        {
          date:"11/01/2021",
          count:45
        },
        {
          date:"12/01/2021",
          count:37
        }
      ],
      bios:[
        {
          name:"instagram",
          photoUrl: "urlphoto",
          link:"https://stackoverflow.com/questions/38796541/how-to-add-font-awesome-to-angular-2-cli-project",
          clicks: [
            {
              date:"01/01/2000",
              count:25
            },
            {
              date:"02/01/2000",
              count:29
            },
            {
              date:"03/01/2000",
              count:19
            },
            {
              date:"04/01/2021",
              count:25
            },
            {
              date:"05/01/2021",
              count:32
            },
            {
              date:"06/01/2021",
              count:45
            },
            {
              date:"07/01/2021",
              count:50
            },
            {
              date:"08/01/2021",
              count:54
            },
            {
              date:"09/01/2021",
              count:39
            },
            {
              date:"10/01/2021",
              count:23
            },
            {
              date:"11/01/2021",
              count:45
            },
            {
              date:"12/01/2021",
              count:37
            }
          ]
        },
        {
          name:"facebook",
          photoUrl: "urlphoto",
          link:"www.facebook.com",
          clicks: [
            {
              date:"01/01/2000",
              count:79
            },
            {
              date:"02/01/2000",
              count:81
            },
            {
              date:"03/01/2000",
              count:49
            },
            {
              date:"04/01/2021",
              count:25
            },
            {
              date:"05/01/2021",
              count:32
            },
            {
              date:"06/01/2021",
              count:45
            },
            {
              date:"07/01/2021",
              count:50
            },
            {
              date:"08/01/2021",
              count:54
            },
            {
              date:"09/01/2021",
              count:39
            },
            {
              date:"10/01/2021",
              count:23
            },
            {
              date:"11/01/2021",
              count:45
            },
            {
              date:"12/01/2021",
              count:37
            }
          ]
        }
      ]
    },
    {
      uid: "199899",
      userName: "Suggesto_Official",
      userPhotoUrl: "user.png",
      templateSelected:"one",
      mainProfilLink:"www.instagram.com",
      bioClicks:[
        {
          date:"01/01/2021",
          count:39
        },
        {
          date:"02/01/2021",
          count:24
        },
        {
          date:"03/01/2021",
          count:12
        },
        {
          date:"04/01/2021",
          count:25
        },
        {
          date:"05/01/2021",
          count:32
        },
        {
          date:"06/01/2021",
          count:45
        }
      ],
      bios:[
        {
          name:"website",
          photoUrl: "urlphoto",
          link:"www.instagram.com",
          clicks: [
            {
              date:"01/01/2000",
              count:25
            },
            {
              date:"02/01/2000",
              count:29
            },
            {
              date:"03/01/2000",
              count:19
            }
          ]
        },
        {
          name:"facebook",
          photoUrl: "urlphoto",
          link:"www.facebook.com",
          clicks: [
            {
              date:"01/01/2000",
              count:79
            },
            {
              date:"02/01/2000",
              count:81
            },
            {
              date:"03/01/2000",
              count:49
            },
          ]
        }
      ]
    },
    {
      uid: "86464",
      userName: "Suggesto_Official",
      userPhotoUrl: "user.png",
      templateSelected:"one",
      mainProfilLink:"www.instagram.com",
      bioClicks:[
        {
          date:"01/01/2021",
          count:39
        },
        {
          date:"02/01/2021",
          count:24
        },
        {
          date:"03/01/2021",
          count:12
        },
        {
          date:"04/01/2021",
          count:25
        },
        {
          date:"05/01/2021",
          count:32
        },
        {
          date:"06/01/2021",
          count:45
        }
      ],
      bios:[
        {
          name:"website",
          photoUrl: "urlphoto",
          link:"www.instagram.com",
          clicks: [
            {
              date:"01/01/2000",
              count:25
            },
            {
              date:"02/01/2000",
              count:29
            },
            {
              date:"03/01/2000",
              count:19
            }
          ]
        },
        {
          name:"facebook",
          photoUrl: "urlphoto",
          link:"www.facebook.com",
          clicks: [
            {
              date:"01/01/2000",
              count:79
            },
            {
              date:"02/01/2000",
              count:81
            },
            {
              date:"03/01/2000",
              count:49
            },
          ]
        }
      ]
    }
  ];

}
