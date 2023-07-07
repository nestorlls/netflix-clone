import { styled } from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .input {
    width: 100%;
    padding: 0.8rem;
    background: rgba(54, 54, 54, 1);
    border: none;
    color: white;
    border-radius: 5px;

    &:focus {
      outline: none;
      background: rgba(54, 54, 54, 0.7);
    }

    &::placeholder {
      color: white;
      opacity: 0.9;
      font-size: 0.85rem;
      letter-spacing: 0.8px;
    }
  }
`;

export default FieldWrapper;
