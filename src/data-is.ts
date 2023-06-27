type DataTypes = {
    [key: string] : (arg:any) => boolean
}
type verifyFunction = (x:any) => boolean;
const UndefinedTypeException = new Error("we-assert: undefined type");


export default {
    build : function () {
        const types:DataTypes = {};
        const data = (element?:any) => {
            return {
                is (dataTypeString:string) : boolean {
                    if (types[dataTypeString]) {
                        return types[dataTypeString](element);
                    } else {
                        throw UndefinedTypeException;
                    }
                }
            };
        };
        data.define = {
            type : function (typeName:string, vEval :verifyFunction ) :void {
                types[typeName] = vEval;
            }
        };
        data.element = (element: any) => {
            return {
                is (dataTypeString:string) : boolean {
                    if (types[dataTypeString]) {
                        return types[dataTypeString](element);
                    } else {
                        throw UndefinedTypeException;
                    }
                }
            };
        };
        return data;
    }
};