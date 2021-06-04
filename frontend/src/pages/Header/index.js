import React from 'react';
import Logo from '../../assets/logo.png';
import { HeaderApplication } from '../../styles/styles';
import { useHistory } from 'react-router-dom';

export default function Header() {

    const history = useHistory();

    async function handleHome(e){
        e.preventDefault();

        try {
            history.push({pathname: '/'});
        } catch(error){
            alert('Something is wrong.');
        }
    }

    return (
        <HeaderApplication>
            <img src={Logo} alt="Logo" style={{cursor: 'pointer'}} onClick={(e) => handleHome(e)} />
        </HeaderApplication>
    );
}