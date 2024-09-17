import React from 'react';

const MechanicalKeyboardsInfo: React.FC = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Section 1: Why Choose Mechanical Keyboards */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl rounded-lg p-6">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Why Choose Mechanical Keyboards?</h2>
        <p className="text-lg text-center text-gray-100">
          Mechanical keyboards are highly favored by both gamers and professionals for their durability, responsiveness, and tactile feedback. Unlike membrane keyboards, mechanical keyboards use individual switches for each key, providing a more satisfying and reliable typing experience.
        </p>
        <ul className="list-disc list-inside mt-6 text-white text-center">
          <li>Enhanced typing accuracy</li>
          <li>Customizable switches for different feel and sound</li>
          <li>Long-lasting durability (50 million keystrokes)</li>
          <li>Ergonomic designs for comfort</li>
        </ul>
      </section>

      {/* Section 2: Customizable Options */}
      <section className="bg-base-100 shadow-xl rounded-lg p-6">
        <h2 className="text-4xl font-bold text-center mb-6">Customizable Options</h2>
        <p className="text-lg text-center text-gray-700">
          Mechanical keyboards offer a wide range of customization options to suit your typing preferences and style. Whether it's the feel of the switches or the look of the keycaps, you can make it uniquely yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Switches */}
          <div className="card bg-base-200 p-4 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">Switches</h3>
            <p className="text-center text-gray-600">
              Choose from various switches like Cherry MX, Gateron, and more. Each switch type offers a unique typing feel, ranging from clicky to linear, giving you control over your experience.
            </p>
          </div>

          {/* Keycaps */}
          <div className="card bg-base-200 p-4 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">Keycaps</h3>
            <p className="text-center text-gray-600">
              Replaceable keycaps allow for personalized aesthetics. From different colors to unique fonts and material choices, you can completely change the look of your keyboard.
            </p>
          </div>

          {/* RGB Lighting */}
          <div className="card bg-base-200 p-4 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">RGB Lighting</h3>
            <p className="text-center text-gray-600">
              Many mechanical keyboards come with customizable RGB lighting. Program specific colors and patterns, giving your setup a dynamic look that fits your style.
            </p>
          </div>

          {/* Macros */}
          <div className="card bg-base-200 p-4 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center mb-4">Macros</h3>
            <p className="text-center text-gray-600">
              Set up complex key combinations with macros, making tasks easier for productivity or giving gamers a competitive edge in fast-paced games.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MechanicalKeyboardsInfo;
