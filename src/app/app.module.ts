import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemCardComponent } from './item-card/item-card.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UpdateStatusComponent } from './update-status/update-status.component';


// import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ItemCardComponent,
    UpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSliderModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
