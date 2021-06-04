import React, { useEffect, useState } from 'react';
import Header from '../Header/';
import { GlobalStyle, ListPersona, LiList, ImgPersona, Paragraph } from '../../styles/styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Persona() {
    const [personas, setPersonas] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    // Funcao para scroll infinito
    async function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        await loadPersonas();
    }

    // Função para pegar os dados do banco e exibir na tela
    async function loadPersonas() {
        if (loading) {
            return null;
        }

        if (total > 0 && personas.length === total) {
            return null;
        }

        setLoading(true);

        const response = await api.get('/', { params: { page } });

        setPersonas(personas => [...personas, ...response.data]);
        setTotal(response.headers['X-Total-Count']);
        setPage(page => page + 1);
        setLoading(false);
    }

    // Mostrando todos os dados ao exibir a tela
    useEffect(() => {
        loadPersonas();
    }, []);

    // Carregando scroll infinito
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, page, total]);

    async function handleAttribute(id, e) {
        e.preventDefault();

        try {
            history.push({ pathname: '/attributes', state: { id: id } })
        } catch (error) {
            alert('Something is wrong.')
        }
    }

    return (
        <GlobalStyle>
            <Header />

            <ListPersona>
                {personas.map(persona => (
                    <LiList key={persona.id} onClick={(e) => handleAttribute(persona.id, e)}>
                        <ImgPersona src={persona.image} alt={persona.name} />
                        <Paragraph><strong>{persona.name}</strong></Paragraph>
                    </LiList>
                ))}
            </ListPersona>
        </GlobalStyle>
    );
}