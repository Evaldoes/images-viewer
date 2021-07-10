export class Photo {
    constructor(
        public url?: string,
        public id?: number,
        public name?: string,
        public path?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public family_id?: string,
        public family?: {
            id?: number,
            code?: string,
            welcomeSubject?: string,
            numberTable?: string,
        }

    ) { }
}