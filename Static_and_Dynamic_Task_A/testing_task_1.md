### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# method naming convention - would be better as check_for_ace in ruby.
  def checkforAce(card)
    # should be == operator as comparing values rather than re-assigning.
    if card.value = 1
      return true
    else
      return false
    end
  end

# 'dif' should be 'def' if defining a method.
# arguments should be separated by a comma, 'card1, card2'.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    # 'card' doesn't exist, needs to be card1 or card2 (probably card 1 as suggests it should be returning the highest card).
    # 'name' is not a property that exists in card.rb, so will return error anyway.
    return card.name
  else
    # returning the whole card2 object, rather than the name - inconsistent with above where we are returning the name.
    card2
  end
  # there is no option for if the cards are of the same value.
end
# the below 'end' is ending the class block, so the method below sits outside of the class - so 'self' won't be referring to the CardGame class as expected.
end

def self.cards_total(cards)
  # need to assign total to something, i.e. total = 0
  total
  for card in cards
    total += card.value
    # return sits inside of the for loop, so will return after the first card, rather than totalling up all of the cards.
    # single responsibility suggests perhaps should return total as a value - and then return the string message in a separate function - not an error but best practice.
    # trying to add a string to an integer - need interpolation or conversion of 'total' to string.
    return "You have a total of" + total
  end
end


```
