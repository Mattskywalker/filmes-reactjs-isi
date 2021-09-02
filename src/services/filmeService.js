let api = "http://localhost:8080/filme"

export default function getRequest(url) {

    url = api+url;
    let dataObject;

    let request = new XMLHttpRequest();
    request.open("GET",url, false);
    request.send();

    try{
        dataObject = JSON.parse(request.responseText);
        return dataObject;
    }catch(err){
        return null;
    }
    
}
