function Welcome(){
    return (
        <div className="welcome">
        <div className="welcome-content">
            <div className="welcome-block">
               <h2 className="welcome-title">
                 Создание сайтов
               </h2>
                 <h2 className="welcome-subtitle">Программирование , верстка</h2>

                 <p className="welcome-text">Разработка  сайтов с учетом целевой аудитории, принципов юзабилити
                     и требуемых задач
                 </p>

                 <a href="#" className="button" >Связаться</a>
             </div>

             <div className="blob">
                 <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg" className="blob-shadow">
                     <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style={{
                            stopColor: "rgb(0, 186, 204)"
                         }} ></stop>
                         <stop offset="100%"  style={{
                            stopColor: "rgb(0, 204, 195)"
                         }}></stop>
                       </linearGradient>
                     </defs>
                     <path id="blob" d="M396.5,333Q416,416,333,403.5Q250,391,206.5,364Q163,337,88.5,293.5Q14,250,72,190Q130,130,190,86Q250,42,327.5,68.5Q405,95,391,172.5Q377,250,396.5,333Z" fill="url(#gradient)"></path>
                   </svg>
               </div>

            
        </div>
    </div>
    )
}

export default Welcome