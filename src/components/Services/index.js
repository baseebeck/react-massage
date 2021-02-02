import React from 'react';
import Icon1 from '../../images/calendar.svg'
import Icon2 from '../../images/dog-walk.svg'
import Icon3 from '../../images/happy.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Online Booking</ServicesH2>
                <ServicesP>Schedule, change or cancel appointments online.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Discounts, priority booking, wellness tips and more.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Pain-free Living</ServicesH2>
                <ServicesP>Eliminate muscle tension and enjoy your life.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;
