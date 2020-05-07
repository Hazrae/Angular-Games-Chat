import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
import { AuthguardService } from './services/authguard.service';
import { GameComponent } from './components/game/game.component';
import { GamelistComponent } from './components/gamelist/gamelist.component';
import { NewgameComponent } from './components/newgame/newgame.component';
import { GameresolverService } from './resolver/gameresolver.service';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  {path: 'admin', canActivate:[AuthguardService], component: AdminComponent},
  {path: 'signin', component : SigninUserComponent},
  {path: 'signup', component : SignupUserComponent},
  {path: 'game/new', canActivate:[AuthguardService], component : NewgameComponent},
  {path: 'game/list', component : GamelistComponent},
  {path: 'game/:id', canActivate:[AuthguardService],resolve:{game: GameresolverService}, component : GameComponent}, 
  {path: 'chat',component : ChatComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
