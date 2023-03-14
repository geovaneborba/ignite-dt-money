import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ((min-width: 320px) and (max-width: 425px)) {
    gap: 1rem;

    img {
      width: 6rem;
    }
  }
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }

  @media ((min-width: 320px) and (max-width: 425px)) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`
