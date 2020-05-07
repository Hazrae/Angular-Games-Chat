import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent implements OnInit {

  gameForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  errorMessage : string;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
    this.gameForm = this.formBuilder.group({
      titre: ['', [Validators.required]],
      type:['', [Validators.required]],
      note:['', [Validators.required]]    
    })

  }

  onSaveGame(){  
    const newGame = new Game();
    if(this.fileUrl && this.fileUrl !== '')
      newGame.photo = this.fileUrl;
    newGame.title = this.gameForm.get('titre').value;
    newGame.type = this.gameForm.get('type').value;
    newGame.note = this.gameForm.get('note').value;

    this.gameService.createNewGame(newGame);
    this.router.navigate(['/game/list']);

  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.gameService.uploadFile(file).then(
      (url:string) => {
        console.log(url);
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    ).catch(
      (error) => {this.errorMessage = error;}
    )
  }

  detectFiles(event){ 
    this.onUploadFile(event.target.files[0]);
  }
}
