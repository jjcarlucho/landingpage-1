import React, { useEffect } from 'react';

const Pricing: React.FC = () => {
  const bonuses = [
    {
      title: 'AI Tools Checklist',
      value: '$97',
      description:
        'A comprehensive guide to the best AI tools for content creation and marketing.',
      fullDescription:
        "Imagine sitting down to work and instantly knowing which AI tools to use to write emails, create social media posts, or draft sales pages—all from one simple checklist. No more guessing or wasting time trying to figure out what's worth using.",
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Your Wish Is Your Command Audios',
      value: '$10,000',
      description:
        'Una serie de audios legendarios sobre mentalidad, manifestación y Ley de Atracción aplicados a los negocios.',
      fullDescription:
        "Picture yourself starting each morning with powerful mindset audios that help you own your day, reset your thinking, and attract better business opportunities. Instead of being stuck in hustle mode, you'll start to operate from clarity and confidence.",
      image:
        'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'TFT Course',
      value: '$997',
      description:
        'Aprendé a liberar bloqueos subconscientes y emociones que sabotean tu progreso.',
      fullDescription:
        'Imagine closing a client call without fear, hesitation, or that nagging sense of self-doubt. This course helps you unblock hidden emotional patterns so you can move through your business journey with calm, certainty, and flow.',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const totalBonusValue = 97 + 10000 + 997; // $11,094 total value

  React.useEffect(() => {
    const regularPrice = (11.11 * 2).toFixed(2);
    const originalPrice = (11.11 + 200).toFixed(2);

    const regularPriceElement = document.getElementById('regularPrice');
    const regularPrice2Element = document.getElementById('regularPrice2');
    const originalPriceElement = document.getElementById('originalPrice');

    if (regularPriceElement) {
      regularPriceElement.textContent = `$${regularPrice}`;
    }
    if (regularPrice2Element) {
      regularPrice2Element.textContent = `$${regularPrice}`;
    }
    if (originalPriceElement) {
      originalPriceElement.textContent = `$${originalPrice}`;
    }
  }, []);

  return (
    <section
      id="offer"
      className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Introduction */}
          <div className="text-center space-y-6 mb-12">
            <p className="text-xl">
              Initially, I felt I should charge at least enough to cover the
              effort that went in.
            </p>

            <p className="text-xl">
              At even just <span id="regularPrice" className="font-bold"></span>
              , I believe you'll find it more than fair.
            </p>

            <p className="text-xl">
              Especially since this is a resource you'll keep and refer back to
              whenever you need.
            </p>

            <p className="text-xl font-semibold">
              But now, as we've been through this together…
            </p>

            <p className="text-xl">It feels like we have a connection.</p>

            <p className="text-xl">Because I've helped many in your shoes…</p>

            <p className="text-xl">
              People who are happier and more secure financially.
            </p>

            <p className="text-xl">
              And I've also seen others think that even{' '}
              <span id="regularPrice2" className="font-bold"></span> is too
              steep to pay for such clarity and peace.
            </p>

            <p className="text-xl">
              And they miss out on exactly the kind of financial freedom they're
              seeking
            </p>

            <p className="text-xl font-bold">I don't want that for you.</p>

            <p className="text-xl">
              That's why today, I am offering it for even less at just{' '}
              <span id="originalPrice" className="font-bold"></span>.
            </p>

            <p className="text-xl font-semibold">
              But to thank you for your time today…
            </p>

            <p className="text-xl font-semibold">
              And because it's clear you're ready for this transformation…
            </p>

            <p className="text-xl font-bold">
              If you act now during this special offer…
            </p>
          </div>

          {/* Price Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-12 text-center">
            <h3 className="text-4xl font-bold mb-6">
              You can get everything for $11.11.
            </h3>

            <p className="text-xl mb-6">
              That means you're saving over ${totalBonusValue.toLocaleString()}{' '}
              in bonuses... before the $200 off the usual price…
            </p>

            <p className="text-xl mb-8">
              Just to help you get started right now...plus:
            </p>

            {/* Bonuses */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-6">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                  <p className="text-yellow-400 font-bold mb-2">
                    Value: {bonus.value}
                  </p>
                  <p className="text-gray-300 mb-3">{bonus.description}</p>
                  <p className="text-sm text-gray-400 italic">
                    {bonus.fullDescription}
                  </p>
                </div>
              ))}
            </div>

            {/* Total Value */}
            <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-4 mb-8">
              <p className="text-xl font-bold">
                Total Value: ${totalBonusValue.toLocaleString()}
              </p>
              <p className="text-3xl font-bold text-yellow-400 mt-2">
                You Pay Only: $11.11
              </p>
            </div>

            {/* Guarantee */}
            <div className="bg-green-600/20 border-2 border-green-400 rounded-lg p-6 mb-8">
              <h4 className="text-2xl font-bold mb-4">
                7-Day Money Back Guarantee
              </h4>
              <p className="text-lg">
                And remember, if you're not happy with the outcome, we've got
                your back with our 7-day money-back guarantee.
              </p>
              <p className="text-lg mt-4">
                This way, you'll have the chance to see firsthand how impactful
                this can be.
              </p>
            </div>

            {/* Additional Content */}
            <div className="space-y-4 text-lg mb-8">
              <p>
                Soon enough, you'll notice progress and start moving towards
                your goals.
              </p>
              <p>
                Your worries will start to ease as you see results, and you'll
                feel empowered to take charge of your life.
              </p>
              <p>We've had a lot of happy customers already.</p>
              <p>
                If things don't work out or if you're not seeing results as
                quickly as you'd like, just drop me an email and I'll refund
                you.
              </p>
              <p className="font-bold">No hassle.</p>
            </div>

            {/* CTA Button */}
            <a
              href="https://buy.stripe.com/test_8wM16KcnC7dh4vi144"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Instant Access for $11.11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
