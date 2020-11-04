export default class User{
    public user_nicename:string;
    public  user_pass:string;
 
    public id :number;
    public user_login : string;
    public user_email:string;
    public display_name:string;
    public user_status :number;
    public user_registered : string;
    public user_url : string;
    public user_activation_key : string;
    public spam : number;
    public deleted : number;
    public site_id : number = 1;
    

    constructor(username: string, password:string){
        this.user_nicename = username;
        this.user_pass = password;

        /*
        this.id = 0;
        this.user_login = '';
        this.user_email = '';
        this.display_name = '';
        this.user_status = 1;
        this.user_registered = '';
        this.user_url = '';
        this.user_activation_key = '';
        this.spam = 0;
        this.deleted = 0;
        this.site_id = 0;
    */
    }
}

