import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasContext= createContext();

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPagina,setTotalPagina] = useState(0);
    const [cargando, setCargando] = useState(false);

    const appKey= import.meta.env.VITE_API_KEY;
    useEffect(() =>{
        const consultarAPI = async () =>{
            setCargando(true);
            try {
                const url= `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${appKey}`;
                const { data } = await axios(url);
                setNoticias(data.articles);
                setTotalPagina(data.totalResults);
                setPagina(1);
            } catch (error) {
                console.log(error);
            }
            finally{
               setCargando(false);
            }
        }
        consultarAPI();
    },[categoria])
    const handleCategoria= e => {
        setCategoria(e.target.value);
    }
    useEffect(() =>{
        const consultarAPI = async () =>{
            setCargando(true);
            try {
                const url= `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${appKey}`;
                const {data } = await axios(url);
                setNoticias(data.articles);
                setTotalPagina(data.totalResults);
            } catch (error) {
                console.log(error);
            }
            finally{
                setCargando(false);
            }
        }
        consultarAPI();
    },[pagina])

    const handlePagina = (e, valor) => {
        setPagina(valor);
    }
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleCategoria,
                noticias,
                totalPagina,
                handlePagina,
                pagina,
                cargando
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext;