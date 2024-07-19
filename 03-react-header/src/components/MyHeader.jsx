import '../MyHeader.css';

function MyHeader() {
   return (
    <div className='myheader'>
            <nav className="nave">
                <ul className="nave_content">
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            <div className='conteudo'>
                <h1>
                    Bem vindo !
                </h1>
            </div>
        </div>
    );
}

export default MyHeader;