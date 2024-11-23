function randomQuote(){
    var quote=[
{quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
writter:"― Maya Angelou"},
        {quote:"“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .”",
            writter:"― C.S. Lewis, The Four Loves"  
        },
        {quote:"“A friend is someone who knows all about you and still loves you.”",
            writter:"― Elbert Hubbard"  
        },
        {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
            writter:"― Oscar Wilde"  
        },
        {quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
            writter:"― Mahatma Gandhi"  
        },
        {quote:"“We accept the love we think we deserve.”",
            writter:"― Stephen Chbosky, The Perks of Being a Wallflower"  
        },

    ]
   var i=Math.floor(Math.random()*10)
   
        document.getElementById("q1").innerHTML=quote[i].quote;
    document.getElementById("q2").innerHTML=quote[i].writter;
}
 