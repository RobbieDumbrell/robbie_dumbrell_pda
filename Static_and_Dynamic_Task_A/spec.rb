require('minitest/autorun')
require ('minitest/rg')
require_relative('./testing_task_2.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new('Hearts', 5)
    @card2 = Card.new('Spades', 1)
    @card3 = Card.new('Clubs', 9)
    @card4 = Card.new('Diamonds', 5)

    @cards = [@card1, @card2, @card3, @card4]

    @cardGame = CardGame.new()
  end

  def test_card_has_suit
    assert_equal('Hearts', @card1.suit)
  end

  def test_card_has_value
    assert_equal(9, @card3.value)
  end

  def test_card_game_can_check_for_ace__correct
    actual = @cardGame.check_for_ace(@card2)
    assert_equal(true, actual)
  end

  def test_card_game_can_check_for_ace__incorrect
    actual = @cardGame.check_for_ace(@card1)
    assert_equal(false, actual)
  end

  def test_card_game_can_determine_highest_card__highest_first
    assert_equal(@card1, @cardGame.highest_card(@card1, @card2))
  end

  def test_card_game_can_determine_highest_card__highest_second
    assert_equal(@card1, @cardGame.highest_card(@card2, @card1))
  end

  def test_card_game_highest_card_returns_nil_if_same_value
    assert_nil(@cardGame.highest_card(@card4, @card1))
  end

  def test_card_game_can_total_group_of_cards
    assert_equal('You have a total of 20', CardGame.cards_total(@cards))
  end

end
