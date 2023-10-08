import React from 'react'
import * as S from './style'
import {DataFooter} from './dataFooter'
import { MediaFooter } from './dataFooter'

const Footer = () => {
  return (
    <S.Footer>
        <S.Container>
            <S.AllContent>
                <div>
                    <S.Logo src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800,h_284/https://www.simplenglish.com.br/wp-content/uploads/2021/06/marca-branca-SE-05.06-1024x364.png" alt='logo simple english' />
                </div>
                <S.Links>
                    {DataFooter.map(item => (
                        <S.Text href="#" key={item.item}>{item.item}</S.Text>                        
                    ))}
                </S.Links>
                <S.MediaContent>
                    <S.MediaTitle>Acompanhe as nossas redes</S.MediaTitle>
                    {MediaFooter.map(item => (
                        <S.Icons src={item.icon} key={item.id} alt={item.acess} />
                    ))}
                </S.MediaContent>
            </S.AllContent>
        </S.Container>
    </S.Footer>
  )
}

export default Footer