export class ReservationRequest {
    id : number = 0;
    status: string = '';
    reserveFrom: string = '';
    reserveTo: string = '';
    guestsNumber: number = 0;
    cancellations: number = 0;
   
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.status = obj.status;
            this.reserveFrom = obj.reserveFrom;
            this.reserveTo = obj.reserveTo; 
            this.guestsNumber = obj.guestsNumber;
            this.cancellations = obj.cancellations;      
        }
    }
}