## Wordle Helper
A helper for the popular word game [Wordle](https://www.powerlanguage.co.uk/wordle/).
## Instructions

```ruby
ruby wordle.rb CORRECT ABSENT PRESENT PRESENT PRESENT PRESENT PRESENT PRESENT
# ex: ruby wordle.rb ...E. GZ .T... ..... ..... ..... .....
```

- Where `CORRECT` is letters that correct and in the right position
- Where `ABSENT` is letters that are absent from the word
- Where `PRESENT` are the letters that are present in the word but not in the right place. Each on represents a turn in the game.

## Credits
The word list was extracted from from [tabatkins/wordle-list/main/words](https://raw.githubusercontent.com/tabatkins/wordle-list/main/words).