export const number = 5;

export const UseReducer = (state: any, action: { type: any; payload: { numero: any; }; }) => {
    switch(action.type){
        case 'save':
            return action.payload.numero;
        break;
        default:
            return 0;
    }
}