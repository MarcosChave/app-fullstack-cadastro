import styled from 'styled-components' //biblioteca de estilização podendo misturar css com js.
import Background from '../../Assets/background1.svg'

//componente sempre com letra MAIÚSCULA!

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: url('${Background}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 20px;
`
export const Image = styled.img``

export const ContainerItens = styled.div`
  min-height: calc(100vh - 170px);
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
`

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 25px;
`

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 21px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
