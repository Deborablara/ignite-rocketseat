import styled from 'styled-components'

export const Container = styled.div`

  margin-top: 4rem;

  table{ 
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th{
    color: var(--text);
    font-weight: 400;
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 2rem;
  }

  td{
    padding: 1rem 2rem;
    border:0;
    background: var(--shape);
    color: var(--text);
    text-align: left;
    border-radius: 0.25rem;


  &:first-child{
    color: var(--title);
  }

  &.deposit{
    color: var(--green);
  }

  &.wichdraw {
    color: var(--red);
  }
  }



`