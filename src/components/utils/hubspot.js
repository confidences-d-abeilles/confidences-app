
import axios from 'axios';


export const addLead = ({ email, name, firstname, phone }) => {
  axios({
    method: 'post',
    url: `https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.REACT_APP_HUBSPOT_API_KEY}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: {
      properties: [
        { property: 'email', value: email },
        { property: 'firstname', value: firstname },
        { property: 'lastname', value: name },
        { property: 'phone', value: phone },
      ]
    }
  }).catch(e => console.error(e));
};
