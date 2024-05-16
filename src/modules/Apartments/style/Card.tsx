import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  color: var(--color-grey-800);
`;

export const Price = styled.p`
  font-size: 16px;
  color: var(--color-grey-600);
  margin: 4px 0;
`;

export const Details = styled.p`
  font-size: 14px;
  color: var(--color-grey-600);
  margin: 4px 0;
`;

export const ClickableCard = styled(Card)`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  text-align: center;
`;
