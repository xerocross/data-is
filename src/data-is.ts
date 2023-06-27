type DataTypes = {
    [key: string] : (arg:any) => boolean
}
type verifyFunction = (x:any) => boolean;
const UndefinedTypeException = new Error("we-assert: undefined type");


export default {
    build : function () {
        const types:DataTypes = {};
        const data = {
            define : {
                type : function (typeName:string, vEval :verifyFunction ) :void {
                    types[typeName] = vEval;
                }
            },
            element (data: any) {
                return {
                    is (dataTypeString:string) : boolean {
                        if (types[dataTypeString]) {
                            return types[dataTypeString](data);
                        } else {
                            throw UndefinedTypeException;
                        }
                    }

                };
            }
        };
        return data;
    }
};