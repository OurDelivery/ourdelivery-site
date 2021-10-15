import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Organize Pedidos</ServicesH2>
                    <ServicesP>Ajudamos na sua organização e aumentamos sua receita geral.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Pedidos Online</ServicesH2>
                    <ServicesP>Os clientes vão até você em nossa plataforma online, em qualquer lugar do mundo..</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduza Despesas</ServicesH2>
                    <ServicesP>Tempo é dinheiro e com nossa plataforma você ganha tempo e dinheiro.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
