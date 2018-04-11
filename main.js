(function() {
  var app = angular.module('cardDemo', ['DeckOfCards']);
  app.controller('CardController', CardController);

  // inject the deckFactory from the DeckOfCards module into our controller
  CardController.$inject = ['deckFactory'];

  function CardController(deckFactory) {
    var self = this;

    // calling  createNewDeck  to create a new deck of cards
    self.deck = deckFactory.createNewDeck();

    // an array to show cards that have been dealt
    self.dealt = [];
    self.shuffle = self.deck.shuffle;
    self.reset = reset;
    self.dealOne = dealOne;
    self.dealAll = dealAll;
    self.dealShuffledDeck = dealShuffledDeck;
    self.removeFromList = removeFromList;

    function reset() {
      self.dealt = [];
      self.deck.reset();
    }

    function dealOne() {
      var nextCard = self.deck.dealOneCard();
      if (nextCard) {
        self.dealt.push(nextCard);
      }
      return nextCard;
    }

    function dealAll() {
      self.reset();
      while (dealOne()) {}
    }

    // deal and shuffle all cards
    function dealShuffledDeck() {
      self.reset();
      self.shuffle();
      self.dealAll();
    }
    function removeFromList(index){

      console.log("===> ",self.deck);
      self.deck.cards.push(self.dealt[index]);
      self.dealt.splice(index, 1);

      console.log("dealt after ===> ",self);

    }
  }

})();
