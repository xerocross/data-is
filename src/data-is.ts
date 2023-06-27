type DataTypes = {
    [key: string] : (arg:any) => boolean
}
type verifyFunction = (x:any) => boolean;
const UndefinedTypeException = new Error("we-assert: undefined type");




export default {
    build : function () {

        const $isA = (element:any, dataTypeString:string) : boolean => {
            if (types[dataTypeString]) {
                return types[dataTypeString](element);
            } else {
                throw UndefinedTypeException;
            }
        };



        const types:DataTypes = {};
        const data = (element:any) => {
            const is = (dataTypeString:string) => {
                return $isA(element, dataTypeString);
            };
            is.a = (dataTypeString:string) => $isA(element, dataTypeString);
            is.an = (dataTypeString:string) => $isA(element, dataTypeString);
            return {is};
        };
        data.define = {
            type : function (typeName:string, vEval :verifyFunction ) :void {
                types[typeName] = vEval;
            }
        };
        data.element = (element: any) => {
            const is = (dataTypeString:string) => {
                return $isA(element, dataTypeString);
            };
            is.a = (dataTypeString:string) => $isA(element, dataTypeString);
            is.an = (dataTypeString:string) => $isA(element, dataTypeString);
            return {is};
        };
        return data;
    }
};