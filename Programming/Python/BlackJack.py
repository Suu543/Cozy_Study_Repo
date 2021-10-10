import random

suits = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
ranks = ('Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
         'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace')
values = {'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10, 'Jack': 10,
          'Queen': 10, 'King': 10, 'Ace': 11}

playing = True


class Card:

    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
        self.value = values[rank]

    def __str__(self):
        return self.rank + ' of ' + self.suit


class Deck:

    def __init__(self):
        self.deck = []
        for suit in suits:
            for rank in ranks:
                self.deck.append(Card(suit, rank))

    def shuffle(self):
        random.shuffle(self.deck)

    def deal(self):
        single_card = self.deck.pop()
        return single_card

    def __str__(self):
        deck_comp = ''  # start with an empty string
        for card in self.deck:
            deck_comp += '\n ' + card.__str__()

        return 'The deck has: ' + deck_comp


''' Create a Hand Class
In addition to holding Card objects dealt from the Deck,
the Hand class may be used to calculate the value of those cards using the values dictionary.
It may also need to adjust for the value of Aces when appropriate
'''


class Hand:

    def __init__(self):
        self.cards = []
        self.value = 0
        self.aces = 0

    def add_card(self, card):
        self.cards.append(card)
        self.value += values[card.rank]
        if card.rank == 'Ace':
            self.aces += 1

    def adjust_for_ace(self):
        while self.value > 21 and self.aces:
            self.value -= 10
            self.aces -= 1


''' Create a Chips Class
'''


class Chips:

    def __init__(self):
        self.total = 100
        self.bet = 0

    def win_bet(self):
        self.total = self.total + self.bet

    def lose_bet(self):
        self.total = self.total - self.bet


def take_bet(chips):
    # 1. How many chips would you like to bet?
    # 2. Your bet can't exceed or A bet must be an integer!
    pass


def hit(deck, hand):
    pass


def hit_or_stand(deck, hand):
    pass


def show_some(player, dealer):
    pass


def show_all(player, dealer):
    pass


def player_busts(player, dealer, chips):
    pass


def player_wins(player, dealer, chips):
    pass


def dealer_busts(player, dealer, chips):
    pass


def dealer_wins(player, dealer, chips):
    pass


def push(player, dealer):
    pass
