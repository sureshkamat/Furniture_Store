import { Heading } from "@chakra-ui/react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import styled from "styled-components";
const Services = () => {
    const services = [
        {
            id: 1,
            icon: <GiCompass />,
            title: "Mission",
            text: "Since the very beginnging, it was our primary objective to provide goods that keeps our Carbon Footprint in mind. We spend 30% Less energy while manufacturing our products.",
        },
        {
            id: 2,
            icon: <GiDiamondHard />,
            title: "Vision",
            text: "We want to reach Carbon Neutrality by using Vegan Leather, Recycling Materials and being Renewable Energy Compliant. We plan on achieving a negative carbon footprint on the planet by 2024.",
        },
        {
            id: 3,
            icon: <GiStabbedNote />,
            title: "History",
            text: 'We have a rich history of being the only remaining institution that still produces "Living-Art" the Old-Fashioned Way. We have 30 Years of heritage and expertise that makes us the best at what we do.',
        },
    ];
    
    return ( <div style={{marginBottom:"30px"}}>
        <Wrapper style={{backgroundColor:"#EADED7"}}>
            <div className="section-center" style={{margin:"30px"}}>
                <article className="header">
                    <Heading>
                        Custom. Bespoke. <br /> Built Only For You.
                    </Heading>
                    <p>
                        One doesn't buy a Rolex to just simply tell the time. One buys a
                        Rolex because it is something that they get to commemorate an
                        achievement and then pass it on to their children. Here, at{" "}
                        <b>FURNITURE STORE</b>, we firmly believe this.
                        <br />
                        Our Products are Tailor-Made to fit your needs and requirements.
                        They are made with high precision and low tolerance in mind, so
                        much so that we certify each and every item in our Catalogue with
                        a Lifetime-Warranty.
                    </p>
                </article>
                <div className="services-center" >
                    {services.map((service) => {
                        const { id, icon, title, text } = service;
                        return (
                            <article className="service" key={id} style={{backgroundColor:"#C5A491", border:"1px solid #C4C4C4", borderRadius:"10px"}}>
                                <span className="icon" style={{backgroundColor:"whiteSmoke", border:"1px solid"}}>{icon}</span>
                                <Heading>{title}</Heading>
                                <p>{text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
        </div>
    );
};

const Wrapper = styled.section`
    h3 {
        line-height: 3rem;
    }
    h4 {
        color: var(--clr-primary-1);
    }
    padding: 5rem 0;

    background: var(--clr-primary-10);

    .header h3 {
        margin-bottom: 0rem;
    }
    p {
        margin-bottom: 0;
        line-height: 1.8;
        color: var(--clr-primary-3);
    }
    .services-center {
        margin-top: 2.5rem;
        display: grid;
        gap: 2.5rem;
        p {
            text-align: justify;
        }
    }
    .service {
        background: var(--clr-primary-7);
        text-align: center;
        padding: 2.5rem 2rem;
        border-radius: var(--radius);
        p {
            color: var(--clr-primary-2);
        }
    }
    span {
        width: 4rem;
        height: 4rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        margin-bottom: 1rem;
        border-radius: 50%;
        background: var(--clr-primary-10);
        color: var(--clr-primary-1);
        svg {
            font-size: 2rem;
        }
    }
    @media (min-width: 992px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 576px) {
        .services-center {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 1280px) {
        padding: 0;
        .section-center {
            transform: translateY(5rem);
        }
    }
`;
export default Services;
