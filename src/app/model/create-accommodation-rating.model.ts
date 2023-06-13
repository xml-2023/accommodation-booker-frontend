export class CreateAccommodationRating {
    value: number = 0;
    ratingDate: string = '';
    userId: number = 0;
    accommodationId: number = 0;
    
   
    public constructor(obj?: any) {
        if (obj) {
            this.value = obj.value;
            this.ratingDate = obj.ratingDate;
            this.userId = obj.userId; 
            this.accommodationId = obj.accommodationId;
                  
        }
    }
}