import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export default function Voltar() {
    return (<Link className="align-items-center btn btn-secondary d-flex gap-1 justify-content-center" style={{width: "300px"}} to="/"> <TiArrowBack  />voltar</Link>)
}