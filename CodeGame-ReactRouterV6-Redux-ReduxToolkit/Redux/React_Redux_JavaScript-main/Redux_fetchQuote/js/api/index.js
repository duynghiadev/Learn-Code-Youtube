const quotes = [{
  "tags": ["god", "science", "atheism", "short", "technology", "religion"],
  "quote": "There is no great invention, from fire to flying, which has not been hailed as an insult to some god.",
  "lang": "en",
  "author": "John Burdon Sanderson Haldane"
}, {
  "tags": ["science", "skepticism", "atheism", "short", "religion"],
  "quote": "That which can be asserted without evidence, can be dismissed without evidence.",
  "lang": "en",
  "author": "Christopher Hitchens"
}, {
  "tags": ["computer science", "technology", "algorithms", "moore's law", "progress"],
  "quote": "When it comes to the growth of the size of problems we can attack with an algorithm, we have a reversal: exponential algorithms make polynomially slow progress, while polynomial algorithms advance exponentially fast! For Moore's law to be reflected in the world we need efficient algorithms.",
  "lang": "en",
  "author": "Christos Papadimitriou, Sanjoy Dasgupta, Umesh Vazirani"
}, {
  "tags": ["short", "definition", "creativity", "entrepreneurship"],
  "quote": "Vuja de is when you look at something you've seen many times before and all of a sudden see it with fresh eyes.",
  "lang": "en"
}, {
  "tags": ["short", "rationalisation"],
  "quote": "A man generally has two reasons for doing a thing; one that sounds good, and a real one.",
  "lang": "en",
  "author": "John Pierpont Morgan"
}, {
  "tags": ["science", "skepticism", "rationality", "knowledge"],
  "quote": "Your strength as a rationalist is your ability to be more confused by fiction than by reality. If you are equally good at explaining any outcome, you have zero knowledge.",
  "lang": "en",
  "author": "Eliezer Yudkowsky"
}, {
  "tags": ["science", "short", "technology", "nanotechnology"],
  "quote": "Ribosomes are proof that nanomachines built of protein and RNA can be programmed to build complex molecules.",
  "lang": "en",
  "author": "Kim Eric Drexler"
}, {
  "tags": ["short", "computer science", "software engineering", "startup", "programming"],
  "quote": "The computing scientist's main challenge is not to get confused by the complexities of his own making.",
  "lang": "en",
  "author": "Edsger Wybe Dijkstra"
}, {
  "tags": ["ethics", "antinatalism"],
  "quote": "[...] the true reason for making someone to come into being is never for the person’s own sake, but always for the interest of his/her progenitors, in a clear attitude of manipulation; radical manipulation indeed because, in contrast with usual manipulation of people already alive, manipulation in procreation affects the very being of the person, and not only some of his/her predicates.",
  "lang": "en",
  "author": "Julio Cabrera"
}, {
  "tags": ["science", "short", "rationality", "statistics"],
  "quote": "[A]ll models are wrong, but some are useful.",
  "lang": "en",
  "author": "George Edward Pelham Box"
}, {
  "tags": ["ai", "computer science", "simulation"],
  "quote": "A computer cannot realise a solution of the Navier-Stokes equations in which the solution variables refer to atmospheric pressure, velocity, density etc. because a computer does not possess these quantities. A computer can only represent variables such as atmospheric pressure.",
  "lang": "en",
  "author": "Gordon McCabe"
}, {
  "tags": ["suffering", "animals", "earth"],
  "quote": "If we imagined that from now on, animals started emitting a red light every time they suffered, then from space, Earth would no longer be a blue planet, but a red and glowing on.",
  "lang": "en",
  "author": "Ole Martin Moen"
}, {
  "tags": ["ethics", "short", "consciousness", "negative utilitarianism", "mind", "value"],
  "quote": "Like redness, “mattering”, or simply \"value\", is inherent to [the sensations below hedonic zero].",
  "lang": "en",
  "author": "Magnus Vinding"
}, {
  "tags": ["science", "research"],
  "quote": "Assigning fixed quantitative values to arbitrary qualitative categories results only in false precision and gives the impression that the measurement contains more information than the researcher actually has.",
  "lang": "en",
  "author": "Mark D. White"
}, {
  "tags": ["science", "ethics", "transhumanism", "future"],
  "quote": "Can Ethics ever aspire to be a rigorous academic discipline that delivers an impartial perspective embracing the interests of all sentient life: the well being of posthuman, human and non-human animals; hypothetical extra-terrestrial life, future \"cyborgs\", and artificial life alike? Or will Ethics always serve to rationalize the self-interest of the world’s most powerful lifeforms?",
  "lang": "en",
  "author": "David Pearce"
}, {
  "tags": ["skepticism", "atheism", "short", "religion", "rationality"],
  "quote": "Choosing beliefs freely is not what rational minds do.",
  "lang": "en",
  "author": "Sam Harris"
}, {
  "tags": ["software engineering", "programming"],
  "quote": "Code comments that tell you nothing useful are a waste of space. The code will always tell you how something is done; code comments should tell you why.",
  "lang": "en",
  "author": "Edward Guiness"
}, {
  "tags": ["ethics", "vegan", "discrimination", "speciesism"],
  "quote": "If possessing a higher degree of intelligence does not entitle one human to use another for his or her own ends, how can it entitle humans to exploit non-humans?",
  "lang": "en",
  "author": "Peter Singer"
}, {
  "who": "Richard Noonan",
  "tags": ["fiction", "short", "money"],
  "quote": "[A] person needs money in order to never think about them.",
  "lang": "en",
  "author": "Arkady Strugatsky, Boris Strugatsky"
}, {
  "tags": ["short", "strategy"],
  "quote": "[I]t is far better to know the terrain than to plan on taking one particular path through the woods.",
  "lang": "en",
  "author": "Roger Fisher, William Ury"
}];

const api = {
  fetchQuote() {
    return new Promise((resolve, reject) => {

      const wait = Math.floor(Math.random() * 3) + 3;

      setTimeout(() => {
        const index = Math.floor(Math.random() * 20);
        console.log(index);
        console.log(quotes[index]);
        resolve(quotes[index]);
      }, wait * 1000);
    });
  }
};

export default api;
