import './RequestCep.css';
import { useEffect, useState } from "react";
import axios from "axios";



function RequestCep( ) {
    const [cep, setCep] = useState("");
    const [data, setData] = useState("");
    console.log(data)
    // const { cep } = props;

    useEffect(() => {
      const request = async () => {
        try {
          const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/` );
          if (response.data.erro) alert ("cep inválido")
          setData(response.data);
      }
      catch (error) {
        console.log("Erro")
      }
    }
      if (cep.length === 8) request();
    }, [cep]);
  
   return  (
   
   <form className='form'> 
     <h2>Encontre os dados do endereço pelo <u>cep</u> informado:</h2>

     <label htmlFor="#form-cep"> Digite o CEP: </label>
     <input id="form-cep" type="text" maxLength="8" onChange={ (event) => {
     setCep (event.target.value); } } /> 

     <label htmlFor="#form-logradouro"> Logradouro: </label>
     <input id="form-logradouro" type="text" defaultValue= {data.logradouro?data.logradouro :""} />

     <label htmlFor="#form-bairro"> Bairro: </label>
     <input id="form-bairro" type="text" defaultValue= {data.bairro?data.bairro: ""} />

     <label htmlFor="#form-localidade"> Localidade: </label>
     <input id="form-localidade" type="text" defaultValue= {data.localidade?data.localidade: "" } />

     <label htmlFor="#form-uf"> Estado: </label>
     <input id="form-uf" type="text" defaultValue= {data.uf?data.uf:""} />
           
    </form>
   )
}

export default RequestCep;    