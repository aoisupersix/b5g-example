import { render, getDefaultMapData } from 'b5g'
import * as fse from 'fs-extra'
import path from 'path'

const templateDir = path.join(__dirname, '..', 'templates')
const outputDir = path.join(__dirname, '..', 'output')

if (!fse.existsSync(outputDir)) {
    fse.mkdirsSync(outputDir)
    console.log(`create directory to save result: ${outputDir}`)
}

getDefaultMapData().then(mapData => {
    fse.writeFile(path.join(outputDir, 'mapData.json'), JSON.stringify(mapData))
    const template = fse.readFileSync(path.join(templateDir, 'astDefinition.mst'), 'utf8')
    const renderedTemplate = render(template, mapData)
    fse.writeFile(path.join(outputDir, 'astDefinition.cs'), renderedTemplate)
}).catch(error => console.error(error))
