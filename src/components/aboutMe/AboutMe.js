import React from 'react'
import Image from 'next/image'
import teacher from '/public/assets/professor10.png'
import * as S from './styleMe'
import instagramIcon from '/public/assets/iconinstagram.png'
import linkedinIcon from '/public/assets/iconlinkedin.png'
import "aos/dist/aos.css";

const AboutMe = () => {
  return (
    <S.AllSection>
        <S.Container>
            <S.AllContent data-aos="fade-up-right">
                <div>
                    <S.Photo src={teacher} alt="professor de inglês" width={500} height={700} />
                </div>
                <S.TextContent >
                    <S.ContentTitle>Ueslei Santana</S.ContentTitle>
                    <S.JobFunction>Professor de Inglês</S.JobFunction>
                    <S.WhoIs>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </S.WhoIs>
                    <S.WhoIs>&quot;Com grandes poderes vem grandes responsabilidades. Sem dó nem piedade! Rapadura é doce mas né mole não.;</S.WhoIs>
                    <S.SocialMedia>
                        <S.MediaIcon src={instagramIcon} alt="instagram" width={30} height={30} />
                        <S.MediaIcon src={linkedinIcon} alt="linkedin" width={30} height={30}/>
                    </S.SocialMedia>
                </S.TextContent>
            </S.AllContent>
        </S.Container>
    </S.AllSection>
  );
}

export default AboutMe