import React from "react"
// css module
import styles from './index.module.scss'

interface CouponBannerProps { }

const textDict = {
  thirtyPercent: '30%',
  off: 'off',
  title: 'Enjoy now your favorite brands with',
  welcome: 'Welcome Coupon',
  arise: 'For Arise all items',
  price: 'Min. order 10€. Valid for 30 days from now.',
  button: 'I want it!',
  copyWrite: 'T&C',
  h: 'h',
  m: 'm',
  s: 's',
  end: 'Ends in',
  minPrice1: 'Save up to 20€. All items included.',
  minPrice2: 'Min. spend: 10,00€. Valid for 30 day(s)',
}

const CouponBanner: React.FC<CouponBannerProps> = (props) => {

  const [timeStamp, setTimeStamp] = React.useState(60 * 60 * 24);

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      if (timeStamp <= 0) clearInterval(intervalID)
      setTimeStamp(timeStamp - 1)
    }, 1000);

    return () => {
      clearInterval(intervalID)
    }
  })

  const padZero = (val:number) => val < 10 ? `0${val}` : val

  const getHours = () => Math.floor(timeStamp / (60 * 60))

  const getMinutes = () => Math.floor((timeStamp - getHours() * 60 * 60) / (60))

  const getSeconds = () => timeStamp - getHours() * 60 * 60 - getMinutes() * 60

  return <div className={styles.couponBanner}>
    <img src="" alt="arrow" className={styles.arrow} />
    <img src="" alt="model" className={styles.model} />
    <section className={styles.welcomeContainer}>
      <img src="" alt="vector" className={styles.vector} />
      <span className={styles.thirtyPercent}>{textDict.thirtyPercent}</span>
      <span className={styles.off}>{textDict.off}</span>
      <h6 className={styles.welcome}>{textDict.welcome}</h6>
      <span className={styles.arise}>{textDict.arise}</span>
      <span className={styles.price}>{textDict.price}</span>
      <a href="#" className={styles.copyWrite}>{textDict.copyWrite}</a>
      <button className={styles.button}>{textDict.button}</button>
    </section>
    <h1 className={styles.title}>{textDict.title}</h1>
    <h2 className={styles.subTitle}>
      <span className={styles.thirtyPercent}>{textDict.thirtyPercent}</span>
      <span className={styles.off}>{textDict.off}</span>
    </h2>
    <section className={styles.timer}>
      <span className={styles.end}>{textDict.end}</span>
      <span className={styles.rect}>{padZero(getHours())}</span>
      <span className={styles.h}>{textDict.h}</span>
      <span className={styles.rect}>{padZero(getMinutes())}</span>
      <span className={styles.m}>{textDict.m}</span>
      <span className={styles.rect}>{padZero(getSeconds())}</span>
      <span className={styles.s}>{textDict.s}</span>
    </section>
  </div>
}

export default CouponBanner;