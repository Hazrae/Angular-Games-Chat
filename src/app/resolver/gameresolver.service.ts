import { Injectable, ɵbypassSanitizationTrustUrl } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';




@Injectable({
  providedIn: 'root'
})
export class GameresolverService implements Resolve<Game> {

      game : Game;

  constructor(private gameService: GamesService
      ) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Game>  {
    return new Promise(
      (resolve, reject)=> { 
      this.gameService.getSingleGame(route.params['id'])
                      .then((gameResolved: Game)=>{this.game = gameResolved});      
      if(this.game)
      resolve(this.game)       
    }, 
    )}
}