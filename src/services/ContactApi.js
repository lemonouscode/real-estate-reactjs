import HttpService from "./HttpService";

class ContactApi extends HttpService{

    async submitContact(formData){
        try{
            const {data} = await this.client.post('/contact',formData)
            return data;
        }catch(err){
            console.error(err)
        }
    }
}


const contactApi = new ContactApi();
export default contactApi;