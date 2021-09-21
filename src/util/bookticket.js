import { apiRequest } from "./util";

function submit(data) {
  return apiRequest("bookticket", "POST", data);
}

const contact = { submit };

export default contact;
