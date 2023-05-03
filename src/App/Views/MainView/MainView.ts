import IView from '../IView/IView';
import type IContent from '../../Interfaces/Content/IContent';
import type ISelection from '../../Interfaces/Selection/ISelection';
import type IGenre from '../../Interfaces/Genre/IGenre';

import MainTemplate from './MainView.hbs';
import './MainView.css';

import CarouselView from '../CarouselView/CarouselView';

import SeasonComponent from '../../Components/SeasonComponent/SeasonComponent';


import ListComponent from '../../Components/ListComponent/ListComponent';
import type ListComponentData from '../../Components/ListComponent/ListComponentData';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import type LinkComponentData from '../../Components/LinkComponent/LinkComponentData';
import GenresComponent from "../../Components/GenresComponent/GenresComponent";
import genresComponent from "../../Components/GenresComponent/GenresComponent";

class MainView extends IView {
    public carouselView: CarouselView;
    private readonly article: HTMLElement; // TODO how to update content not render all page
    private readonly genres: HTMLElement;
    private readonly main: HTMLElement;

    constructor(parent: HTMLElement) {
        super(parent, MainTemplate({}));

        this.article = <HTMLElement>this.element.querySelector('.news');
        this.genres = <HTMLElement>this.element.querySelector('.genres');
        this.main = <HTMLElement>this.element.querySelector('.categories');

        this.carouselView = new CarouselView(this.article);
    };

    public fillGenres(genres: IGenre[]): void {
        this.genres.innerHTML = '';

        console.log('fillGenres')
        new GenresComponent(this.genres, genres).show();


        // const linkDataItems: LinkComponentData[] = genres.map(({ id, name}) => {
        //     return <LinkComponentData>({ id: id.toString(), linkText: name });
        // });
        //
        // new ListComponent(this.genres, <ListComponentData<LinkComponent, LinkComponentData>>({ items: linkDataItems })).show();

        // genres.forEach(({ id, name }) => {
        //     // new GenreComponent(this.genres, )
        // });
    };

    public fillSelections(selections: ISelection[]): void {
        this.main.innerHTML = '';

        selections.forEach(({ id, title, content}) => {
            new SeasonComponent(this.main, { id: id.toString(), title: title, data: { contents: <IContent[]>content } }).show();
        });
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    };
}

export default MainView;
