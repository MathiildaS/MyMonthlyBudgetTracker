# Reflektion över Clean Code kapitel 2-11
Denna reflektion visar hur jag har arbetat utifrån ett "Clean Code" perspektiv i mitt projekt. 

## Kapitel 2 -  Meaningful Names
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
* Don't Add Gratiuitous Context, lägg inte till onödiga ord/förkortningar. Blir för långt och svårt att läsa

Innan namngivning av mina variabler och metoder har jag funderat tills namnet kunnat besvara frågorna varför metoden/funktionen finns, vad den gör och hur den används för att följa principen **Use Intention Revealing Names**. Mina variabler/funktioner visar nu sitt syfte genom namnet och följer därför principen **Add Meaningful Context**. Liksom under arbetet med modulen har detta bidragit till väldigt långa namn. Författaren menar dock att långa, beskrivande namn är bättre än korta och otydliga och bättre än "onödiga" kommentarer. Så jag behåller mina långa namn. 

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
Gör koden läsbar, konsekvent och professionell. Andra ska förstå strukturen. 
Enkla, gemensamma regler ska tillämpas konsekvent. 
Vertical formatting, håll filer små, under 500 rader kod
* The Newspaper Methaphor, klassnamn (titel) avslöjar innehåll, början ger överblick och längre ner följer detaljer/implementationer
* Vertical Openness Between Concepts, olika logiska delar ska separeras av tomma rader
* Vertical Density, Kod som hör nära samman ska ligga nära varandra (inte skiljas med kommentarer/radbrytning)
* Vertical Distance, Relaterade delar ska placeras nära varandra. Variabel deklareras där den används, funktion nära där den anropas
* Vertical Order, Koden ska läsas uppifrån och ner. Hög nivå överst, detaljer längre ner
Horizontal Formatting, håll rader korta
* Horizontal Openness and Density, använd mellanslag för att gruppera eller separera. t ex mellan + och variabel, men inte mellan metod och ()
* Horizontal Alignment, lita på indentering och inte kolumnjustering
* Indentering, varje nivår ska ett steg åt höger. klass, metod, block
* Dummy-scopes, undvik tomma loop-kroppar
* Teamrules, alla i samma projekt ska följa samma stil

## Kapitel 6 - Objects and Data Structures
Hur vi representerar data och vilket ansvar klasserna ska ha för att hantera den.
Objekt - döljer data och exponerar beteenden, Datastruktur - Exponerar data och saknar beteende
* Data Abstraction, använda fel nivå av abstraktion. T ex i publika metoder, metodanrop till privata hjälpmetoder.
* Data/Object Anti-Symmetry , blanda inte objekt och datastrukturer i samma klass
* The Law of Dementer, undvik train wrecks (kedjor av anrop) t ex a.getB().getC().doSomething(). Ett objekt ska tala med sig själv
* Hybrider, undvik klasser som delvis exponerar data och som delvis har logik
* Data Transfer Object, har bara fält och getters/setters, ingen affärslogik, används vid kommunikation mellan controller och service. Ofarliga, öppna behållare för data
* Active Record, hybrid mellan DTO och objekt, används vid CRUD

## Kapitel 7 - Error Handling
* Exceptions instead of Returns, returnera inte felkoder. använd undantag
* Provide Context with Exceptions, Lägg till kontext när fel kastas, ska kunna svara på "Vad gick fel", "Var hände det" och "Varför är det relevant"
* Define Exception Classes, Extenda Exception och skapa egna domänspecifika typer
* Define the normal flow
* Don't return Null * Don't Pass Null
Om det går att undvika att checka != null t ex, gör det. använd annat eller skapa ett Null Objekt 
* Fånga fel så nära källan som möjligt
* Testa felhanteringen, lika viktigt som koden

## Kapitel 8 - Boundaries
* Using Third-Party Code, ett bibliotek kan erbjuda fler funktioner än man behöver och kan göra koden svår att begränsa/skydda
* Exploring and Learning Boundaries, Använd third-party-code i klass som använder det
* Learning log4j, * Learning tests are better than free,
learning test är isolerade test som används för att förstå ett tredjeparts API innan det ingereras i produktionen. 
När nya versioner släpps av APIt kan du använda learning testerna för att se om det uppstått buggar.
* Using code that does not yet exist, 
* Clean Boundaries, håll kod separerad från externa APIer, få platser i systemet som refererar till det, skriv boundary tests

## Kapitel 9 - Unit Tests


## Kapitel 10 - Classes


## Kapitel 11 - Systems