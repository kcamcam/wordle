words = File.open('words.txt')
correct = ARGV[0].downcase
absent = ARGV[1].downcase
present = [ARGV[2].downcase, ARGV[3].downcase, ARGV[4].downcase, ARGV[5].downcase, ARGV[6].downcase]

open_list = []
words.each do |word|
  invalid = false

  # the word contains a character from the absent list
	invalid = (word.chars & absent.chars).any?
  next if invalid

  # the word does not have the correct letter(s) in the correct position(s)
	correct.chars.each_with_index do |char, i|
		next if char.eql?(".")

		invalid = !char.eql?(word[i])
    break if invalid
	end
	next if invalid

  present.each do |pres|
    pres.chars.each_with_index do |char, i|
      next if char.eql?(".")

      # the word does not contain a character that should be present
      invalid = !word.include?(char)
      break if invalid

      # the word contains a character that should be prresebt but in the wrong position
      invalid = word[i].eql?(char)
      break if invalid
    end
    break if invalid
  end
  next if invalid

	open_list << word
end

puts open_list
puts "choose from one of the #{open_list.size} words above."