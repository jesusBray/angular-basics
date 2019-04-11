import { Observable } from 'rxjs';

export interface MethodsCrudI {

    url:string;
    getUser(user):Observable<any>;
    getUsers():Observable<any>;
    

}
