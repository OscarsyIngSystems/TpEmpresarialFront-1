import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
export interface ChartComponentOptions {
  title?: string;
  data: Array<any>;
  colors:
    | Array<string>
    | Array<{ borderColor: string; backgroundColor: string }>
    | Array<Color>;
  labels: Array<string>;
  chartType: ChartType;
  width?: number;
  height?: number;
  class: string;
}
