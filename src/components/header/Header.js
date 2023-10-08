"use client";
import React from "react";
import Image from "next/image";
import loginIcon from "/public/assets/user-solid.png";
import * as S from "./styles";
import { Announcement } from "./announcement/Announcement";
import logo from "/public/assets/logo-simple.png";


export const Header = () => {



  return (
    <>
      <S.Section>
        <S.Container>
          <S.Nav>
            <S.Lista>
              <S.ItemLi>
                <S.Ancora href="#">Curso</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#">Planos</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#">Promoção</S.Ancora>
              </S.ItemLi>
              <S.LogoDiv>
                <Image
                  src={logo}
                  alt="logo simple english"
                  title="Logo Simple English"
                  width={200}
                  height={90} priority
                />
              </S.LogoDiv>              
              <S.ItemLi>
                <S.Ancora href="#">Diferenciais</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#">Blog</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#">
                  <S.Icone
                    src={loginIcon}
                    alt="Login"
                    title="Faça seu Login"
                    width={28}
                    height={28}
                  />
                </S.Ancora>
              </S.ItemLi>
            </S.Lista>
          </S.Nav>
        </S.Container>
        <Announcement />
      </S.Section>
    </>
  );
};
