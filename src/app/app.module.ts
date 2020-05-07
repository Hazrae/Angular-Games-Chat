import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthguardService } from './services/authguard.service';
import { GameComponent } from './components/game/game.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { NewgameComponent } from './components/newgame/newgame.component';
import { GamesService } from './services/games.service';
import { GameresolverService } from './resolver/gameresolver.service';
import { ChatwindowComponent } from './components/chat/chatwindow/chatwindow.component';
import { ChatformComponent } from './components/chat/chatform/chatform.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninUserComponent,
    SignupUserComponent,
    AdminComponent,
    HeaderComponent,
    GameComponent,
    GamelistComponent,
    NewgameComponent,
    ChatwindowComponent,
    ChatformComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthguardService,
    GamesService,
    GameresolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
