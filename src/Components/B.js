import C from "./C";

function B({name}){
    return <p>This tag is P tag from B component <br />{name}<C surname={name}/></p>

}
export default B;