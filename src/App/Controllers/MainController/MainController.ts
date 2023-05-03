import IController from '../IController/IController';

import type MainView from '../../Views/MainView/MainView';

import CarouselController from '../CarouselController/CarouselController';

import type SelectionModel from '../../Models/SelectionModel/SelectionModel';
import GenreModel from '../../Models/GenreModel/GenreModel';

import router from '../../Router/Router';
import EventDispatcher from '../../EventDispatcher/EventDispatcher';

class MainController extends IController<MainView, { genres: GenreModel, selections: SelectionModel }> {
    private carouselController: CarouselController;

    constructor(view: MainView, model: { genres: GenreModel, selections: SelectionModel }) {
        super(view, model);

        this.carouselController = new CarouselController(this.view.carouselView);

        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));

        this.view.bindClickEvent(this.handleClick.bind(this));
    };

    public async mountComponent() {
        if (!this.isMounted) {
            this.carouselController.mountComponent();
            super.mountComponent();

            this.model.genres.getAllGenres()
                .then((data) => {
                    console.log('Genres')
                    console.log(data);
                    this.view.fillGenres(data);
                })
                .catch((error) => {
                    console.log(error)
                    router.showUnknownPage(); // TODO: mb not
                    return;
                });

            this.model.selections.getSelections()
                .then((data) => {
                    this.view.fillSelections(data);
                    this.view.bindClickEvent(this.handleClick.bind(this));
                })
                .catch(() => {
                    router.showUnknownPage(); // TODO: mb not
                    return;
                });
        }
    };

    public unmountComponent() {
        this.carouselController.unmountComponent();
        super.unmountComponent();
    }

    private handleClick(e: Event): void {

        e.preventDefault();
        if (this.isMounted) {
            const href = (<HTMLElement>e.target).closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                router.goToPath(href);
            }

            return;
        }
    };
}

export default MainController;
