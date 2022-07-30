function About(){
    return (
        <div className="about">
        <div className="about-content">


            <div className="about-block">
                <div className="about-img">
                <img src="/src/images/author.jpg" alt="" class="img-author"/>
                </div>

                <div className="about-block-content">
                    <div className="about-title">
                        Меня зовут Артем Пашков
                    </div>

                    <h2 className="welcome-subtitle">Работая со мной вы экономите:</h2>

                    <p className="welcome-text mrb-8">
                        -Деньги. Качественно разрабатываю адаптивную верстку на основе макетов, что существенно экономит , ваш бюджет , и не требует заказа дополнительных макетов дизайна сайтов
        
                    </p>

                    <p className="welcome-text">
                        -Нервы . Просьбы пожелания и доработки не структурного характера уже включены в стоимость работы! Так что если вы пропустили ряд мелочей в дизайне они будут вынесены в верстку по вашей просьбе без лишних споров и
                        дополнительных затрат
                    </p>

                    <a href="#" className="button">Подробнее</a>
                </div>


            </div>
        </div>
</div>
    )
}

export default About