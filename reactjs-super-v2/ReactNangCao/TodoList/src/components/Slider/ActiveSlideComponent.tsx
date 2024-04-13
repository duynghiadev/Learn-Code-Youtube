import React from 'react'
import styles from './slider.module.scss'

export interface ActiveSlideProps {
  handleZoom: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  handleRemoveZoom: () => void
  activeSlide: {
    url: string
  }
  naturalActiveImageRef: React.RefObject<HTMLImageElement>
}

const ActiveSlide = React.memo(
  React.forwardRef((props: ActiveSlideProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { handleZoom, handleRemoveZoom, activeSlide, naturalActiveImageRef } = props

    return (
      <div className={styles.activeSlide}>
        <div className={styles.activeImageWrapper} onMouseMove={handleZoom} onMouseOut={handleRemoveZoom}>
          <div className={styles.wrapperImage} ref={ref}>
            <img
              src={activeSlide.url}
              alt='Tính năng đặc biệt chỉ có trong khóa học Super React'
              // placeholder='blur'
              className={styles.activeSlideItemImage}
              ref={naturalActiveImageRef}
            />
          </div>
        </div>
      </div>
    )
  })
)

export default ActiveSlide
