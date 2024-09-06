import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            nom: name,
            email: email,
            message: message
        };
    
        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert(`Données soumises avec succès : \nNom: ${result.nom}\nEmail: ${result.email}\nMessage: ${result.message}`);
            } else {
                alert('Erreur lors de la soumission');
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };



    return (
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6">
            <div className="w-full md:w-1/2 pr-6">
                <h1 className="text-couleur-titre text-4xl mb-4">Contactez-nous</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Contactez-nous pour un devis gratuit et personnalisé.
                </p>
                <form className="space-y-4" id="roadToContact" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom *</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="nom"
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Adresse e-mail *</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message *</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-teal-500 text-black text-opacity-80 px-4 py-2 font-bold rounded hover:bg-teal-600">
                        ENVOYER LE FORMULAIRE
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="h-64 bg-gray-300 mb-4">
                    <div className="w-full h-full">
                        <MapContainer
                            center={[50.8503, 4.3517]}
                            zoom={13}
                            className="h-full w-full"
                            scrollWheelZoom={false}
                            zoomControl={true}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[50.840, 4.329]}>
                                <Popup></Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">Localisation</h2>
                <p className="flex items-center text-gray-600 mb-4">
                    Lavage-Auto, Bruxelles, Belgique
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-teal-500 hover:text-teal-600"><Facebook size={24} /></a>
                    <a href="https://www.instagram.com/lavage_autobxl/" target='_blank' className="text-teal-500 hover:text-teal-600"><Instagram size={24} /></a>
                    <a href="#" className="text-teal-500 hover:text-teal-600">
                        {/* Icône personnalisée */}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
