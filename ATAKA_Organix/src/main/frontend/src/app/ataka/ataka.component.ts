import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import Popper from 'popper.js';


@Component({
  selector: 'app-ataka',
  templateUrl: './ataka.component.html',
  styleUrls: ['./ataka.component.css']
})
export class AtakaComponent implements OnInit {



  constructor() { }


  ngOnInit(): void {
    $(function () {
      var progress = $("#pb-modalreglog-progressbar").shieldProgressBar({
        value: 0
      }).swidget();

      $('#inputEmail').change(function () {
        if ($('#inputEmail').val().length > 1) {
          progress.value(progress.value() + 15);
        } else {
          progress.value(progress.value() - 15);
        }
      });

      $('#inputPws').change(function () {
        if ($('#inputPws').val().length > 1) {
          progress.value(progress.value() + 15);
        } else {
          progress.value(progress.value() - 15);
        }
      });

      $('#inputConfirmPws').change(function () {
        if ($('#inputConfirmPws').val().length > 1) {
          progress.value(progress.value() + 15);
        } else {
          progress.value(progress.value() - 15);
        }
      });

      $('#countries').change(function () {
        if ($('#countries').val().length > 1) {
          progress.value(progress.value() + 15);
        } else {
          progress.value(progress.value() - 15);
        }
      });

      $('#age').change(function () {
        if ($('#age').val().length > 1) {
          progress.value(progress.value() + 15);
        } else {
          progress.value(progress.value() - 15);
        }
      });

      $('#ch').change(function () {
        if ($('input[name="chs"]:checked').length > 0) {
          progress.value(progress.value() + 25);
        } else {
          progress.value(progress.value() - 25);
        }
      });

      $("#age").shieldMaskedTextBox({
        enabled: true,
        mask: "00/00/0000",
        value: "19/03/1032"
      });
    })
  }

}
