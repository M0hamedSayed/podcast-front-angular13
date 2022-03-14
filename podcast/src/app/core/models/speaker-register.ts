export interface SpeakerRegister {
    firstName: string,
    lastName: string,
    email: string,
    address: {
        city: string,
        building: number,
        street: number,
    },
    password: string,
    passwordConfirm: string,
    personType: "speaker"
}
