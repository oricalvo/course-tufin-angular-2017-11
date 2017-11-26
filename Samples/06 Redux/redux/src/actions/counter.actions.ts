import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CounterActions {
  inc() {
    return (dispatch, getState) => {
      dispatch({
        type: "INC",
      });
    };
  }

  dec() {
    return (dispatch, getState) => {
      dispatch({
        type: "DEC",
      });
    };
  }
}
