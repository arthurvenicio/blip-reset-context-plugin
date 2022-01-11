import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Header } from './components/Header/index';
import * as S from './style.module';
import { InputNumber } from './components/BlipInput';

const Home = () => {
    const [data, setData] = useState({});

    function onChangeI(ev) {
        const { value, code } = ev.detail;
        const name = 'indenty';
        const name2 = 'phoneNumber';
        const valueF = `${code}${value}@wa.gw.msging.net`;
        const valueF2 = `+55${value}`;
        const newDate = {
            ...data,
            [name]: valueF,
            [name2]: valueF2,
            code
        };
        setData(newDate);
    }

    function validateForm() {
        if (
            Object.keys(data).length === 0 ||
            data.indenty === `${data.code}@wa.gw.msging.net`
        ) {
            return false;
        }
        return true;
    }

    function onSubmit(ev) {
        ev.preventDefault();
        const result = validateForm();
        if (result) {
            if (window.confirm('Deseja mesmo realizar isso?')) {
                alert(`O numero ${data.phoneNumber} foi resetado com sucesso!`);
            }
        } else {
            console.error('Field is invalid!');
        }
    }

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <S.Container>
                <Header />
                <S.Box>
                    <form onSubmit={onSubmit}>
                        <InputNumber
                            label="Numero de telefone"
                            value="+55"
                            onCountryChange={(ev) => onChangeI(ev)}
                            requiredErrorMessage="Esse campo não pode ficar vazio"
                            required
                        />
                        <button type="submit">
                            <BsFillTrashFill color="white" />
                            Resetar
                        </button>
                    </form>
                </S.Box>
            </S.Container>
        </div>
    );
};

Home.propTypes = {};

export default Home;
