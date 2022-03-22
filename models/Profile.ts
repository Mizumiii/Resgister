import { User } from "./User";

export class Profile extends User {
    profileId: string;
    address: string;
    contactNumber: string;
    profilePhoto: string;


    constructor(
        userId: string,
        email: string,
        firstName: string,
        lastName: string,
        profileId: string,
        address: string,
        contactNumber: string,
        profilePhoto: string
    ) {
        super(userId, firstName, lastName, email);
        this.profileId = profileId
        this.address = address
        this.contactNumber = contactNumber
        this.profilePhoto = profilePhoto
    }

}