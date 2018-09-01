import { TalhaoService } from "./../../services/talhao.service";
import { Talhao } from "./../../models/talhao";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  talhao: Talhao;
  form: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: TalhaoService,
    private formBuilder: FormBuilder
  ) {
    this.talhao = this.navParams.get("talhao");
    this.form = this.formBuilder.group({
      id: [this.talhao.id, [Validators.required]],
      descricao: [this.talhao.descricao, [Validators.required]],
      fazenda: [this.talhao.fazenda, [Validators.required]],
      hectares: [this.talhao.hectares, [Validators.required]],
      cultura: [this.talhao.cultura, [Validators.required]],
      disponivel: [this.talhao.disponivel, [Validators.required]]
    });
  }

  ionViewDidLoad() {}

  alterartalhao() {
    // console.log(this.form.value);

    this.service
      .alterarTalhao(this.talhao.id, this.form.value)
      .subscribe(response => {
        this.talhao = response;
        this.message("Gravou!");
        this.form.markAsDirty();
      });
  }
  deletar() {
    this.service.deletarTalhao(this.talhao.id).subscribe(response => {
      console.log(response);

      this.navCtrl.setRoot('HomePage');
    });
  }
  message(msg) {
    alert(msg);
  }
}
