
function Header() {
    return (
        <>
            <div className='justify-center font-serif mt-5'>
                <h1 className='text-6xl text-couleur-titre text-center'>Giacca</h1>
                <ul className='flex justify-center py-9'>
                    <li className='underline px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                        <a href="#">Accueil</a></li>
                    <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                        <a href="#roadToApropos">À propos</a></li>
                    <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                        <a href="#roadToPrestations">Prestations</a></li>
                    <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                        <a href="#roadToFaq">FAQ</a></li>
                    <li className='px-9 inline hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                        <a href="">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
