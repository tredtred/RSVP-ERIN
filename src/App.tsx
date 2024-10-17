import React, { useState } from 'react';
import { PartyPopper, ThumbsUp, ThumbsDown, HelpCircle, MapPin, Crown, Check, Send, MessageCircle } from 'lucide-react';
import RSVPButton from './components/RSVPButton';

type ResponseType = 'going' | 'notGoing' | 'thinking' | null;

function App() {
  const [userChoice, setUserChoice] = useState<ResponseType>(null);
  const [partyName, setPartyName] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showMessageOptions, setShowMessageOptions] = useState(false);

  const handleResponse = (type: ResponseType) => {
    if (type === userChoice) return;
    setUserChoice(type);
    setShowAdditionalFields(type === 'going');
    setShowMessageOptions(false);
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Kiddistop+Softplay+Sutton+Unit+1.09-1.11,+St+Nicolas+Shopping+Centre,+St+Nicholas+Way,+Sutton+SM1+1AY', '_blank');
  };

  const handleSubmit = () => {
    setShowMessageOptions(true);
  };

  const sendMessage = (method: 'whatsapp' | 'native') => {
    const message = encodeURIComponent(`RSVP for Loverin's Birthday:
Response: ${userChoice}
${userChoice === 'going' ? `Party Name: ${partyName}
Number of Guests: ${guestCount}` : ''}`);
    
    if (method === 'whatsapp') {
      window.open(`https://wa.me/447944751668?text=${message}`, '_blank');
    } else {
      window.open(`sms:+447944751668?body=${message}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
          <header className="text-center">
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h1 className="princess-font text-5xl font-bold text-pink-600 mb-2">Loverin's</h1>
            <h2 className="text-4xl font-bold text-purple-600 mb-2">3rd Birthday Celebration</h2>
            <p className="text-xl text-gray-600">Join us for a magical day full of fun and laughter!</p>
          </header>

          <div className="my-8 flex justify-center">
            <img 
              src="https://i.ibb.co/DYv2jk8/20241012-173138-AA.jpg" 
              alt="Loverin" 
              className="rounded-full w-64 h-64 object-cover border-4 border-yellow-400 shadow-lg animate-float"
            />
          </div>

          <div className="space-y-4 my-8">
            <p className="text-center text-gray-700">
              Date: Wednesday, January 8th, 2025<br />
              Time: 4:00 PM - 7:00 PM<br />
              Location: Kiddistop Softplay Sutton
            </p>
            <button 
              onClick={handleMapClick}
              className="flex items-center justify-center space-x-2 mx-auto bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <MapPin size={18} />
              <span>View on Google Maps</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <RSVPButton
              text="Going"
              icon={<ThumbsUp />}
              onClick={() => handleResponse('going')}
              color="bg-pink-500 hover:bg-pink-600"
              isActive={userChoice === 'going'}
              checkmark={userChoice === 'going' ? <Check className="absolute -top-2 -right-2 text-white bg-green-500 rounded-full p-1" size={20} /> : null}
            />
            <RSVPButton
              text="Not Going"
              icon={<ThumbsDown />}
              onClick={() => handleResponse('notGoing')}
              color="bg-purple-500 hover:bg-purple-600"
              isActive={userChoice === 'notGoing'}
              checkmark={userChoice === 'notGoing' ? <Check className="absolute -top-2 -right-2 text-white bg-green-500 rounded-full p-1" size={20} /> : null}
            />
            <RSVPButton
              text="Thinking"
              icon={<HelpCircle />}
              onClick={() => handleResponse('thinking')}
              color="bg-yellow-500 hover:bg-yellow-600"
              isActive={userChoice === 'thinking'}
              checkmark={userChoice === 'thinking' ? <Check className="absolute -top-2 -right-2 text-white bg-green-500 rounded-full p-1" size={20} /> : null}
            />
          </div>

          {showAdditionalFields && (
            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Name of party head"
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="number"
                placeholder="Number of guests (including children)"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          )}

          {userChoice && !showMessageOptions && (
            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center space-x-2"
            >
              <Send size={18} />
              <span>Submit RSVP</span>
            </button>
          )}

          {showMessageOptions && (
            <div className="mt-6 space-y-4">
              <button
                onClick={() => sendMessage('whatsapp')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>Send via WhatsApp</span>
              </button>
              <button
                onClick={() => sendMessage('native')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>Send via SMS</span>
              </button>
            </div>
          )}

          <footer className="text-center text-gray-600 mt-8">
            <p className="princess-font text-2xl text-pink-600">We can't wait to celebrate Loverin's special day with you!</p>
            <PartyPopper className="w-8 h-8 text-yellow-400 mx-auto mt-2 animate-spin" />
          </footer>

          <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">A Note on Gifts for Erin:</h3>
            <p className="text-gray-700">
              No more toys, please—we've run out of room for fun! And she's good on clothes too. Your company is the best gift, but if you're feeling extra generous, a little something for her piggy bank would be wonderful!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;