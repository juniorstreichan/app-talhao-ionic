import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";

import { Talhao } from "./../../models/talhao";
import { TalhaoService } from "./../../services/talhao.service";

@IonicPage()
@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  talhoes: Talhao[];
  loading;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: TalhaoService,
    private loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({ content: "Aguarde ..." });
  }

  ionViewDidEnter() {
    this.loadData();
  }

  private loadData() {
    this.loading.present();
    this.service.getTalhoes().subscribe(
      response => {
        console.log(response);
        this.talhoes = response.results;
        this.loading.dismissAll();
      },
      error => {
        console.log(error);
        this.loading.dismissAll();
      }
    );
  }

  loadTalhao(talhao) {
    console.log(talhao);
    this.navCtrl.push("DetailPage", { talhao: talhao });
  }
}
