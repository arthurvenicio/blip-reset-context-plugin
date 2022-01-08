/* eslint-disable react/jsx-no-bind */
import React,{ useState } from 'react';
import { GrTrash } from 'react-icons/gr';
import {Header} from './components/Header/index';
import {Input} from './components/Input';
import * as S from './style.module';



const Home = () => {
    const [data, setData] = useState({});

    function onChange(ev){
        const {name, value} = ev.target;
        const newData = {...data, [name]: value};
        setData(newData);
    }

    function onSubmit(ev){
        ev.preventDefault();
        if(window.confirm("Deseja mesmo realizar isso?")){
            alert(`O numero ${data.phoneNumber} foi resetado com sucesso!`);
        }
    }
    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <S.Container>
                <Header />
                <S.Box>
                    <form onSubmit={onSubmit}>
                        <Input type="text" name="phoneNumber" onChange={onChange}/> 
                        <button type="submit"><GrTrash className="icon"/>Resetar</button>
                    </form>
                </S.Box>
            </S.Container>
        </div>
    );
};

Home.propTypes = {};

export default Home;
