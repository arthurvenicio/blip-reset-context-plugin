/* eslint-disable arrow-body-style */
import React from 'react';

import { GrDocumentUser } from 'react-icons/gr';
import * as S from './style.module';

export const Header = () => {
    return(
        <S.Header>
            <S.Title><GrDocumentUser /> Reset User Context</S.Title>
        </S.Header>
    );
};