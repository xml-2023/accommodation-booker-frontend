export class SearchAccommodation {
    name: string = '';
    minGuests: number = 0;
    maxGuests: number = 0;
    description: string = '';
    country: string = '';
    city: string = '';
    street: string = '';
    number: string = '';
    totalPrice: number = 0;
    unitPrice: number = 0;
    startDate: string = '';
    endDate: string = '';
   
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
            this.totalPrice = obj.totalPrice;         
            this.unitPrice = obj.unitPrice; 
            this.startDate = obj.startDate;  
            this.endDate = obj.endDate;         
        }
    }
}