import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Popper from 'popper.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      // Add minus icon for collapse element which is open by default
      $(".collapse.show").each(function () {
        $(this).prev(".card-header").addClass("highlight");
      });

      // Highlight open collapsed element 
      $(".card-header .btn").click(function () {
        $(".card-header").not($(this).parents()).removeClass("highlight");
        $(this).parents(".card-header").toggleClass("highlight");
      });
    });
  }

}
