import { Directive, Input, TemplateRef, OnInit, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './shared/models/Carousel';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: ICarouselContext | null = null;
  index: number = 0;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouselFrom') images!: string[];

  timer: any;

  @Input('appCarouselAutoplay')
  set autoplay(value: string) {
    value === 'No' ? this.clearAutoPlay() : this.playAutoPlay()
  }

  public ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        pervious: () => this.pervious()
      }
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  public next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context!.$implicit = this.images[this.index];
  }

  public pervious() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context!.$implicit = this.images[this.index];
  }

  public playAutoPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, 1000);
  }

  public clearAutoPlay() {
    clearInterval(this.timer);
  }

}
