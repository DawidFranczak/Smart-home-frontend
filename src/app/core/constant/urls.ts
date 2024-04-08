const SERVER= "http://localhost:8080/"
// const SERVER = "https://dashing-cod-pretty.ngrok-free.app" + "/"

export const URLS = {
    registration: SERVER+ "api/account/registration/",
    login: SERVER + "api/account/login/pin/",

    // Device
    addDevice: SERVER + "api/device/add/",
    getAllDevices: SERVER + "api/device/get/all/",
    updateDevice:SERVER + 'api/device/update/', //+id/
    deleteDevice:SERVER + "api/device/delete/", //+id/updateArray

    // Aquarium
    getAllAquarium: SERVER + "api/device/aquarium/get/all/",
    getAquarium: SERVER + "api/device/aquarium/get/",   //+id/
    setAquariumColor: SERVER + "api/device/aquarium/set/color/", //+id/,
    setAquariumLedTime: SERVER + "api/device/aquarium/set/led/", //+id/
    setAquariumFluoTime: SERVER + "api/device/aquarium/set/fluo/", //+id/
    setAquariumMode:SERVER + "api/device/aquarium/set/mode/", //+id/
    setAquariumLedMode:SERVER + "api/device/aquarium/set/ledMode/", //+id/
    setAquariumFluoMode:SERVER + "api/device/aquarium/set/fluoMode/", //+id/

}