import React, { CSSProperties, useRef, useState } from 'react'
import styles from './slider.module.scss'
import { slider } from './sliderImage'
import ActiveSlide from './ActiveSlideComponent'

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(slider[0])
  const [wrapperImageStyle, setWrapperImageStyle] = useState<CSSProperties>()
  const naturalActiveImageRef = useRef<HTMLImageElement>(null)
  const wrapperImageRef = useRef<HTMLDivElement>(null)

  const chooseSlide = (index: number) => () => setActiveSlide(slider[index])

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (window.innerWidth > 1024) {
      const rect = event.currentTarget.getBoundingClientRect()
      const offsetX = event.pageX - (rect.left + window.scrollX)
      const offsetY = event.pageY - (rect.top + window.scrollY)
      if (naturalActiveImageRef.current && wrapperImageRef.current) {
        const { naturalHeight, naturalWidth } = naturalActiveImageRef.current
        const wrapperImage = wrapperImageRef.current
        const top = -offsetY * (naturalHeight / rect.height - 1) + 'px'
        const left = -offsetX * (naturalWidth / rect.width - 1) + 'px'
        const height = naturalHeight + 'px'
        const width = naturalWidth + 'px'

        // Này là dùng DOM thật: trong trường hợp này thì dùng DOM thật thì page --> load mượt hơn DOM ảo ✅
        wrapperImage.style.top = top
        wrapperImage.style.left = left
        wrapperImage.style.height = height
        wrapperImage.style.width = width

        // Này là dùng DOM ảo: trong trường hợp này dùng DOM ảo không hợp lý --> Nó gây ra delay trang web ❌
        // setWrapperImageStyle({
        //   top,
        //   left,
        //   height,
        //   width
        // })
      }
    }
  }
  const handleRemoveZoom = () => {
    wrapperImageRef?.current?.removeAttribute('style')
  }

  return (
    <div>
      <div className={styles.slider}>
        <ActiveSlide
          activeSlide={activeSlide}
          handleRemoveZoom={handleRemoveZoom}
          handleZoom={handleZoom}
          naturalActiveImageRef={naturalActiveImageRef}
          ref={wrapperImageRef}
        />
        <div className={`customScrollbar ${styles.slides}`}>
          {slider.map((item, index) => (
            <div
              className={`${styles.slideItem} ${item.url === activeSlide.url ? styles.slideItemActive : ''}`}
              key={index}
              onClick={chooseSlide(index)}
            >
              <img
                src={item.url}
                alt='Tính năng đặc biệt chỉ có trong khóa học Super React'
                // placeholder='blur'
                className={styles.slideItemImage}
              />
            </div>
          ))}
        </div>
        {/*{Array(40)*/}
        {/*  .fill(0)*/}
        {/*  .map((item, index) => (*/}
        {/*    <iframe*/}
        {/*      key={index}*/}
        {/*      width={1268}*/}
        {/*      height={713}*/}
        {/*      src='https://www.youtube.com/embed/2veTTnhPz60'*/}
        {/*      title='TỰ TÌNH 2 | Trung Quân x Lâm Nguyên | OFFICIAL MUSIC VIDEO | EP •Bướm mặt trăng•'*/}
        {/*      frameBorder={0}*/}
        {/*      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'*/}
        {/*      allowFullScreen*/}
        {/*    />*/}
        {/*  ))}*/}
      </div>
    </div>
  )
}
