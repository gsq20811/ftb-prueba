import { Component, OnInit, ViewChild } from '@angular/core';
import { DATOS_SUNAT } from 'src/app/core/constants/tipoCambioSunat';
import { TableHeader } from 'src/app/core/interfaces/tableHeader.interface';
import { read, utils } from 'xlsx';

interface DatosBancarios {
  fecha: string;
  descripcion: string;
  moneda: string;
  monto: number;
  codigo_unico: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  datos: DatosBancarios[];
  cabecera: TableHeader[];
  constructor() {
    this.datos = [];
  }

  @ViewChild('subirCSV') archivoInput: any;

  ngOnInit(): void {
    this.inicializarColumnas();
  }

  importarCSV($event: any) {
    const archivos = $event.target.files;

    if (archivos.length) {
      const archivo = archivos[0];
      const leer = new FileReader();
      leer.onload = (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(
            wb.Sheets[sheets[0]]
          ) as DatosBancarios[];
          this.datos = rows;

          this.datos.map((e) => {
            DATOS_SUNAT.forEach((a) => {
              if (e.fecha === a.fecha) {
                e.monto = e.monto * a.venta;
                e.moneda = 'PEN';
              }
            });
          });
        }
      };
      leer.readAsArrayBuffer(archivo);
    }
  }

  inicializarColumnas() {
    this.cabecera = [
      {
        nombre: 'FECHA',
        nzAlign: 'center',
      },
      {
        nombre: 'DESCRIPCION',
        nzAlign: 'left',
      },
      {
        nombre: 'MONEDA',
        nzAlign: 'center',
      },
      {
        nombre: 'MONTO',
        nzAlign: 'right',
      },
      {
        nombre: 'CODIGO ÚNICO',
        nzAlign: 'center',
      },
      {
        nombre: 'ACCIONES',
        nzAlign: 'center',
      },
    ];
  }

  eliminarFila(codigoUnico: string) {
    const dato = this.datos.findIndex((e) => e.codigo_unico === codigoUnico);
    this.datos.splice(dato, 1);
  }

  limpiarTabla() {
    if (this.archivoInput) {
      this.archivoInput.nativeElement.value = '';
    }
    this.datos = [];
  }
}
