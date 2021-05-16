
export class getNewsServices
{
    constructor(storageToken) {
        this.storageToken = storageToken;
    }
    async getTakeNewsDataFromApi()
     {
        var getvalue;
        const response = await fetch('https://service.demiralpelektronik.com/api/Home/News', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.storageToken
                , 'Content-Type': 'application/json'
                      }
        });
        const responseData = await response.json();
        return responseData;
    }
    async getTakeNewsByIdFromApi(id)
    {
       var value;
      
       const response=await fetch('https://service.demiralpelektronik.com/api/Home/NewsById?id='+id,
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

