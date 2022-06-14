import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectToTimesheetsButton extends NavigationMixin(LightningElement){
    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Create_Time_Sheet__c'
            },
        });
    }
}