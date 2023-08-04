import { NzTableSortFn } from 'ng-zorro-antd/table';

export interface TableHeader {
  nombre: string;
  nzAlign: 'center' | 'right' | 'left';
  nzWidth?: string;
  ordenDeOrdenamiento?: 'ascend' | 'descend' | null;
  direccionDeOrdenamiento?: Array<'ascend' | 'descend' | null>;
  funcionDeOrdenamiento?: boolean | NzTableSortFn<any>;
}
