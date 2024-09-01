import photoVoitureNumero1 from '../assets/viktor-theo-wWN4AiGPscM-unsplash.jpg';
import photoVoitureNumero2 from '../assets/severin-demchuk-RYkZRwbmc1U-unsplash.jpg';

function Prestations() {
    return (
        <>
            <div className='pt-16'>
                <h1 className='text-black text-opacity-70 text-2xl text-center pb-28'>Prestations de service</h1>
                <div className='grid grid-cols-2 w-full px-10 gap-10'>
                    <div>
                        <img className='w-full h-96 object-cover' src={photoVoitureNumero1} alt="Service 1" />
                        <h3 className='text-center pt-5 text-lg opacity-70'>Nettoyage intérieur</h3>
                        <p className='text-center pt-5 opacity-60'>Nettoyage intérieur: brillance impeccable, respect de l'environnement, satisfaction garantie.</p>
                    </div>
                    <div>
                        <img className='w-full h-96 object-cover' src={photoVoitureNumero2} alt="Service 2"/>
                        <h3 className='text-center pt-5 text-lg opacity-70'>Nettoyage extérieur</h3>
                        <p className='text-center pt-5 opacity-60'>Nettoyage extérieur: image professionnelle, techniques avancées, minimalement invasif.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Prestations;
