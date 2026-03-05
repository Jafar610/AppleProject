import React from 'react'
import watchImg from '../../assets/images/icons/apple-card-logo.png'
import watchSeries5 from '../../assets/images/icons/watch-series5-logo.png'
function Watch() {
  return (
    <>
    <section class="fourth-heghlight-wrapper">
        <div class="left-side-wrapper">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">
              <img src={watchSeries5} />
            </div>
          </div>
          <div class="description-wraper">
            With the new Always-On Retina display.<br />
            You’ve never seen a watch like this.
          </div>
          <div class="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>
        </div>
        <div class="right-side-wrapper">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">
              <img src={watchImg} />
            </div>
          </div>
          <div class="description-wraper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
          </div>
          <div class="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Watch