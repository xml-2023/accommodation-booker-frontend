export class EditAccommodationRating {
    gradeId: number = 0;
    ratingDate: string = '';
    value: number = 0;
    
    public constructor(obj?: any) {
        if (obj) {
            this.value = obj.value;
            this.ratingDate = obj.ratingDate;
            this.gradeId = obj.gradeId;       
        }
    }
}