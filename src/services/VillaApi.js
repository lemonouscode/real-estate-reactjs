import HttpService from "./HttpService";

class VillaApi extends HttpService{


    async getVillas(){
      try{
        const response = await this.client.get('/villas')

        return response.data;
      }catch(err){
        console.error('Error uploading images:', err);
      }
    }

    // Create Villa Endpoint
    async createVilla(data){
        try{
            const response = await this.client.post('/create-villa', data, {
              headers: {
                'Content-type': 'multipart/form-data'
              }
            })
      
            return response.data.message

          }catch(err){
            console.error('Error uploading images:', err);
          }
    }

    async updateVilla(slug,data){
      try{
        const response = await this.client.post('/villa/' + slug, data, {
          headers: {
            'Content-type': 'multipart/form-data'
          }
        })
  
        return response.data.message

      }catch(err){
        console.error('Error uploading images:', err);
      }
    }

    async getVillaByName(slug){
      try{
        const response = await this.client.get('/villa/' + slug)

        return response.data;
      }catch(err){
        console.error('Error uploading images:', err);
      }
    }

}

const villaApi = new VillaApi();
export default villaApi;