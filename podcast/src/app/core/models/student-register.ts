export class StudentRegister {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public passwordConfirm: string,
        public personType: "student") {
    }

}
