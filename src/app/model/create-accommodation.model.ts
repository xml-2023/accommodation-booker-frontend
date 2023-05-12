export class CreateAccommodation {
    name: string = '';
    minGuests: number = 0;
    maxGuests: number = 0;
    description: string = '';
    country: string = '';
    city: string = '';
    street: string = '';
    number: string = '';
    isAutomaticConfirmation: boolean = true;
    priceType: string = '';
   
    public constructor(obj?: any) {
        if (obj) {
            this.name = obj.name;
            this.minGuests = obj.minGuests;
            this.maxGuests = obj.maxGuests; 
            this.description = obj.description;
            this.country = obj.country;
            this.city = obj.city;   
            this.street = obj.street;       
            this.number = obj.number;    
            this.isAutomaticConfirmation = obj.isAutomaticConfirmation;         
            this.priceType = obj.priceType;        
        }
    }
}