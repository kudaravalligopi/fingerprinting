export class FingerprintJSON {
    
    tableName: string
    sourceName: string
    zoneName: string
    type: string
    columns: string[] = []


    constructor(values: Object={}){
        Object.assign(this, values)
    }
}
