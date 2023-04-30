import styled from "styled-components";

export const MenuLatBTN = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: #f55;
    top: 20vh;
    left: ${props => props.menuIsOpen ? '270px' : '-30px'};
    z-index: 11;
    background: rgba(2, 0, 14, 0.82);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 4px;
    border: 1px solid #002a51;
    transition: .5s ease;

    @media (max-width: 768px) {
        /* Estilos para dispositivos móveis com largura máxima de 768px */
        left: ${props => props.menuIsOpen ? 'calc(80% + 20px)' : '-30px'};
    }

    .openMenuContent{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        
    }
    .iconOpenMenu{
        color: wheat;
        font-size: 18px;
        /* background: black ; */
        margin-right: -25px;
        transition: .5s ease;
        transform: rotate(180deg);
        transform: ${props => props.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }


`

export const MenuLatConteiner = styled.div`
    position: absolute;
    width: 300px;
    transition: .5s ease;
    width: ${props => props.menuIsOpen ? '300px' : '0px'};
    height: 100vh;
    background: rgba(2, 0, 14, 0.82);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 13 ;
    overflow: hidden;



    @media (max-width: 768px) {
        /* Estilos para dispositivos móveis com largura máxima de 768px */
        width: ${props => props.menuIsOpen ? '90%' : '0px'};
    }

    &::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: red;
    }


    .boxes_MenuLatConteiner{
        display: flex;
        flex-direction: column;
        
        width: 100%;

        
        /* animation: ${props => props.menuIsOpen ? 'menuDisplayEfects  9s ease forwards' : 'none'}; */
        opacity: ${props => props.menuIsOpen ? '1' : '0'};
        transition: ease 1s;
    }


    .boxes_MenuLatConteiner:nth-child(1){
        flex-direction: row;
        height: 20%;
        /* background: violet; */

        border-bottom: 1px solid #202022;


        .user_infos{
            display: flex;
            height: 100%;
        }

        .user_infos:nth-child(1){
            justify-content: center;
            align-items: center;
            width: 40%;
            /* background: silver ; */


            .user_infos_avatar{
                width: 80%;
                transition: all;
            }
        }

        .user_infos:nth-child(2){
            width: 30%;   
        }

        .user_infos:nth-child(3){
            width: 30%;
        }
    }
    .boxes_MenuLatConteiner:nth-child(2){
        height: 50%;
        padding-top: 00px;
        /* background: silver; */


        p{
            color: white;
            margin-left: 10px;
            text-transform: uppercase;
            margin-bottom: 2px;
            margin-top: 20px;
        }
        .nav_MenuLatConteiner{
            width: 100%;
            height: 100%;
            /* background: red; */
            border-bottom: 1px solid #202022;
            
            ul{
                height: auto;
                display: flex;
                flex-direction: column;
                margin: 2px;
                /* background: blue; */


                li{  
                    margin: 5px 10px;
                    list-style: none;
                }
                
                
                .link_MenuLatConteiner{
                    font-size: .7em;
                    text-decoration: none;

                    font-weight: 600;
                    text-transform: uppercase;
                    color: white;
                }
            }
        }
        @keyframes menuDisplayEfects {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }


    }
    .boxes_MenuLatConteiner:nth-child(3){
        height: 30%;
        /* background: slategrey; */
    }


`