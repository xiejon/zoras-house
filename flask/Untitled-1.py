# %%
from gensim.models import KeyedVectors

def read_word2vec_model(filename):  
    try:
        print("Starting to load the model in ", filename, "...")
        model = KeyedVectors.load_word2vec_format(filename, binary=False)
        print("Model loaded.\n")
    except FileNotFoundError as e:
        print(f"  [WARNING]    The file {filename} was not found.     [WARNING]  ")
        return None   # returning a placeholder, not a model

    # let's print some attributes
    print("The model built is", model, "\n")
    print("The vocabulary has", model.vectors.shape[0], "words")   # The vocabulary has 43981 words
    print("Each word is a vector of size", model.vector_size)  # 300
    print("\nTry m.get_vector('python') to see a the vector for 'python'!\n")
    model.fill_norms()  # freezes the model, m, as-is (no more training)
    # we weren't going to train more, so no worries (in week7, at least)
    return model


m = read_word2vec_model(filename = "word2vec_model.txt")

# %%
def similarity(word1, word2):
    try:
        return float(m.similarity(word1, word2))
    except Exception:
        print("Invalid Choice(s)")
        return 0

# %%
# similarity('mother', 'mom')
# similarity('entrepreneur', 'business')
# similarity('single', 'married')
# similarity('drink', 'alcohol')

# %%
initial_words = "snake serpent code ai ml programming".split()
key = 'python'

def mostSimilar(initial_words = initial_words, key=key):
    LoS = []
    LoW = []
    maxMatch = ["", 0]
    for w in initial_words:
        if w in m:  # is the word, w present in the vocabulary?
            similarity = m.similarity(key,w)

            if similarity > maxMatch[1]:
                maxMatch[0] = w
                maxMatch[1] = round(float(similarity), 2)
                
            # print(f"similarity between {key} and {w}: {similarity:1.2f}", )
            LoS.append( similarity )
            LoW.append( w )
        else:
            pass
            #print(f"  __  {w}  __ was not in the vocabulary", )   # not every word will be present

    # print(f"LoS is {LoS}")
    # print(f"LoW is {LoW}")
    print(maxMatch[0])

mostSimilar()


