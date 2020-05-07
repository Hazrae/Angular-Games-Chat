import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor( 
    private gameServ: GamesService,
    private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.game = new Game();
    //this.game= this.router.snapshot.data['game'];
    this.gameServ.getSingleGame(this.router.snapshot.params['id']).then((gameResolved: Game)=>{this.game = gameResolved});


  }

}
