export class MainStorage {

    addTokenToStorage(token)
    {
     let storageToken;
     localStorage.setItem("storageToken",token);
    }

    getTokenFromStorage()
    { let storageToken;
        if(localStorage.getItem("storageToken")===null)
        {
          console.log("Storage is null");
        }
        else
        {
            storageToken=localStorage.getItem("storageToken");
        }
        return storageToken;
    }

}