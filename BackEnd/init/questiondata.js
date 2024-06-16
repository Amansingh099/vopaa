const question = [
    { question: "Spell CAT", correct_ans: "CAT", class: 1, level: 2 },
    { question: "Spell DOG", correct_ans: "DOG", class: 1, level: 2 },
    { question: "Spell FISH", correct_ans: "FISH", class: 2, level: 2 },
    { question: "Spell BIRD", correct_ans: "BIRD", class: 2, level: 2 },
    { question: "Spell ELEPHANT", correct_ans: "ELEPHANT", class: 3, level: 2 },
    { question: "Spell KANGAROO", correct_ans: "KANGAROO", class: 3, level: 2 },
    { question: "Spell CHIMPANZEE", correct_ans: "CHIMPANZEE", class: 4, level: 2 },
    { question: "Spell HIPPOPOTAMUS", correct_ans: "HIPPOPOTAMUS", class: 4, level: 2 },
    { question: "Spell A", correct_ans: "A", class: 1, level: 1 },
    { question: "Spell B", correct_ans: "B", class: 2, level: 1 },
    { question: "Spell C", correct_ans: "C", class: 3, level: 1 },
    { question: "Spell D", correct_ans: "D", class: 4, level: 1 },
    { question: "Spell E", correct_ans: "E", class: 1, level: 1 },
    { question: "Spell F", correct_ans: "F", class: 2, level: 1 },
    { question: "Spell G", correct_ans: "G", class: 3, level: 1 },
    { question: "Spell H", correct_ans: "H", class: 4, level: 1 },
    { question: "Spell I", correct_ans: "I", class: 1, level: 1 },
    { question: "Spell J", correct_ans: "J", class: 2, level: 1 },
    { question: "Spell K", correct_ans: "K", class: 3, level: 1 },
    { question: "Spell L", correct_ans: "L", class: 4, level: 1 },
    { question: "Spell M", correct_ans: "M", class: 1, level: 1 },
    { question: "Spell N", correct_ans: "N", class: 2, level: 1 },
    { question: "Spell O", correct_ans: "O", class: 3, level: 1 },
    { question: "Spell P", correct_ans: "P", class: 4, level: 1 },
    { question: "Spell Q", correct_ans: "Q", class: 1, level: 1 },
    { question: "Spell R", correct_ans: "R", class: 2, level: 1 },
    { question: "Spell S", correct_ans: "S", class: 3, level: 1 },
    { question: "Spell T", correct_ans: "T", class: 4, level: 1 },
    { question: "Spell U", correct_ans: "U", class: 1, level: 1 },
    { question: "Spell V", correct_ans: "V", class: 2, level: 1 },
    { question: "Spell W", correct_ans: "W", class: 3, level: 1 },
    { question: "Spell X", correct_ans: "X", class: 4, level: 1 },
    { question: "Spell Y", correct_ans: "Y", class: 1, level: 1 },
    { question: "Spell Z", correct_ans: "Z", class: 2, level: 1 },
    { question: "Spell the sentence 'I am a cat.'", correct_ans: "I am a cat.", class: 1, level: 3 },
    { question: "Spell the sentence 'The dog is big.'", correct_ans: "The dog is big.", class: 1, level: 3 },
    { question: "Spell the sentence 'She likes to run fast.'", correct_ans: "She likes to run fast.", class: 2, level: 3 },
    { question: "Spell the sentence 'The sun sets in the west.'", correct_ans: "The sun sets in the west.", class: 2, level: 3 },
    { question: "Spell the sentence 'Elephants are the largest land animals.'", correct_ans: "Elephants are the largest land animals.", class: 3, level: 3 },
    { question: "Spell the sentence 'Kangaroos can jump very high.'", correct_ans: "Kangaroos can jump very high.", class: 3, level: 3 },
    { question: "Spell the sentence 'Chimpanzees are known for their intelligence.'", correct_ans: "Chimpanzees are known for their intelligence.", class: 4, level: 3 },
    { question: "Spell the sentence 'Hippopotamuses live in rivers and lakes in Africa.'", correct_ans: "Hippopotamuses live in rivers and lakes in Africa.", class: 4, level: 3 },
    { question: "Spell the paragraph 'The cat sat on the mat. It was a sunny day. The cat enjoyed the warmth.'", correct_ans: "The cat sat on the mat. It was a sunny day. The cat enjoyed the warmth.", class: 1, level: 4 },
    { question: "Spell the paragraph 'The dog barked loudly in the yard. It chased after a squirrel. The dog was very happy.'", correct_ans: "The dog barked loudly in the yard. It chased after a squirrel. The dog was very happy.", class: 1, level: 4 },
    { question: "Spell the paragraph 'During the summer, the days are long and hot. People often go to the beach to cool off. Children build sandcastles and play in the water.'", correct_ans: "During the summer, the days are long and hot. People often go to the beach to cool off. Children build sandcastles and play in the water.", class: 2, level: 4 },
    { question: "Spell the paragraph 'Autumn brings a change in the weather. The leaves on the trees turn vibrant colors and fall to the ground. It is a beautiful season for hiking and enjoying nature.'", correct_ans: "Autumn brings a change in the weather. The leaves on the trees turn vibrant colors and fall to the ground. It is a beautiful season for hiking and enjoying nature.", class: 2, level: 4 },
    { question: "Spell the paragraph 'Elephants are fascinating creatures. They are known for their large ears, long trunks, and tusks. These animals live in herds and have strong social bonds. They communicate with each other through sounds and vibrations.'", correct_ans: "Elephants are fascinating creatures. They are known for their large ears, long trunks, and tusks. These animals live in herds and have strong social bonds. They communicate with each other through sounds and vibrations.", class: 3, level: 4 },
    { question: "Spell the paragraph 'Kangaroos are native to Australia. They have powerful hind legs that allow them to leap great distances. Kangaroos carry their young in pouches until they are old enough to hop around on their own. These animals are herbivores and primarily eat grass.'", correct_ans: "Kangaroos are native to Australia. They have powerful hind legs that allow them to leap great distances. Kangaroos carry their young in pouches until they are old enough to hop around on their own. These animals are herbivores and primarily eat grass.", class: 3, level: 4 },
    { question: "Spell the paragraph 'Chimpanzees are known for their intelligence and ability to use tools. They live in social groups and have complex communication systems. Chimpanzees can be found in the forests of Central and West Africa. They spend a lot of time in trees, where they build nests to sleep in.'", correct_ans: "Chimpanzees are known for their intelligence and ability to use tools. They live in social groups and have complex communication systems. Chimpanzees can be found in the forests of Central and West Africa. They spend a lot of time in trees, where they build nests to sleep in.", class: 4, level: 4 },
    { question: "Spell the paragraph 'Hippopotamuses are large, mostly herbivorous mammals found in sub-Saharan Africa. They spend much of their time in water to keep their massive bodies cool. Despite their bulk, hippos can run quickly on land. They are also known for their powerful jaws and large teeth, which they use for defense.'", correct_ans: "Hippopotamuses are large, mostly herbivorous mammals found in sub-Saharan Africa. They spend much of their time in water to keep their massive bodies cool. Despite their bulk, hippos can run quickly on land. They are also known for their powerful jaws and large teeth, which they use for defense.", class: 4, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The cat sat on the mat. It looked very comfortable.", correct_ans: "the cat sat on the mat. it looked very comfortable.", class: 1, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The dog barked loudly at the stranger. Then, it ran back to its owner.", correct_ans: "the dog barked loudly at the stranger. then, it ran back to its owner.", class: 1, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The bird sang a beautiful song. It made everyone happy.", correct_ans: "the bird sang a beautiful song. it made everyone happy.", class: 1, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The quick brown fox jumps over the lazy dog. It was a sunny day.", correct_ans: "the quick brown fox jumps over the lazy dog. it was a sunny day.", class: 2, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: A bird in the hand is worth two in the bush. This is a well-known saying.", correct_ans: "a bird in the hand is worth two in the bush. this is a well-known saying.", class: 2, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The children played in the park. They had a lot of fun.", correct_ans: "the children played in the park. they had a lot of fun.", class: 2, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: In a small village, nestled in the mountains, lived a wise old man who knew the secrets of the forest. People often came to him for advice.", correct_ans: "in a small village, nestled in the mountains, lived a wise old man who knew the secrets of the forest. people often came to him for advice.", class: 3, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The sun set behind the hills, casting long shadows over the valley below. The villagers prepared for the night.", correct_ans: "the sun set behind the hills, casting long shadows over the valley below. the villagers prepared for the night.", class: 3, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The river flowed gently through the town, providing water for all. Children often played by its banks.", correct_ans: "the river flowed gently through the town, providing water for all. children often played by its banks.", class: 3, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The complex interplay between the predator and its prey in the dense jungle environment demonstrates the delicate balance of nature's ecosystems. Scientists study these interactions closely.", correct_ans: "the complex interplay between the predator and its prey in the dense jungle environment demonstrates the delicate balance of nature's ecosystems. scientists study these interactions closely.", class: 4, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: Advances in technology have dramatically altered the landscape of modern communication, allowing for instant connectivity across the globe. This has changed how we interact with each other.", correct_ans: "advances in technology have dramatically altered the landscape of modern communication, allowing for instant connectivity across the globe. this has changed how we interact with each other.", class: 4, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: As the expedition ventured deeper into the cavern, the explorers marveled at the stunning formations of stalactites and stalagmites that adorned the underground chambers. It was a sight to behold.", correct_ans: "as the expedition ventured deeper into the cavern, the explorers marveled at the stunning formations of stalactites and stalagmites that adorned the underground chambers. it was a sight to behold.", class: 4, level: 4 },
    { question: "READ THE FOLLOWING PARAGRAPH: The intricate dance of the planets around the sun is governed by the laws of gravity, a force that influences every object in the universe. Astronomers have studied these movements for centuries.", correct_ans: "the intricate dance of the planets around the sun is governed by the laws of gravity, a force that influences every object in the universe. astronomers have studied these movements for centuries.", class: 4, level: 4 }
  ];
  
  module.exports = { data: question };
  
