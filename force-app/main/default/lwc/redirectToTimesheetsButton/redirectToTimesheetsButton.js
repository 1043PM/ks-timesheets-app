import { LightningElement } from 'lwc';
import basePath from '@salesforce/community/basePath';
import { NavigationMixin } from 'lightning/navigation';


export default class RedirectToTimesheetsButton extends NavigationMixin(LightningElement){
    connectedCallback(){

    }

    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'Create_New_Timesheet__c'
            },
        });
    }
}