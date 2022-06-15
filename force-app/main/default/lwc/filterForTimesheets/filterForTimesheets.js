import { LightningElement } from 'lwc';

export default class FilterForTimesheets extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'Oldest date', value: 'oldest date' },
            { label: 'Latest date', value: 'latest date' },
            { label: 'Last Modified', value: 'last Modified' },
        ];
    }
}