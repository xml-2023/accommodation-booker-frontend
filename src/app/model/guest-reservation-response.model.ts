export class GuestReservationResponse {
    requestId: number = 0;
    accommodationName: string = '';
    status : string = '';
    reserveFrom: string = '';
    reserveTo: string = '';
    guestsNumber: number = 0;
   
    public constructor(obj?: any) {
        if (obj) {
            this.requestId = obj.requestId;
            this.accommodationName = obj.accommodationName;
            this.status = obj.status
            this.reserveFrom = obj.reserveFrom; 
            this.reserveTo = obj.reserveTo;
            this.guestsNumber = obj.guestsNumber;        
        }
    }
}