import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

  import { from } from 'rxjs';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
    <p>
    <button (click) = "Showoverview()">Overview</button>
    <button (click) = "Showcontact()">Contact </button>
    </p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  Showoverview() 
  {

  }
  Showcontact() 
  {
    this.router.navigate(['/contact']);
  }
  
}
