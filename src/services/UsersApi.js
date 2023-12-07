import HttpService from "./HttpService";

class UsersApi extends HttpService{

    async loginUser(credentials){
        try{
            const {data} = await this.client.post('/login', credentials);

            return data;
        }catch(err){
            console.error(err)
        }
    }

}

const usersApi = new UsersApi();
export default usersApi;