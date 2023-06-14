export class CreateHostRating {
    value: number = 0;
    ratingDate: string = '';
    guestId: number = 0;
    hostId: number = 0;
    
   
    public constructor(obj?: any) {
        if (obj) {
            this.value = obj.value;
            this.ratingDate = obj.ratingDate;
            this.guestId = obj.guestId; 
            this.hostId = obj.hostId;
                  
        }
    }
}