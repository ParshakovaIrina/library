import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable(
)
export class MyRouteService {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  getId(id: string): number {
    return +this.route.snapshot.paramMap.get("id");
  }
}
