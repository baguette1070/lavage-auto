import React from 'react';
import { MapPin, Facebook, Instagram, Snapchat } from 'lucide-react';
import photoTest from '../assets/martin-katler-S0q7CvqX6O4-unsplash.jpg'

function Contact() {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6">
            <div className="w-full md:w-1/2 pr-6">
                <h1 className="text-couleur-titre text-4xl mb-4">Contactez-nous</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Contactez-nous pour un devis gratuit et personnalisé.
                </p>
                <form className="space-y-4" id={"roadToContact"} >
                    <div>
                        <label htmlFor="nom" className="block text-gray-700 mb-2">Nom *</label>
                        <input type="text" id="nom" className="w-full p-2 border border-gray-300 rounded bg-gray-200" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Adresse e-mail *</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded bg-gray-200" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                        <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded bg-gray-200" required></textarea>
                    </div>
                    <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                        ENVOYER LE FORMULAIRE
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="h-64 bg-gray-300 mb-4">
                    {/* Placeholder pour la carte */}
                    <iframe
                        src="/src/brussels_map.html"
                        title="Brussels Map"
                        className="w-full h-full"
                        style={{ border: 0 }}
                    />
                </div>
                <h2 className="text-xl font-semibold mb-2">Localisation</h2>
                <p className="flex items-center text-gray-600 mb-4">

                    Lavage-Auto, Bruxelles, Belgique
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-teal-500 hover:text-teal-600"><Facebook size={24}/></a>
                    <a href="#" className="text-teal-500 hover:text-teal-600"><Instagram size={24}/></a>
                    <a href="#" className="text-teal-500 hover:text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                             fill="currentColor">
                            <path
                                d="M16.878 17.474c.042.55.112 1.1.198 1.646a.364.364 0 01-.206.361c-1.208.591-2.39.813-3.556.813-.282 0-.563-.012-.841-.036-1.545-.128-3.063-.722-4.548-1.234-.31-.103-.591-.25-.891-.388-.21-.096-.348-.27-.332-.498.034-.53.073-1.061.108-1.592.01-.167-.058-.274-.22-.328-2.164-.702-3.771-1.877-4.869-3.643a8.582 8.582 0 01-.917-2.174c-.03-.112.033-.22.144-.257.663-.223 1.263-.513 1.84-.878.13-.08.187-.159.168-.32-.084-.688-.084-1.378-.015-2.067.033-.34.058-.683.102-1.022.043-.322.106-.642.193-.956.201-.725.479-1.412.946-2.029C5.83 3.12 6.76 2.565 7.868 2.255c.707-.197 1.422-.363 2.14-.53.116-.028.237-.025.351-.047.189-.037.253.034.301.217.168.673.348 1.344.503 2.02.037.163.103.232.272.23 1.063-.013 2.126-.024 3.188-.027.608 0 1.217.004 1.825.014.148.002.206-.05.236-.189.144-.66.311-1.317.468-1.975.075-.309.146-.619.233-.926.066-.226.132-.241.357-.186.538.126 1.08.225 1.614.371.792.21 1.559.476 2.266.875.772.434 1.35 1.055 1.828 1.807.324.522.528 1.09.706 1.67.162.527.275 1.067.365 1.61.07.41.11.825.144 1.24.046.55.048 1.1-.023 1.647-.017.138.027.231.142.31.68.451 1.366.882 2.073 1.28.115.066.155.176.124.3-.075.303-.165.601-.279.89-1.125 2.94-3.416 4.779-6.654 5.593-.185.048-.276.13-.31.315z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;