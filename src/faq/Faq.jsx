import { useState } from "react";

function Faq() {
    const [visibleAnswer, setVisibleAnswer] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleAnswer(visibleAnswer === index ? null : index);
    };

    return (
        <div className='pt-16 h-screen'>
            <div className={''}>
                <div id='roadToFaq' className='h-7'></div>
                <h1 className='text-couleur-titre text-center font-serif text-2xl'>Foire aux questions</h1>

                {/* Premier élément de FAQ */}
                <div className={''}>
                <div className="">
                    <div
                        className="bg-couleur-titre w-1/2 text-couleur-hover-button p-4 cursor-pointer transform transition duration-300"
                        onClick={() => toggleAnswer(0)}
                    >
                        <h3>Quels types de bâtiments nettoyez-vous?</h3>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleAnswer === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="bg-gray-100 p-4">
                            <p>Nous nettoyons une variété de bâtiments, y compris des résidences privées, des bureaux et des commerces.</p>
                        </div>
                    </div>
                </div>

                {/* Deuxième élément de FAQ */}
                <div className="mt-4">
                    <div
                        className="bg-couleur-titre w-1/2 text-white p-4 cursor-pointer transform transition duration-300"
                        onClick={() => toggleAnswer(1)}
                    >
                        <h3>Utilisez-vous des produits écologiques?</h3>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="bg-gray-100 p-4">
                            <p>Oui, nous utilisons des produits respectueux de l'environnement pour garantir la sécurité et la santé de nos clients.</p>
                        </div>
                    </div>
                </div>

                {/* Troisième élément de FAQ */}
                <div className="mt-4">
                    <div
                        className="bg-couleur-titre text-white w-1/2 p-4 cursor-pointer transform transition duration-300"
                        onClick={() => toggleAnswer(2)}
                    >
                        <h3>Comment planifier un rendez-vous?</h3>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="bg-gray-100 p-4">
                            <p>Vous pouvez planifier un rendez-vous en nous contactant par téléphone ou en utilisant notre formulaire en ligne.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Faq;
