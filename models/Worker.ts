import { User } from "./User";

export class Worker extends User {
    profileId: string;
    businessName: string;
    contactNumber: string;
    address: string;
    status: boolean;
    statusDescription: string;
    profilePhoto: string;
    backgroundPhoto: string;
    rating: number;


    constructor(
        userId: string,
        email: string,
        firstName: string,
        lastName: string,
        profileId: string,
        businessName: string,
        contactNumber: string,
        address: string,
        status: boolean,
        statusDescription: string,
        profilePhoto: string,
        backgroundPhoto: string,
        rating: number
    ) {
        super(userId, email, firstName, lastName);
        this.profileId = profileId;
        this.businessName = businessName;
        this.contactNumber = contactNumber;
        this.address = address;
        this.status = status;
        this.statusDescription = statusDescription;
        this.profilePhoto = profilePhoto;
        this.backgroundPhoto = backgroundPhoto;
        this.rating = rating;
    }


}