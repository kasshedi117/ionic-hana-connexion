import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
url: string;
dataLog : string;

constructor(
                public navCtrl: NavController , 
                public http       : HttpClient,
                private inAppBrowser: InAppBrowser
            ) { 

             this.url = "https://kassp1942997979trial.hanatrial.ondemand.com/sap/hana/xs/formLogin/login.html";

  }


   openWebpage(url: string) {

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

      const browser = this.inAppBrowser.create(url, '_self', options);

    }





    getData(){

      let headersData 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),


       urlData                   : any      	= "http://kassp1942997979trial.hanatrial.ondemand.com/dev_hedi/NFTEST1.xsjs?$format=json";

      //  optionsData 	        : any		= { "key" : "Authorization", "Basic" : "YourUserName" + ":" + "YourPassword" },
      // urlData                : any      	= "http://kassp1942997979trial.hanatrial.ondemand.com/dev_hedi/NFTEST1.xsjs?$format=json";



      this.http.get(urlData,  headersData)
      .subscribe((data : any) =>
      {
        console.log(data);
      },
      (error : any) =>
      {
         console.log("error");
         console.dir(error);
      });
   }
}
