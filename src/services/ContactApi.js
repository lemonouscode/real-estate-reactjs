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

    async getContact(){
    
        // const {data} = await this.client.get('/contact');
        // return data;
        

        try{
            const {data} = await this.client.get('/contact');
            return data;
        }catch(err){
            console.error(err.response.data.error)
            return err.response.data.error
        }
    }
}


const contactApi = new ContactApi();
export default contactApi;