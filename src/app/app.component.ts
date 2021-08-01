import { Component } from '@angular/core';
import { User } from './models/User';
import { AppUpdateService } from './services/appUpdate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Multiple Instagram Bio';
  dataSource: Object;
  chartConfig: Object;
  data: Object[] = [];

  constructor(private appUpdateService : AppUpdateService) {

  //this.prepearedata();

  this.dataSource = {
      "chart": {
        "caption": "Your Dashboard",
        "subCaption": "Your customer Traffic",
        "xAxisName": "Date",
        "yAxisName": "Visits",
        "numberSuffix": "",
        "theme": "fint",
      },
      "data": this.data
    };

  }

  // prepearedata()
  // {
  //   this.Users[0].bioClicks.forEach(element => {
  //     this.data.push({
  //       "label":element.date,
  //       "value":element.count
  //     })
  //   });
  // }

  // Users :User[] = [
  //   {
  //     uid: "12345",
  //     userName: "Suggesto_Official",
  //     userPhotoUrl: "user.png",
  //     templateSelected:"one",
  //     bioClicks:[
  //       {
  //         date:"01/01/2021",
  //         count:39
  //       },
  //       {
  //         date:"02/01/2021",
  //         count:24
  //       },
  //       {
  //         date:"03/01/2021",
  //         count:49
  //       },
  //       {
  //         date:"03/01/2021",
  //         count:15
  //       },
  //       {
  //         date:"03/01/2021",
  //         count:23
  //       },
  //       {
  //         date:"03/01/2021",
  //         count:12
  //       },
  //       {
  //         date:"03/01/2021",
  //         count:35
  //       }
  //     ],
  //     bios:[
  //       {
  //         name:"website",
  //         photoUrl: "urlphoto",
  //         link:"www.instagram.com",
  //         clicks: [
  //           {
  //             date:"01/01/2000",
  //             count:25
  //           },
  //           {
  //             date:"02/01/2000",
  //             count:29
  //           },
  //           {
  //             date:"03/01/2000",
  //             count:19
  //           }
  //         ]
  //       },
  //       {
  //         name:"facebook",
  //         photoUrl: "urlphoto",
  //         link:"www.facebook.com",
  //         clicks: [
  //           {
  //             date:"01/01/2000",
  //             count:79
  //           },
  //           {
  //             date:"02/01/2000",
  //             count:81
  //           },
  //           {
  //             date:"03/01/2000",
  //             count:49
  //           },
  //         ]
  //       }
  //     ]
  //   }
  // ];



}
