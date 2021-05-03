const fs = require('fs');

export default class Configurator{
    static config;
    static load(path){
        this.config = JSON.parse(fs.readFileSync(path));
        return this;
    }
}