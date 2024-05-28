using System;
using System.Collections.Generic;

public class EnglishToDanishTranslator
{
    private Dictionary<string, string> translations = new Dictionary<string, string>
    {
        {"hello", "hej"},
        {"world", "verden"},
        {"goodbye", "farvel"},
        {"please", "vær så venlig"},
        {"thank you", "tak"},
        // Add more translations as needed
    };

    public string Translate(string englishWord)
    {
        if (translations.TryGetValue(englishWord.ToLower(), out string danishWord))
        {
            return danishWord;
        }
        else
        {
            throw new Exception($"No translation found for '{englishWord}'");
        }
    }
}