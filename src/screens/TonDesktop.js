import React, { Component } from "react";
import styled, { css } from "styled-components";

function TonDesktop(props) {
    return (
        <>
            <Header>
                <HeadStack>
                    <Head>
                        <NftRow>
                            <Nft>NFT</Nft>
                            <WhitePaper>White Paper</WhitePaper>
                            <Blog>Blog</Blog>
                            <Button2>
                                <ButtonOverlay>
                                    <Connect2>Connect</Connect2>
                                </ButtonOverlay>
                            </Button2>
                        </NftRow>
                    </Head>
                    <Logo src={require("../assets/images/Logo.png")}></Logo>
                </HeadStack>
            </Header>
            <BodyTop>
                <Rect2Stack>
                    <Rect2>
                        <HeaderText>
                            Создавай, продвигай и получай больше прибыли
                        </HeaderText>
                        <SubheadTopTextStack>
                            <SubheadTopText>
                                Самый простой способ принимать криптоплатежи в TON &amp; USDT,
                                организовывать продажи NFT-коллекций и любого цифрового продукта
                                в Telegram.
                            </SubheadTopText>
                            <More src={require("../assets/images/more.png")}></More>
                            <Telegram
                                src={require("../assets/images/telegram.png")}
                            ></Telegram>
                        </SubheadTopTextStack>
                    </Rect2>
                    <Image src={require("../assets/images/image_2.png")}></Image>
                </Rect2Stack>
            </BodyTop>
            <BodyCosmoton>
                <CosmotonBodyStack>
                    <CosmotonBody>
                        <TonImgStack>
                            <TonImg src={require("../assets/images/Frame_64.png")}></TonImg>
                            <CosmoTon>CosmoTon</CosmoTon>
                        </TonImgStack>
                        <Subheadline_1>Готовое технологическое решение</Subheadline_1>
                        <Invest>
                            <Rect4>
                                <InvestTxt>Удобный способ инвестиционных начислений</InvestTxt>
                            </Rect4>
                        </Invest>
                        <PartnerProgRow>
                            <PartnerProg>
                                <Rect5>
                                    <LoremIpsum5>Готовая партнерская программа</LoremIpsum5>
                                </Rect5>
                            </PartnerProg>
                            <MarketplaceNft>
                                <Rect6>
                                    <МаркетплейсNft>Маркетплейс NFT</МаркетплейсNft>
                                </Rect6>
                            </MarketplaceNft>
                        </PartnerProgRow>
                        <PaymentRow>
                            <Payment>
                                <Rect8>
                                    <ПриемПлатежей>Прием платежей</ПриемПлатежей>
                                </Rect8>
                            </Payment>
                            <MarletActivity>
                                <Rect7>
                                    <LoremIpsum6>Маркетинговая активность</LoremIpsum6>
                                </Rect7>
                            </MarletActivity>
                        </PaymentRow>
                    </CosmotonBody>
                    <PhoneImg
                        src={require("../assets/images/Rectangle_55.png")}
                    ></PhoneImg>
                </CosmotonBodyStack>
            </BodyCosmoton>
            <ForWhoSection>
                <ForWhom>Для кого мы работаем:</ForWhom>
                <Group14Row>
                    <Group14>
                        <CosmotonBody1>
                            <Image2
                                src={require("../assets/images/nft_collect.png")}
                            ></Image2>
                            <BodyHeader>Авторы NTF коллекций</BodyHeader>
                            <BodyHeader1>
                                Начисления дивидендов владельцам NFT. Быстрый запуск продаж и
                                маркетинга. Запуск партнерской программы.
                            </BodyHeader1>
                        </CosmotonBody1>
                    </Group14>
                    <CosmotonBody2>
                        <Image3 src={require("../assets/images/it_proj.png")}></Image3>
                        <ItProjes>IT проекты</ItProjes>
                        <BodyHeader3>
                            Инвест выплаты и начисления для клиентов. Расширить свою
                            клиентскую базу. Удобный способ приема денег. Запуск партнерской
                            программы.
                        </BodyHeader3>
                    </CosmotonBody2>
                    <Inv>
                        <CosmotonBody3>
                            <Image4 src={require("../assets/images/invest.png")}></Image4>
                            <BodyHeader4>Инвестиционные {"\n"}проекты</BodyHeader4>
                            <BodyHeader5>
                                Удобный способ принимать деньги, делать выплаты, продавать свои
                                цифровые продукты и интерфейс распределения прибыли.
                            </BodyHeader5>
                        </CosmotonBody3>
                    </Inv>
                    <CosmotonBody4>
                        <Image5 src={require("../assets/images/it_business.png")}></Image5>
                        <BodyHeader6>Информационный {"\n"}бизнес</BodyHeader6>
                        <BodyHeader7>
                            Организовать продажу билетов, курсов и обучения. Сделать бонусную
                            систему для реферального маркетинг.
                        </BodyHeader7>
                    </CosmotonBody4>
                </Group14Row>
            </ForWhoSection>
            <WhatCanYouDo>
                <Rect9>
                    <WhatUCanColumnRow>
                        <WhatUCanColumn>
                            <WhatUCan>С нами вы можете</WhatUCan>
                            <Group5>
                                <Image6Row>
                                    <Image6 src={require("../assets/images/tick.png")}></Image6>
                                    <Launch>Запустить PreSale или Sale</Launch>
                                    <Your>своей</Your>
                                    <NftCollection>NFT-коллекции</NftCollection>
                                </Image6Row>
                            </Group5>
                            <Group7>
                                <Image7Row>
                                    <Image7 src={require("../assets/images/tick.png")}></Image7>
                                    <LoremIpsum9>
                                        Использовать рекламный инструмент через виртуальную {"\n"}
                                        технологию чеки
                                    </LoremIpsum9>
                                </Image7Row>
                            </Group7>
                            <Group8>
                                <Image8Row>
                                    <Image8 src={require("../assets/images/tick.png")}></Image8>
                                    <LoremIpsum10>
                                        Создавать мультикошельки под разные проекты
                                    </LoremIpsum10>
                                </Image8Row>
                            </Group8>
                            <Group9>
                                <Image9Row>
                                    <Image9 src={require("../assets/images/tick.png")}></Image9>
                                    <LoremIpsum11>Запустить партнерскую программу</LoremIpsum11>
                                </Image9Row>
                            </Group9>
                            <Group10>
                                <Image10Row>
                                    <Image10 src={require("../assets/images/tick.png")}></Image10>
                                    <LoremIpsum12>
                                        Собрать аудиторию через наши рекламные инструменты
                                    </LoremIpsum12>
                                </Image10Row>
                            </Group10>
                            <Group11>
                                <Image11Row>
                                    <Image11 src={require("../assets/images/tick.png")}></Image11>
                                    <LoremIpsum13>
                                        Принимать оплаты за свои цифровые продукты
                                    </LoremIpsum13>
                                </Image11Row>
                            </Group11>
                            <Group12>
                                <Image12Row>
                                    <Image12 src={require("../assets/images/tick.png")}></Image12>
                                    <LoremIpsum14>
                                        Развернуть нужного вам бота в TG за 2 минуты
                                    </LoremIpsum14>
                                </Image12Row>
                            </Group12>
                            <MoreButton
                                src={require("../assets/images/Button.png")}
                            ></MoreButton>
                        </WhatUCanColumn>
                        <PhoneCoins
                            src={require("../assets/images/image_6.png")}
                        ></PhoneCoins>
                    </WhatUCanColumnRow>
                </Rect9>
            </WhatCanYouDo>
            <RoadmapGroup>
                <SliderStack>
                    <Slider src={require("../assets/images/Frame_60(1).png")}></Slider>
                    <RoadMapBack>
                        <Roadmap>Roadmap</Roadmap>
                        <Updated>
                            <ОбновленоRow>
                                <Обновлено>Обновлено:</Обновлено>
                                <Август2022>Август, 2022</Август2022>
                            </ОбновленоRow>
                        </Updated>
                        <RoadmapImage
                            src={require("../assets/images/Group_208.png")}
                        ></RoadmapImage>
                        <MarchRow>
                            <March>
                                <Март2022>Март 2022</Март2022>
                                <MarchContainerStack>
                                    <MarchContainer>
                                        <BulletsRow>
                                            <Bullets>
                                                <Bullet>•</Bullet>
                                                <Bullet1>•</Bullet1>
                                                <Bullet2>•</Bullet2>
                                            </Bullets>
                                            <СтартПроектаColumn>
                                                <СтартПроекта>Старт проекта</СтартПроекта>
                                                <ЗапускБотаCosmoTon>
                                                    Запуск бота CosmoTon
                                                </ЗапускБотаCosmoTon>
                                            </СтартПроектаColumn>
                                        </BulletsRow>
                                    </MarchContainer>
                                    <Стартпроекта2>Начало работы над платформой</Стартпроекта2>
                                </MarchContainerStack>
                            </March>
                            <April>
                                <Апрель2022>Апрель 2022</Апрель2022>
                                <AprilContainer1Stack>
                                    <AprilContainer1>
                                        <Bullets1>
                                            <Buller3>•</Buller3>
                                            <Bullet4>•</Bullet4>
                                        </Bullets1>
                                    </AprilContainer1>
                                    <Стартпроекта3>
                                        2 клиентские интеграции в {"\n"}проект
                                    </Стартпроекта3>
                                    <ЗапускботаCosmoTon1>
                                        Тесты системы и первый MVP {"\n"}проекта
                                    </ЗапускботаCosmoTon1>
                                    <Стартпроекта4></Стартпроекта4>
                                </AprilContainer1Stack>
                            </April>
                            <May>
                                <Май2022>Май 2022</Май2022>
                                <MayContainer2Stack>
                                    <MayContainer2>
                                        <Bullets2>
                                            <Buller4>•</Buller4>
                                        </Bullets2>
                                    </MayContainer2>
                                    <Стартпроекта5>Запуск своей коллекции NFT</Стартпроекта5>
                                    <Стартпроекта6></Стартпроекта6>
                                </MayContainer2Stack>
                            </May>
                            <June>
                                <Июнь2022>Июнь 2022</Июнь2022>
                                <JuneContainer3Stack>
                                    <JuneContainer3>
                                        <Bullets3Row>
                                            <Bullets3>
                                                <Bullet5>•</Bullet5>
                                                <Bullet6>•</Bullet6>
                                                <Bullet7>•</Bullet7>
                                            </Bullets3>
                                            <Стартпроекта7Column>
                                                <Стартпроекта7>Старт проекта</Стартпроекта7>
                                                <ЗапускботаCosmoTon2>
                                                    Запуск бота CosmoTon
                                                </ЗапускботаCosmoTon2>
                                            </Стартпроекта7Column>
                                        </Bullets3Row>
                                    </JuneContainer3>
                                    <Стартпроекта8>Начало работы над платформой</Стартпроекта8>
                                </JuneContainer3Stack>
                            </June>
                        </MarchRow>
                    </RoadMapBack>
                </SliderStack>
            </RoadmapGroup>
            <Partners>
                <Rect10>
                    <НашиПартнеры>Наши партнеры</НашиПартнеры>
                    <TonSocietyBRow>
                        <TonSocietyB>
                            <Ts src={require("../assets/images/tons.png")}></Ts>
                            <TonSocietyText>Ton Society</TonSocietyText>
                            <Text>Пространство для инвесторов</Text>
                        </TonSocietyB>
                        <CompName>
                            <CompNameB>
                                <Cn src={require("../assets/images/com_name.png")}></Cn>
                                <CompanyName>Company name</CompanyName>
                                <Text1>Пространство для инвесторов</Text1>
                            </CompNameB>
                        </CompName>
                        <GalacticGroup>
                            <GalaB>
                                <GalaImg src={require("../assets/images/galac.png")}></GalaImg>
                                <Galactic>Galactic</Galactic>
                                <Text2>Пространство для инвесторов</Text2>
                            </GalaB>
                        </GalacticGroup>
                        <Mojo>
                            <MojoB>
                                <MojoImg
                                    src={require("../assets/images/mojo)img.png")}
                                ></MojoImg>
                                <TonSociety3>Mojo</TonSociety3>
                                <Text3>Пространство для инвесторов</Text3>
                            </MojoB>
                        </Mojo>
                    </TonSocietyBRow>
                </Rect10>
            </Partners>
            <Footer>
                <FooterB>
                    <BasedOnRow>
                        <BasedOn>Based on</BasedOn>
                        <Ton5>TON</Ton5>
                        <Privacy>Privacy</Privacy>
                        <Terms>Terms</Terms>
                        <Cosmoton7>© 2022 Cosmoton</Cosmoton7>
                    </BasedOnRow>
                </FooterB>
            </Footer>
        </>
    );
}


const Header = styled.div`
  width: 1220px;
  height: 101px;
  flex-direction: column;
  display: flex;
  margin-left: 368px;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border:none
`;
const Head = styled.div`
  width: 1220px;
  height: 101px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  left: 0px;
  top: 50px;
  flex-direction: row;
  display: flex;
`;

const Nft = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(66,67,92,1);
  font-size: 18px;
  margin-top: 11px;
`;

const WhitePaper = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(66,67,92,1);
  font-size: 18px;
  margin-left: 22px;
  margin-top: 11px;
`;

const Blog = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(66,67,92,1);
  font-size: 18px;
  margin-left: 20px;
  margin-top: 11px;
`;

const Button2 = styled.div`
  width: 130px;
  height: 46px;
  background-color: rgba(73,106,235,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-left: 23px;
  border: none;
`;

const Connect2 = styled.span`
  font-family: Montserrat;
  alignment: center;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 18px;
  text-align: center;
  width: 80px;
  height: 22px;
  margin-top: 11px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 11px;
  
`;

const NftRow = styled.div`
  height: 46px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 14px;
  margin-left: 793px;
  margin-top: 28px;
`;

const Logo = styled.img`
  top: 0px;
  left: 14px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const HeadStack = styled.div`
  width: 1220px;
  height: 200px;
  margin-top: -50px;
  position: relative;
`;

const BodyTop = styled.div`
  width: 1920px;
  height: 555px;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
`;

const Rect2 = styled.div`
  top: 92px;
  width: 1920px;
  height: 555px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  left: 0px;
  flex-direction: column;
  display: flex;
`;

const HeaderText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 45px;
  width: 586px;
  height: 171px;
  margin-top: 47px;
  margin-left: 381px;
`;

const SubheadTopText = styled.span`
  font-family: Montserrat;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 20px;
  width: 509px;
  height: 125px;
  text-align: left;
`;

const More = styled.img`
  top: 68px;
  left: 232px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const Telegram = styled.img`
  top: 68px;
  left: 0px;
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const SubheadTopTextStack = styled.div`
  width: 509px;
  height: 268px;
  margin-top: 19px;
  margin-left: 381px;
  position: relative;
`;

const Image = styled.img`
  top: 0px;
  left: 691px;
  width: 1073px;
  height: 706px;
  position: absolute;
  object-fit: contain;
`;

const Rect2Stack = styled.div`
  width: 1920px;
  height: 706px;
  margin-top: -92px;
  position: relative;
`;

const BodyCosmoton = styled.div`
  width: 135px;
  height: 34px;
  flex-direction: column;
  display: flex;
  margin-top: 101px;
  margin-left: 442px;
`;

const CosmotonBody = styled.div`
  top: 0px;
  width: 1220px;
  height: 435px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  border-radius: 14px;
  left: 0px;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 16px 40px  0.42px rgba(112,144,176,1) ;
`;

const TonImg = styled.img`
  top: 0px;
  left: 0px;
  width: 94px;
  height: 92px;
  position: absolute;
  object-fit: contain;
`;

const CosmoTon = styled.span`
  font-family: Montserrat;
  top: 88px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 28px;
  text-align: left;
`;

const TonImgStack = styled.div`
  width: 153px;
  height: 122px;
  margin-top: 16px;
  margin-left: 63px;
  position: relative;
`;

const Subheadline_1 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  text-align: left;
  width: 300px;
  height: 19px;
  margin-top: 7px;
  margin-left: 63px;
`;

const Invest = styled.div`
  width: 442px;
  height: 42px;
  flex-direction: column;
  display: flex;
  margin-top: 40px;
  margin-left: 59px;
`;

const Rect4 = styled.div`
  width: 442px;
  height: 42px;
  background-color: rgba(243,245,247,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const InvestTxt = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 12px;
  margin-left: 24px;
`;

const PartnerProg = styled.div`
  width: 324px;
  height: 42px;
  flex-direction: column;
  display: flex;
`;

const Rect5 = styled.div`
  width: 321px;
  height: 42px;
  background-color: rgba(243,245,247,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum5 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 12px;
  margin-left: 26px;
`;

const MarketplaceNft = styled.div`
  width: 199px;
  height: 42px;
  flex-direction: column;
  display: flex;
  margin-left: 10px;
`;

const Rect6 = styled.div`
  width: 198px;
  height: 42px;
  background-color: rgba(243,245,247,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const МаркетплейсNft = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 12px;
  margin-left: 25px;
`;

const PartnerProgRow = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 59px;
  margin-right: 628px;
`;

const Payment = styled.div`
  width: 191px;
  height: 42px;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  width: 191px;
  height: 42px;
  background-color: rgba(243,245,247,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const ПриемПлатежей = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 12px;
  margin-left: 24px;
`;

const MarletActivity = styled.div`
  width: 277px;
  height: 42px;
  flex-direction: column;
  display: flex;
  margin-left: 15px;
`;

const Rect7 = styled.div`
  width: 276px;
  height: 42px;
  background-color: rgba(243,245,247,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum6 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 12px;
  margin-left: 25px;
`;

const PaymentRow = styled.div`
  height: 42px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-left: 63px;
  margin-right: 674px;
`;

const PhoneImg = styled.img`
  top: 0px;
  left: 613px;
  width: 619px;
  height: 443px;
  position: absolute;
  object-fit: cover;
`;

const CosmotonBodyStack = styled.div`
  width: 1232px;
  height: 443px;
  margin-top: -104px;
  margin-left: -63px;
  position: relative;
`;

const ForWhoSection = styled.div`
  width: 350px;
  height: 34px;
  flex-direction: column;
  display: flex;
  margin-top: 433px;
  margin-left: 804px;
`;

const ForWhom = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 28px;
  margin-left: -19px;
`;

const Group14 = styled.div`
  width: 290px;
  height: 449px;
  flex-direction: column;
  display: flex;
`;

const CosmotonBody1 = styled.div`
  width: 290px;
  height: 449px;
  background-color: rgba(255,255,255,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 4px 40px  0.16px rgba(112,144,176,1) ;
`;

const Image2 = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 75px;
  margin-left: 85px;
  object-fit: contain;
`;

const BodyHeader = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  width: 235px;
  height: 22px;
  margin-top: 38px;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 5px;
`;

const BodyHeader1 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 18px;
  width: 250px;
  text-align: center;
  height: 110px;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const CosmotonBody2 = styled.div`
  width: 290px;
  height: 449px;
  background-color: rgba(255,255,255,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
  box-shadow: 0px 4px 40px  0.16px rgba(112,144,176,1) ;
`;

const Image3 = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 75px;
  margin-left: 85px;
  object-fit: contain;
`;

const ItProjes = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  text-align: center;
  margin-top: 38px;
  margin-left: 57px;
  margin-right: 57px;
  margin-bottom: 5px;
`;

const BodyHeader3 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 18px;
  text-align: center;
  margin-top: 9px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Inv = styled.div`
  width: 290px;
  height: 449px;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
`;

const CosmotonBody3 = styled.div`
  width: 290px;
  height: 449px;
  background-color: rgba(255,255,255,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 4px 40px  0.16px rgba(112,144,176,1) ;
`;

const Image4 = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 75px;
  margin-left: 85px;
  object-fit: contain;
`;

const BodyHeader4 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  text-align: center;
  margin-top: 38px;
  margin-left: 57px;
  margin-right: 57px;
  margin-bottom: 5px;
`;

const BodyHeader5 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 18px;
  width: 250px;
  text-align: center;
  height: 130px;
  margin-top: 7px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  
`;

const CosmotonBody4 = styled.div`
  width: 290px;
  height: 449px;
  background-color: rgba(255,255,255,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-left: 21px;
  box-shadow: 0px 4px 40px  0.16px rgba(112,144,176,1) ;
`;

const Image5 = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 75px;
  margin-left: 85px;
  object-fit: contain;
`;

const BodyHeader6 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  text-align: center;
  margin-top: 38px;
  margin-left: 57px;
  margin-right: 57px;
  margin-bottom: 5px;
`;

const BodyHeader7 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 18px;
  text-align: center;
  margin-top: 7px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Group14Row = styled.div`
  height: 449px;
  flex-direction: row;
  display: flex;
  margin-top: 52px;
  margin-left: -420px;
  margin-right: -449px;
`;

const WhatCanYouDo = styled.div`
  width: 1920px;
  height: 610px;
  flex-direction: column;
  display: flex;
  margin-top: 621px;
`;

const Rect9 = styled.div`
  width: 1920px;
  height: 610px;
  background-color: rgba(243,245,247,1);
  flex-direction: column;
  display: flex;
`;

const WhatUCan = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 28px;
`;

const Group5 = styled.div`
  width: 354px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 31px;
`;

const Image6 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Launch = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 5px;
  margin-top: 3px;
`;

const Your = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 5px;
  margin-top: 3px;
`;

const NftCollection = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 4px;
  margin-top: 3px;
`;

const Image6Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -87px;
`;

const Group7 = styled.div`
  width: 477px;
  height: 41px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
`;

const Image7 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum9 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 3px;
`;

const Image7Row = styled.div`
  height: 41px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -44px;
`;

const Group8 = styled.div`
  width: 405px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 17px;
`;

const Image8 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum10 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
`;

const Image8Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -32px;
`;

const Group9 = styled.div`
  width: 298px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
`;

const Image9 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum11 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
`;

const Image9Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -28px;
`;

const Group10 = styled.div`
  width: 468px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 23px;
`;

const Image10 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum12 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
`;

const Image10Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -46px;
`;

const Group11 = styled.div`
  width: 398px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
`;

const Image11 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum13 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
`;

const Image11Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -35px;
`;

const Group12 = styled.div`
  width: 392px;
  height: 24px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
`;

const Image12 = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LoremIpsum14 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 6px;
  margin-top: 4px;
`;

const Image12Row = styled.div`
  height: 24px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -29px;
`;

const MoreButton = styled.img`
  width: 220px;
  height: 100%;
  margin-top: 40px;
  object-fit: contain;
`;

const WhatUCanColumn = styled.div`
  width: 477px;
  flex-direction: column;
  display: flex;
  margin-top: 12px;
  margin-bottom: 75px;
`;

const PhoneCoins = styled.img`
  width: 100%;
  height: 565px;
  margin-left: 196px;
  object-fit: contain;
`;

const WhatUCanColumnRow = styled.div`
  height: 565px;
  flex-direction: row;
  display: flex;
  margin-top: 44px;
  margin-left: 387px;
  margin-right: 311px;
`;

const RoadmapGroup = styled.div`
  width: 1920px;
  height: 670px;
  flex-direction: column;
  display: flex;
`;

const Slider = styled.img`
  top: 600px;
  width: 59px;
  height: 8px;
  position: absolute;
  left: 930px;
  object-fit: contain;
`;

const RoadMapBack = styled.div`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 510px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Roadmap = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 28px;
  margin-top: 118px;
  margin-left: 889px;
`;

const Updated = styled.div`
  width: 207px;
  height: 19px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: 856px;
`;

const Обновлено = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  opacity: 0.74;
  font-size: 16px;
`;

const Август2022 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 5px;
`;

const ОбновленоRow = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 3px;
`;

const RoadmapImage = styled.img`
  width: 1220px;
  height: 100%;
  margin-top: 40px;
  margin-left: 379px;
  object-fit: contain;
`;

const March = styled.div`
  width: 261px;
  height: 105px;
  flex-direction: column;
  display: flex;
`;

const Март2022 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: -29px;
  margin-left: 1px;
`;

const MarchContainer = styled.div`
  top: 0px;
  left: 0px;
  width: 224px;
  height: 105px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Bullets = styled.div`
  width: 5px;
  height: 70px;
  flex-direction: column;
  display: flex;
  margin-top: 4px;
`;

const Bullet = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -5px;
`;

const Bullet1 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 8px;
`;

const Bullet2 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 7px;
  margin-left: 1px;
`;

const СтартПроекта = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const ЗапускБотаCosmoTon = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 6px;
`;

const СтартПроектаColumn = styled.div`
  width: 187px;
  flex-direction: column;
  display: flex;
  margin-left: 7px;
  margin-bottom: 30px;
`;

const BulletsRow = styled.div`
  height: 74px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 11px;
  margin-right: 14px;
`;

const Стартпроекта2 = styled.span`
  font-family: Montserrat;
  top: 55px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  text-align: left;
`;

const MarchContainerStack = styled.div`
  width: 255px;
  height: 105px;
  margin-top: 7px;
  position: relative;
`;

const April = styled.div`
  width: 274px;
  height: 105px;
  flex-direction: column;
  display: flex;
  margin-left: 46px;
`;

const Апрель2022 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: -29px;
  margin-left: 1px;
`;

const AprilContainer1 = styled.div`
  top: 0px;
  left: 0px;
  width: 224px;
  height: 105px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Bullets1 = styled.div`
  width: 5px;
  height: 70px;
  flex-direction: column;
  display: flex;
  margin-top: 9px;
  margin-left: 11px;
`;

const Buller3 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -4px;
`;

const Bullet4 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 26px;
`;

const Стартпроекта3 = styled.span`
  font-family: Montserrat;
  top: 5px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const ЗапускботаCosmoTon1 = styled.span`
  font-family: Montserrat;
  top: 49px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const Стартпроекта4 = styled.span`
  font-family: Roboto;
  top: 55px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  text-align: left;
`;

const AprilContainer1Stack = styled.div`
  width: 276px;
  height: 105px;
  margin-top: 7px;
  position: relative;
`;

const May = styled.div`
  width: 274px;
  height: 105px;
  flex-direction: column;
  display: flex;
  margin-left: 39px;
`;

const Май2022 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: -29px;
  margin-left: 1px;
`;

const MayContainer2 = styled.div`
  top: 0px;
  left: 0px;
  width: 224px;
  height: 105px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Bullets2 = styled.div`
  width: 5px;
  height: 70px;
  flex-direction: column;
  display: flex;
  margin-top: 9px;
  margin-left: 11px;
`;

const Buller4 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -4px;
`;

const Стартпроекта5 = styled.span`
  font-family: Montserrat;
  top: 5px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const Стартпроекта6 = styled.span`
  font-family: Roboto;
  top: 55px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  text-align: left;
`;

const MayContainer2Stack = styled.div`
  width: 267px;
  height: 105px;
  margin-top: 7px;
  position: relative;
`;

const June = styled.div`
  width: 261px;
  height: 105px;
  flex-direction: column;
  display: flex;
  margin-left: 35px;
`;

const Июнь2022 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: -29px;
  margin-left: 1px;
`;

const JuneContainer3 = styled.div`
  top: 0px;
  left: 0px;
  width: 224px;
  height: 105px;
  position: absolute;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Bullets3 = styled.div`
  width: 5px;
  height: 70px;
  flex-direction: column;
  display: flex;
  margin-top: 4px;
`;

const Bullet5 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: -5px;
`;

const Bullet6 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 8px;
`;

const Bullet7 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 7px;
  margin-left: 1px;
`;

const Стартпроекта7 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const ЗапускботаCosmoTon2 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Стартпроекта7Column = styled.div`
  width: 187px;
  flex-direction: column;
  display: flex;
  margin-left: 7px;
  margin-bottom: 30px;
`;

const Bullets3Row = styled.div`
  height: 74px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 11px;
  margin-right: 14px;
`;

const Стартпроекта8 = styled.span`
  font-family: Montserrat;
  top: 55px;
  left: 23px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  text-align: left;
`;

const JuneContainer3Stack = styled.div`
  width: 255px;
  height: 105px;
  margin-top: 7px;
  position: relative;
`;

const MarchRow = styled.div`
  height: 105px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 386px;
  margin-right: 344px;
`;

const SliderStack = styled.div`
  width: 1920px;
  height: 514px;
  position: relative;
`;

const Partners = styled.div`
  width: 1920px;
  height: 563px;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
`;

const Rect10 = styled.div`
  width: 1920px;
  height: 610px;
  background-color: rgba(243,245,247,1);
  flex-direction: column;
  display: flex;
`;

const НашиПартнеры = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 28px;
  margin-top: 86px;
  margin-left: 835px;
`;

const TonSocietyB = styled.div`
  width: 290px;
  height: 259px;
  background-color: rgba(255,255,255,1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Ts = styled.img`
  width: 100px;
  height: 100%;
  margin-top: 29px;
  margin-left: 95px;
  object-fit: contain;
`;

const TonSocietyText = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: 18px;
  margin-left: 90px;
`;

const Text = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 45px;
`;

const CompName = styled.div`
  width: 290px;
  height: 259px;
  flex-direction: column;
  display: flex;
  margin-left: 22px;
`;

const CompNameB = styled.div`
  width: 290px;
  height: 259px;
  background-color: rgba(255,255,255,1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const Cn = styled.img`
  width: 100px;
  height: 100%;
  margin-top: 29px;
  margin-left: 95px;
  object-fit: contain;
`;

const CompanyName = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: 19px;
  margin-left: 70px;
`;

const Text1 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 45px;
`;

const GalacticGroup = styled.div`
  width: 290px;
  height: 259px;
  flex-direction: column;
  display: flex;
  margin-left: 24px;
`;

const GalaB = styled.div`
  width: 290px;
  height: 259px;
  background-color: rgba(255,255,255,1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const GalaImg = styled.img`
  width: 100px;
  height: 100%;
  margin-top: 29px;
  margin-left: 95px;
  object-fit: contain;
`;

const Galactic = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: 19px;
  margin-left: 107px;
`;

const Text2 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 45px;
`;

const Mojo = styled.div`
  width: 290px;
  height: 259px;
  flex-direction: column;
  display: flex;
  margin-left: 23px;
`;

const MojoB = styled.div`
  width: 290px;
  height: 259px;
  background-color: rgba(255,255,255,1);
  border-radius: 9px;
  flex-direction: column;
  display: flex;
`;

const MojoImg = styled.img`
  width: 100px;
  height: 100%;
  margin-top: 29px;
  margin-left: 95px;
  object-fit: contain;
`;

const TonSociety3 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 18px;
  margin-top: 19px;
  margin-left: 122px;
`;

const Text3 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 45px;
`;

const TonSocietyBRow = styled.div`
  height: 259px;
  flex-direction: row;
  display: flex;
  margin-top: 56px;
  margin-left: 341px;
  margin-right: 350px;
`;

const Footer = styled.div`
  width: 1920px;
  height: 62px;
  flex-direction: column;
  display: flex;
  margin-top: 3px;
`;

const FooterB = styled.div`
  width: 1920px;
  height: 62px;
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  display: flex;
`;

const BasedOn = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
`;

const Ton5 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 4px;
`;

const Privacy = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(73,106,235,1);
  font-size: 16px;
  text-decoration-line: underline;
  margin-left: 769px;
`;

const Terms = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(73,106,235,1);
  font-size: 16px;
  text-decoration-line: underline;
  margin-left: 43px;
`;

const Cosmoton7 = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: rgba(84,85,94,1);
  font-size: 16px;
  margin-left: 51px;
`;

const BasedOnRow = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 347px;
  margin-left: 338px;
  margin-top: 22px;
`;

export default TonDesktop;
