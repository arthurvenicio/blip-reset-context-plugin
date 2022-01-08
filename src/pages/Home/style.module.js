import styled from 'styled-components';


export const Container = styled.div`    
    /* background: #FFFFFF; */
    font-family: "Nunito Sans","Tahoma","Helvetica","Arial",sans-serif;
    font-weight: 700;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
`;

export const Box = styled.div`
    width: 20%;
    height: 8rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    form{
        input {
            background: transparent;
            border: 1px solid #ddd;
            border-radius: 0.2rem ;
            font-family: "Nunito Sans", sans-serif;
            font-weight: 600;
            width: 15rem;
            padding: 0.5rem;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        button{
            width: 40%;
            padding: 0.7rem;
            border: none;
            border-radius: 0.5rem;
            font-family: "Nunito Sans", sans-serif;
            font-weight: 700;
            color: #fff;
            
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.14rem;

            background-color: #245AD5;

            &:hover{
                cursor: pointer;
            }

            .icon{
                color: #fff;
            }
        }
    }

`;
