import styled from "styled-components";

const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 550px;
    background-image: url('/test-image.webp');
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;

    @media (max-width: 900px) {
        height: 400px;
    }
`;

const BannerText = styled.div`
    width: 100%;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 9rem;
    font-weight: 700;

    @media (max-width: 900px) {
        font-size: 6rem;
    }

    @media (max-width: 500px) {
        font-size: 4.3rem;
    }
`;

function Display() {
    return (
        <BannerContainer>
            <BannerText>Your Next Story Will Start With Us</BannerText>
        </BannerContainer>
    );
}

export default Display;
