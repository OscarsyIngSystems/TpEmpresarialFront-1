import { ChartType } from 'chart.js';
export interface ChartComponentOptions {
  title?: string;
  data: Array<number>;
  colors:
    | Array<string>
    | Array<{ borderColor: string; backgroundColor: string }>;
  labels: Array<string>;
  chartType: ChartType;
  width: number;
  height: number;
  class: string;
}
