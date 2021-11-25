import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networks-socials',
  templateUrl: './networks-socials.component.html',
  styleUrls: ['./networks-socials.component.css']
})
export class NetworksSocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook = "assets/img/facebook.png";
  twiter = "assets/img/twiter.png";
  youtube = "assets/img/youtube.png";
  instagram = "assets/img/instagram.png";

}
