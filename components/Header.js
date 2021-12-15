import PropTypes from 'prop-types';
import Head from 'next/head'

const Header = (props) => (
    <>
    <Head>
        <title>Sayond Resort</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo"> */}
            {/*<span className="icon fa-diamond"></span>*/}
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
        {/* </div> */}
        <div className="content">
            <div className="inner">
                <h1>SAYOND BEACH RESORT COMING SOON ...</h1>
                <p>A great beach resort for your great holiday.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://www.instagram.com/sayond_beach/" target="_black">OUR FACEBOOK PAGE</a></li>
                <li><a href="https://www.facebook.com/Sayond-Beach-Resort-304152766924448" target="_blank">OUR INSTRAGRAM PAGE</a></li>

            </ul>
        </nav>
    </header>
    </>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
