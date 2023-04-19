import IView from '../IView/IView';

import SettingsTemplate from './SettingsView.hbs';
import SettingsData from './SettingsViewConfig';
import './SettingsView.css';

import ListComponent from '../../Components/ListComponent/ListComponent';

import FormComponent from '../../Components/FormComponent/FormComponent';

import LinkComponent from '../../Components/LinkComponent/LinkComponent';
import LinkComponentData from '../../Components/LinkComponent/LinkComponentData';

import IUser from '../../Interfaces/User/IUser';

class SettingsView extends IView {
    private readonly leftMenuContainer: HTMLElement
    private readonly settingsFormContainer: HTMLElement;

    private leftMenu: ListComponent<LinkComponent, LinkComponentData>;
    private currentActiveItem: string | null;

    public readonly form: FormComponent;

    constructor(parent: HTMLElement) {
        super(parent, SettingsTemplate(SettingsData));

        this.leftMenuContainer = <HTMLElement>this.element.querySelector('.js-settings__left-menu-container');
        this.settingsFormContainer = <HTMLElement>this.element.querySelector('.js-settings__form');

        this.leftMenu = new SettingsData.leftMenu.componentType(this.leftMenuContainer, SettingsData.leftMenu.componentData);
        this.leftMenu.show();
        this.currentActiveItem = null;

        this.form = new SettingsData.formData.componentType(this.settingsFormContainer, SettingsData.formData.componentData);
        this.form.show();
    };

    public changeActiveLeftMenuItem(href: string) {
        const listElement = this.leftMenu.getElement();
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('settings-left-menu__item--active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('settings-left-menu__item--active');
    };

    public show(opts?: { user: IUser }) {
        if(!opts) return;

        this.form.setDataToFields([{ id: 'email', value: opts.user.email }]);

        super.show();
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default SettingsView;
