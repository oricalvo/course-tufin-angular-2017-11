import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactActions {
  constructor(private httpClient: HttpClient) {
  }

  loadContacts() {
    return (dispatch, getState) => {

      this.httpClient.get("assets/contacts.json").subscribe(contacts => {
        console.log(contacts);

        dispatch({
          type: "SET_CONTACTS",
          contacts: contacts,
        });
      });

    };
  }
}
