const sessionMap = new Map(); 
/*
Description: maps the sessionID to the Information for the User, if there is no entry, a user is created 
Parameter: the session ID of the User
Return: userData{filters[], preferences {}}
*/
function mapUser(sessionID){
    if(sessionID == null){
        console.error("No session ID provided, please provide a valid session ID");
    }
    if(sessionMap.has(sessionID)){
        console.log("Sesion exists, returning session Data")
        return sessionMap.get(sessionID); 
    }else{
        console.log("session is being created...")
        sessionMap.set(sessionID, userData = {
            filters: [], 
            preferences: {}
        }); 
        return sessionMap.get(sessionID); 
    }
}

/*
Description: sets provided filters for SessionID 
Parameter: SessionID, filter: a filters that should be set for the session with SessionID
*/

function setFilters(sessionID, filter){
    if(sessionID == null){
        console.error("couldnt set filters, no session ID provided"); 
    }
    const session = mapUser(sessionID);  
    console.log("setting Parameters for SessionID" + sessionID); 
    if(!session.filters.includes(filter)){
            session.filters.push(filter); 
            sessionMap.set(sessionID, session); 
    }
    session.filters.foreach((f) => {console.log(f)}); 
}

/*
Description: updates the passed parameters for the session 
Parameter: SessionID, parameters[] 

*/

function updatePreferences(sessionID, parameters){
    const session = mapUser(sessionID); 
    Object.entries(parameters).foreach((k) => {
        if(!session.parameters[k]){
            session.parameters[k] = parameters[k]; 
        }else{
            session.parameters[k] += parameters[k]; 
        }
    }); 
    sessionMap.set(sessionID, session); 
}

