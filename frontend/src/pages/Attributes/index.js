import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { GlobalStyle, CardDetail, CardImage, ImgPersonaTitle, LineSeparator, CardSubDetailGrid, CardSubDetailFlex, Title, Subtitle, CardSubDetailFlexStatus, SubtitleStatus, ImgStatus, Paragraph } from '../../styles/styles';
import Header from '../Header';
import Alive from '../../assets/alive.png'
import Dead from '../../assets/dead.png';
import Unknown from '../../assets/unknown.png';
import api from '../../services/api';


export default function Attributes() {

    const location = useLocation();
    const history = useHistory();
    const [attributes, setAttributes] = useState([]);

    if (typeof (location.state) === 'undefined') {
        history.push('/');
    }

    function Status(props) {
        const status = props.status;
        if (status === 'Alive' || status === 'alive') {
            return <ImgStatus src={Alive} alt="Alive" />
        }

        if (status === 'Dead' || status === 'dead') {
            return <ImgStatus src={Dead} alt="Alive" />
        }

        if (status === 'Unknown' || status === 'unknown') {
            return <ImgStatus src={Unknown} alt="Alive" />
        }
    }

    useEffect(() => {
        api.get('/attributes', {
            headers: {
                persona_id: location.state.id
            }
        }).then(response => {
            setAttributes(response.data);
        });
    }, [location.state.id]);


    return (
        <GlobalStyle>
            <Header />

            { attributes.map(attribute => (
                <div key={attribute.id}>
                    <CardDetail>
                        <CardImage>
                            <ImgPersonaTitle src={attribute.image} alt={attribute.name} />
                        </CardImage>

                        <CardSubDetailGrid>
                            <CardSubDetailFlex>
                                <Title>{attribute.name}</Title>
                            </CardSubDetailFlex>

                            <CardSubDetailFlex>
                                <Status status={attribute.status} />
                                <Subtitle>{attribute.status} - {attribute.specie}</Subtitle>
                            </CardSubDetailFlex>

                            <CardSubDetailFlexStatus>
                                <SubtitleStatus>Last known location:</SubtitleStatus>
                                <Paragraph>{attribute.locality}</Paragraph>
                            </CardSubDetailFlexStatus>

                            <CardSubDetailFlexStatus>
                                <SubtitleStatus>First seen in:</SubtitleStatus>
                                <Paragraph>{attribute.description}</Paragraph>
                            </CardSubDetailFlexStatus>

                        </CardSubDetailGrid>
                    </CardDetail>
                </div>
            ))
            }

        </GlobalStyle >
    );
}