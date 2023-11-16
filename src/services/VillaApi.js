import HttpService from "./HttpService";

class VillaApi extends HttpService{

    // Create Villa Endpoint
    async createVilla(data){
        try{
            const response = await this.client.post('create-villa', data, {
              headers: {
                'Content-type': 'multipart/form-data'
              }
            })
      
            return response.data.message

          }catch(err){
            console.error('Error uploading images:', err);
          }
    }
}

const villaApi = new VillaApi();
export default villaApi;