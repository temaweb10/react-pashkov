function Footer(){
    return (
        
        <footer class="footer">
            <div class="footer-content">
                <div class="logo">
                    <h2 class="logo-title">TEMA_WEB</h2>
                </div>

                <div class="footer-column">
                    <a href="index.html" class="nav-link">Главная</a>
                    <a href="portfolio.html" class="nav-link">Портфолио</a>
                    <a href="index.html" class="nav-link">О мне</a>
                </div>

                <div class="social-links">
                    <a href="google.com" style={{
                        textDecoration: "none"
                    }} >
                        <img src="https://img.icons8.com/color/144/000000/vk-com.png" width="62px" alt=""/>
                    </a>

                    <a href="#"  style={{
                        textDecoration: "none"
                    }} >
                        <img src="https://img.icons8.com/fluency/144/000000/instagram-new.png"  width="62px" alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer 