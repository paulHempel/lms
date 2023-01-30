const NAME = "name";
const STEPS = "steps";
const LEVEL = "level";

const TITLE = "title";
const CONTENT = "content";
const HTML_CODE = "html_code";
const CSS_CODE = "css_code";

const tutorial =
    [
        {
            NAME: "Einstieg in HTML & CSS",
            LEVEL: 1,
            STEPS: [
                {
                    TITLE: "Text zu Text: Eine Transformation",
                    CONTENT:
                        `<em>Text</em> wird einfach zu text übertragen. <br> <br>
Mehr als ein <em>Leerzeichen</em> und alle <em>Zeilenumbrüche</em> werden ignoriert. <br> <br>
Warum ist das so? Wir müssen dem Computer ganz genau sagen, was er für uns machen soll. Denn ohne eine genaue Anleitung, der Code, kann der Computer nicht wissen, was wir wollen.`,
                    HTML_CODE:
                        `Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.But I can't give you this case, it don't belong to me.Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.\n
Now that there is the Tec- 9, a crappy spray gun from South Miami.This gun is advertised as the most popular gun in American crime.Do you believe that shit ? It actually says that in the little book that comes with it: the most popular gun in American crime.Like they're actually proud of that shit. \n
Now that we know who you are, I know who I am.I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be ? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.`
                },
                {
                    TITLE: "Tags: Die Grundlagen",
                    CONTENT:
                        `Ein Tag besteht aus einer aufgehenden spitzen Klammer <em><</em> <em>IRGENDEINEM-NAMEN</em> und einer schließenden spitzen Klammer <em>></em>, z.B.: <br>
<em>&lt;h1&gt;</em> <br><br> 
Damit der Computer weiß wo z.B. eine Überschrift aufhört, müssen wir den Tag auch wieder schließen, indem wir ihn wiederholen, mit einer kleinen Anpassung: <br> 
<em>&lt;h1&gt;Ich bin eine Überschrift&lt;/h1&gt;</em>`,
                    HTML_CODE:
                        `<h1>Hallo</h1>\n
<p>Das war eine Überschrift. Ich bin normaler Text.<p>\n
<p>"h1" steht für Heading-1, also Überschrift-1, und "p" für "paragraph", also Absatz.</p>\n
<h2>Ich bin eine etwas kleiner Überschrift</h2>\n
<p>Noch mehr Text</p>`
                },
                {
                    TITLE: "Style und das Geld",
                    CONTENT:
                        `Damit unsere Website auch schön aussieht, brauchen wir CSS.\n
Hier können wir Farben setzen, Schriftarten anpassen und Abstände definieren.`,
                    HTML_CODE:
                        `<h1>Hallo</h1>\n
<p>Das war eine Überschrift. Ich bin normaler Text.<p>\n
<p>"h1" steht für Heading-1, also Überschrift-1, und "p" für "paragraph", also Absatz.</p>\n
<h2>Ich bin eine etwas kleiner Überschrift</h2>\n
<p>Noch mehr Text</p>`,
                    CSS_CODE:
                        `body { 
    font-family: sans-serif;
    background-color: azure;
}
h1 {
    color: red;
}

p {
    color: rgb(100, 100, 100);
}`
                },

                {
                    TITLE: "Klassen-Systeme",
                    CONTENT: `Gerade haben wir nur bestehende Tags angepasst. Was aber wenn wir eine Überschrift haben, die Blau und eine die Rot sein soll?`,
                    HTML_CODE: `<h1 class="blue-text">Hallo</h1>\n
<p>Das war eine Überschrift. Ich bin normaler Text.<p>\n
<p>"h1" steht für Heading-1, also Überschrift-1, und "p" für "paragraph", also Absatz.</p>\n
<h2 class="red-text">Ich bin eine etwas kleiner Überschrift</h2>\n
<p>Noch mehr Text</p>`,
                    CSS_CODE: `body { 
    font-family: sans-serif;
    background-color: azure;
}

.red-text {
    color: red;
}


.blue-text {
    color: blue;
}

`
                },
            ]
        }
    ]
