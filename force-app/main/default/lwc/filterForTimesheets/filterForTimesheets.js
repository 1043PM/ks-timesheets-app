import { LightningElement } from 'lwc';

export default class FilterForTimesheets extends LightningElement {
    value = 'last Modified';
    value2 = 'approved';

    get options() {
        return [
            { label: 'Oldest date', value: 'oldest date' },
            { label: 'Latest date', value: 'latest date' },
            { label: 'Last Modified', value: 'last Modified' },
        ];
    }
    

    get optionsstatus() {
        return [
            { label: 'Pending', value: 'pending' },
            { label: 'Approved', value: 'approved' },
            { label: 'Rejected', value: 'rejected' },
            { label: 'Draft', value: 'draft' },
        ];
    }
}
//Pending, Approved RejectedDraft  \\