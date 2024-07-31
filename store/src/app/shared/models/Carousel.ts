export interface ICarouselContext {
    $implicit: string;

    controller: {
        next: () => void,
        pervious: () => void
    }

}
