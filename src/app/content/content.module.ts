import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { InicioComponent } from './inicio/inicio.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [ContentComponent, InicioComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpaceModule,
    NzTableModule,
    NzUploadModule,
    NzButtonModule,
    NzPaginationModule,
    NzIconModule,
    NzGridModule,
    NzTypographyModule
  ],
})
export class ContentModule {}
