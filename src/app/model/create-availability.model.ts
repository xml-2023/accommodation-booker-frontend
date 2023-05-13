export class CreateAvailability {
    from: string = '';
    to: string = '';
    accommodationId: number = 0;
    priceInEuros: number = 0;

   
    public constructor(obj?: any) {
        if (obj) {
            this.from = obj.from;
            this.to = obj.to;
            this.accommodationId = obj.accommodationId; 
            this.priceInEuros = obj.priceInEuros;      
        }
    }
}