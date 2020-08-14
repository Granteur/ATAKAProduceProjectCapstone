import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { } from 'googlemaps';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      function init_map1() {
        var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
        var mapOptions = {
          center: myLocation,
          zoom: 16
        };
        var marker = new google.maps.Marker({
          position: myLocation,
          title: "Property Location"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
          mapOptions);
        marker.setMap(map);
      }

      init_map1();
    });

  }


}
