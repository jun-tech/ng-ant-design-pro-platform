import { Component, ChangeDetectionStrategy, Input, OnChanges, ChangeDetectorRef, HostBinding } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g2-mini-progress',
  templateUrl: './g2-mini-progress.component.html',
  styleUrls: ['./g2-mini-progress.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniProgressComponent implements OnChanges {
  @Input() color = '#1890FF';
  @Input() target: number;
  @Input() percent: number;
  @Input() strokeWidth: number;
  @Input() @HostBinding('class') cls = 'g2-mini-progress';
  constructor(private cdr: ChangeDetectorRef) { }

  private fixNum(value: number) {
    return Math.min(Math.max(value, 0), 100);
  }

  ngOnChanges() {
    this.target = this.fixNum(this.target);
    this.percent = this.fixNum(this.percent);
    this.cdr.detectChanges();
  }
}
