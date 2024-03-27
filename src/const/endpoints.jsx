// const SERVER= "http://192.168.1.142:8080/"
const SERVER= "http://localhost:8080/"
// const SERVER ="https://846d-91-227-219-94.ngrok-free.app/"

const endpoints = {
    registration: SERVER+ "api/account/registration/",
    login: SERVER + "api/account/login/pin/",
    addDevice: SERVER + "api/device/add/",
    getAllAquarium: SERVER + "api/device/aquarium/get/all/",
    getAquarium: SERVER + "api/device/aquarium/get/",   //+id/
    setAquariumColor: SERVER + "api/device/aquarium/set/color/", //+id/,
    setAquariumLedTime: SERVER + "api/device/aquarium/set/led/", //+id/
    setAquariumFluoTime: SERVER + "api/device/aquarium/set/fluo/" //+id/


}

export default endpoints