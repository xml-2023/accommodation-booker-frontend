export class CreateReservationRequest {
    accommodationId: number = 0;
    userId: number = 0;
    reserveFrom: string = '';
    reserveTo: string = '';
    guestNumber: number = 0;
   
    public constructor(obj?: any) {
        if (obj) {
            this.accommodationId = obj.accommodationId;
            this.userId = obj.userId;
            this.reserveFrom = obj.reserveFrom; 
            this.reserveTo = obj.reserveTo;
            this.guestNumber = obj.guestsNumber;        
        }
    }
}