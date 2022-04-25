import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Header } from './components/Header/index';
import { InputNumber } from './components/BlipInput';
import {
    startLoading,
    stopLoading,
    showToast,
    showModal
} from '../../services/common-service';

import * as S from './style.module';
import { resetUser } from '../../services/application-service';

const Home = () => {
    const initValue = {
        phoneNumber: '',
        text: '',
        indenty: '',
        code: '+55'
    };
    const [data, setData] = useState(initValue);

    function onChangeI(ev) {
        const { value, code } = ev.detail;
        const name = 'indenty';
        const name2 = 'phoneNumber';
        const codeF = code.replace(/\D/g, '');
        const valueF = `${codeF}${value}@wa.gw.msging.net`;
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
            data.indenty === `${data.code}@wa.gw.msging.net` ||
            data.indenty === ''
        ) {
            return false;
        }
        return true;
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const result = validateForm();

        if (result) {
            const { response } = await showModal({
                title: 'Deseja realizar essa ação?',
                body: `Resetar o numero ${data.phoneNumber}`,
                confirm: 'Confirmar ',
                cancel: 'Cancelar'
            });

            if (response) {
                startLoading();
                try {
                    await resetUser(data.indenty);
                    stopLoading();
                    showToast({
                        type: 'success',
                        message: `O numero ${data.phoneNumber} foi resetado!`
                    });
                    window.location.reload();
                } catch (e) {
                    stopLoading();
                    showToast({
                        type: 'warning',
                        title: 'Ocorreu um erro durante a operação',
                        message: `O numero ${data.phoneNumber} não foi encontrado`
                    });
                }
            }
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
                    <S.Author>
                        Plugin criado por{' '}
                        <a
                            href="https://take.workplace.com/profile.php?id=100074521764456"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Arthur Venício
                        </a>
                    </S.Author>
                </S.Box>
            </S.Container>
        </div>
    );
};

Home.propTypes = {};

export default Home;
