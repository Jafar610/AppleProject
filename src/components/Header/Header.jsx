import icon from '../../assets/images/icons/logo.png'
import searchIcon from '../../assets/images/icons/search-icon.png'
import cartIcon from '../../assets/images/icons/cart.png'

function Header() {
  return (
    <>
    <header class="header-wrapper">
        <div class="internal-wrapper">
          <div class="header-links-wrapper">
            <ul>
              <li class="logo-link">
                <a href="/"><img src={icon} /></a>
              </li>
              <li><a href="about.html">About</a></li>
              <li><a href="#">iphone</a></li>
              <li><a href="#">ipad</a></li>
              <li><a href="#">watch</a></li>
              <li><a href="#">tv</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Support</a></li>
              <li class="search-link">
                <a href="/search/"
                  ><img src={searchIcon}
                /></a>
              </li>
              <li class="cart-link">
                <a href="/cart/"><img src={cartIcon} /></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header