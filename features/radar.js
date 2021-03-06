const mem = require("memoryjs");
const settings = require("../settings.json");

module.exports.execute = function(offsets) {
    for (var i = 1; i < 65; i++){
        var dwEntity =  mem.readMemory(offsets.temp.dwClientDllBaseAddress + offsets.dwEntityList + (i - 1) * offsets.m_EntLoopDist, "int");
        mem.writeMemory(dwEntity + offsets.m_bSpotted, 1, "int");
    }
}

module.exports.settings = {
    delay: 400,
    enabled: settings.radar.enabled
}