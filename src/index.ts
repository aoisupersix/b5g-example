import { render, getDafaultMapData } from 'b5g'
import * as fse from 'fs-extra'
import path from 'path'

getDafaultMapData().then(mapData => {
    fse.writeFile(path.join(__dirname, 'mapData.json'), JSON.stringify(mapData))
    console.log(__dirname)
}).catch(error => console.error(error))
