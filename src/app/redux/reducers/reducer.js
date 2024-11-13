import { init } from "../init";

const appReducer=(state=init,action)=>{
    switch(action.type){ 
        case 'NAME_UPDATE':
            return {
                ...state,
                name:action.name
            }
            
            case 'LOC_UPDATE':
            return {
                ...state,
                loc:action.loc
            }
            default:
                return state;
    }
}
export default appReducer;