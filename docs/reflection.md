# Reflektion över Clean Code kapitel 2-11
Denna reflektion visar hur jag har arbetat utifrån ett "Clean Code" perspektiv i mitt projekt. 

## Kapitel 2 -  Meaningful Names
* Use intention revealing names, namn som talar om varför den existerar, vad den gör och hur den används.
* Avoid desinformation, använd inte ord som kan misstolkas, inte ord som är för lika varandra, inte ord som redan har betydelse för programmerare
* Make meaningful distinctions, lägg inte till brusord (ord som inte tillför information)
* Use pronouncable names, ord som går att uttala
* Use searchable names, namn som går att söka på, inte bara en bokstav eller en siffra
* Avoid encodings, lägg inte till "kodningar"
* Avoid member prefixes
* Märk inte upp gränssnittet med I, låt namnet tala för sig själv
* Avoid Mental Mapping, låt inte användaren behöva memorera vad namnet representerar, utan det ska vara tydlgit
* Avoid verb in classnames
* Use verbs in methodnames
* Don't Be Cute, välj tydliga nman och inte påhittade/humoristiska
* Pick One Word Per Concept, Alla metoder som hämtar något heter get, inte blanda get och sen i annan fetch
* Don't Pun, använd inte samma namn för två olika principer
* Use Solution Domain Names, tekniska termer om relevant
* Use Problem Domain Names, begrepp från problemområdet om tekniska termer inte finns
* Add Meaningful Context, flera variabler tillsammans kan skapa förståelse, men man ska förstå syftet med de enskilda utifrån namnet
* Don't Add Gratiuitous Context, lägg inte till onödiga ord/förkortningar. Blir för långt och svårt att läsa 

## Kapitel 3 - Functions
* Do One Thing, en funktion ska göra EN sak
* If, else, while Blocks should be one line long, ett funktionsanrop
* One level of abstraction per function, inte blanda t ex uträkning och hämtning
* The Stepdown Rule, koden ska kunna läsas som en berättelse uppifrån och ner. Först en abstraktionsnivå, sen följande, sen följande.
* Endast en switch-sats
* Use Descriptive Names, beskrivande namn som visar vad en funktion gör
* Funktionsargumentregeln, så få argument som möjligt för att underlätta för läsaren, för att förstå
* Flag-argument, inte skicka in boolean som argument
* Argumentobjekt, bättre skicka in argument som objekt om de är fler än två/tre
* Verb/Nyckelordsregeln, argumentens namn ska kodas in i funktionsnamnet, t ex assertExpectedEqualsActual(expected, actual)
Minskar risken för förvirring och buggar
* No side effects, en funktion ska endast göra det namnet säger, inget mer.
* Output-argument, 
* Command, en funktion ska antingen göra något (command) eller svara på något (query)
* Felhantering, inte returnera felkoder utan exceptions, extrahera try/catch
* Error handling is one thing, bryt ut till egen funktion
* Don't Repeat Yourself, undvik duplicering av kod

## Kapitel 4 - Comments
* Explain yourself in code, om du känner behov av kommentar, kan det uttryckas i koden istället 
* Legal Comments, kommentarer som måste finnas av juridiska skäl är ok
* Informative comments, När något inte går att uttrycka i kod, t ex returvärde
* Explanation of Intent, När varför koden finns måste förklaras och inte vad som sker
* Clarification, om något måste förklaras som ett API eller beroende
* Warning of Consequences, om risker finns
* TODO Comments, tilfälliga notiser om förbättringar, bra om de hålls uppdaterade annar inte ok
* Amplification, om något extra viktigt måste betonas
* Javadocs in public APIs, viktiga att ha med, men måste hållas uppdaterade
* Mumbling, vaga/mumlande kommentarer ej ok
* Redundant Coments, säga det som redan framgår av funktionsnamn, ej ok
* Misleading Coments, om klommentaren inte stämmer med koden, ej ok
* Mandated comments, organisationskrav som "alla metoder ska ha kommentar", ej ok
* Journal Comments, använd git istället
* Noise Comments, t ex // default constructor, tillför inget
* Scary Noise, överdrivet användande av kommentarer av intern kod, privata fält osv
* Don't Use A Comment When You Can Use A Function/Variable, 
* Position Marker, dekorativa kommentarer, ej ok
* Closing Brace Comments, skriv kortare funktioner istället för att förklara vilken } som stänger vilken del
* Attributions and Bylines, kommentera inte vem som gjort vad i koden
* Commented-Out Code, 
* HTML Comments, skriv inga html-taggar, det sköts automatiskt
* Nonlocal Information, kommentarer över systemet i en lokal funktion
* Too Much Information, utlägg som hör hemma i allmän dokumentation och inte i koden
* Inobvious Connection, kommentar som man inte förstår till vilket kodstycke den tillhör
* Function Headers , överflödiga rubriker för små funktioner
* Javadocs in NonPublic Code, slöseri med tid i icke-publik kod

## Kapitel 5 - Formatting


## Kapitel 6 - Objects and Data Structures


## Kapitel 7 - Error Handling


## Kapitel 8 - Boundaries


## Kapitel 9 - Unit Tests


## Kapitel 10 - Classes


## Kapitel 11 - Systems