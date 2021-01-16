import React from 'react';
import Link from 'next/link';
import * as S from './LinkWithImageSwiper.style';

export interface ISwiperItem {
  to: string;
  src: string;
  description: string;
}

interface IProps {
  itemsData: Array<ISwiperItem>;
  noItemText: string;
}

const LinkWithImageSwiper: React.FC<IProps> = ({
  itemsData,
  noItemText,
}) => {
  const items = itemsData.map((item, index) => Object.assign(item, { index }));
  return (
    <S.SwiperContainer>
      {items.length ? (
        <S.SwiperItemContainer>
          {items.map((value) => (
            <S.SwiperItem key={value.to}>
              <Link href={value.to} passHref>
                <S.ItemLink>
                  <S.ItemImageContainer>
                    <S.ItemImage src={value.src} alt={value.description} />
                  </S.ItemImageContainer>
                  <S.ItemDesc>
                    {value.description}
                  </S.ItemDesc>
                </S.ItemLink>
              </Link>
            </S.SwiperItem>
          ))}
        </S.SwiperItemContainer>
      ) : (
        <S.NoItem>{noItemText}</S.NoItem>
      )}
    </S.SwiperContainer>
  );
};

export default LinkWithImageSwiper;
