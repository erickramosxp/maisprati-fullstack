import './Footer.css';

function MyFooter({conteudo}) {
    return (
        <div className="footer">
            <div className="footer_content">
                <div>
                    <ul>
                        <li><a href="#">{conteudo.item1}</a></li>
                        <li><a href="#">{conteudo.item2}</a></li>
                        <li><a href="#">{conteudo.item3}</a></li>
                        <li><a href="#">{conteudo.item4}</a></li>
                    </ul>
                </div>
            </div>
            <div className='links_autor'>
                <a href={conteudo.github}><img src="https://i.imgur.com/hAisXHD.png" alt="" /></a>
            </div>
        </div>
    );
};

export default MyFooter;