export class User {
    public username: string;
    public street: string;
    public city: string;
    public zipCode: string;
    public email: string;
    public password: string;

    constructor(
        username: string,
        street: string,
        city: string,
        zipCode: string,
        email: string,
        password: string,
    ) {
        this.username = username;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.email = email;
        this.password = password;
    }
}