import { LightningElement } from 'lwc';
import basePath from '@salesforce/community/basePath';
import { NavigationMixin } from 'lightning/navigation';


export default class RedirectToTimesheetsButton extends NavigationMixin(LightningElement){
    connectedCallback(){

    }

    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Create_New_Timesheet__c'
            },
        });
    }
}