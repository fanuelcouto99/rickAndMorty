import styled from 'styled-components';

export const GlobalStyle = styled.div`
    padding: 1rem;
    max-width: 1100px;
    margin: auto;
`;

export const HeaderApplication = styled.header`
    margin-bottom: 15px;
    display: flex;
    border-bottom: 2px solid #203144;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    img {
        width: 200px;
        display: block;
        margin-right: auto;
    }
`;

export const ListPersona = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 15px;
    text-align: center;
    position: relative;
    margin: auto;
    list-style: none;
`;

export const LiList = styled.li`
    cursor: pointer;
    width: 12rem auto;
    align-items: center;
    background: #203144;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 3px rgba(66,153,225,.5);
    }
`;

export const ImgPersona = styled.img`
    width: 150px;
    border-radius: 4px;
    display: block;
    margin: auto;
`;

export const Paragraph = styled.p`
    color: #FFFFFF;
    line-height: 21px;
    font-size: 16px;
    margin-top: 12px;
`;

export const CardDetail = styled.div`
    background: #203144;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
`;

export const CardImage = styled.div`
    width: 200px;
    float: left;
    margin-right: 60px;
`;

export const ImgPersonaTitle = styled.img`
    width: 300px;
    display: block;
    margin: auto;
    border-radius: 8px 0px 0px 8px;
`;

export const LineSeparator = styled.hr`
    border: 2px solid #203144;
    margin-bottom: 20px;
`;

export const CardSubDetailGrid = styled.div`
    display: grid;
    align-items: center;
    position: relative;
    margin-left: 70px;
`;

export const CardSubDetailFlex = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    color: #FFFFFF;
    display: block;
`;

export const Subtitle = styled.h2`
    color: #FFFFFF;
`;

export const ImgStatus = styled.img`
    width: 15px;
    margin-right: 15px;
`;

export const CardSubDetailFlexStatus = styled.div`
    display: grid;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
`;

export const SubtitleStatus = styled.h2`
    color: #919e9e;
`;