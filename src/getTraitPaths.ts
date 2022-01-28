import * as fs from "fs"

const traitsBasePath = "./public/traits"

export default function getTraitPaths() {
    const traitTypes = fs.readdirSync(traitsBasePath)
    console.log(traitTypes) 
}