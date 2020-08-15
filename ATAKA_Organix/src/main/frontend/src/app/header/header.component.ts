import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Popper from 'popper.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 200) {
          $('.navbar').addClass('fixed-top');
        } else if ($(this).scrollTop() == 0) {
          $('.navbar').removeClass('fixed-top');
        }
      });

      function adjustNav() {
        var winWidth = $(window).width(),
          dropdown = $('.dropdown'),
          dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 768) {
          dropdown.on('mouseenter', function () {
            $(this).addClass('show')
              .children(dropdownMenu).addClass('show');
          });

          dropdown.on('mouseleave', function () {
            $(this).removeClass('show')
              .children(dropdownMenu).removeClass('show');
          });
        } else {
          dropdown.off('mouseenter mouseleave');
        }
      }

      $(window).on('resize', adjustNav);

      adjustNav();


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
    })

  };
}
