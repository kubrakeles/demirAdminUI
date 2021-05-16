export class getServices
{
    constructor(storageToken) {
        this.storageToken = storageToken;
    }
    async getTakeDataFromApi()
     {
        var getvalue;
        const response = await fetch('https://localhost:44344/api/Home/reference', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.storageToken
                , 'Content-Type': 'application/json'
                      }
        });
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
    async getTakeByIdFromApi(id)
    {
       var value;
      
       const response=await fetch('https://localhost:44344/api/Home/ReferenceById?id='+id,
       {
           method:'GET',
           headers:{
            'Authorization': 'Bearer ' + this.storageToken
            , 'Content-Type': 'application/json'
                  }
       });
       const responseData= await response.json();
       
       return responseData;
    }
}