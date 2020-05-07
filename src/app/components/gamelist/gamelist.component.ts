import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {

  listGame: Game[] = [];
  gameSub : Subscription;

  constructor(
    private gameService : GamesService
  ) { }

  ngOnInit(): void {
    this.gameSub = this.gameService.gamesSubject.subscribe(
      (game: Game[])=>{
        this.listGame = game;
      }
    );
    this.gameService.getGames();
  } 
}


