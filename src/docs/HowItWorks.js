import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    content: {
        fontSize: '20px',
    },
}));

function HowItWorks() {
    const classes = useStyles()

    return (
        <div dir="ltr">
            <h1>How It Works?</h1>
            <div className={classes.content}>
                <p>
                    Arabic script is very special with two essential features:
                    <ol>
                        <li>It is written from right to left.</li>
                        <li>The characters change shape according to their surrounding characters.</li>
                    </ol>
                    So when you try to print text written in Arabic script in an application – or a library – that
                    doesn't support Arabic you're pretty likely to end up with something that looks like this: <b>ةي ب ر ع</b>
                </p>
                I used <a href="https://www.npmjs.com/package/arabic-persian-reshaper">arabic-persian-reshaper</a> package which
                contains the core logic (there are many others in different languages such as <a href="https://github.com/louy/Javascript-Arabic-Reshaper">
                    Javascript-Arabic-Reshaper</a> and <a href="https://github.com/mpcabd/python-arabic-reshaper/">python-arabic-reshaper</a> etc..).
                They basically solve the issue of disconnected Arabic letters which can be seen while using a custom font in almost all platforms (Web, Android, iOS, ...).
                <br />
                Please take a look at <em>Additional Resources</em> below if you want to dive deeper in what happens under the hood.

                <p>Additional Resources:</p>
                <ul>
                    <li><a href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AE%D8%B7_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D9%81%D9%8A_%D9%8A%D9%88%D9%86%D9%8A%D9%83%D9%88%D8%AF">الخط العربي في يونيكود</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Complex_text_layout">Complex text layout</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Arabic_script_in_Unicode">Arabic script in Unicode</a></li>
                    <li>
                        <a href="http://www.alanwood.net/unicode/arabic_presentation_forms_b.html">Arabic Presentation Forms-B</a>
                        <span> </span>(<a href="http://www.unicode.org/charts/PDF/UFE70.pdf">PDF</a>)
                        <span> </span>(<a href="https://www.unicode.org/versions/Unicode13.0.0/ch09.pdf">The Unicode Standard</a>)
                    </li>
                    <li><a href="http://www.unicode.org/charts/">Unicode 13.0 Character Code Charts</a></li>

                    <li><a href="https://github.com/mpcabd/python-arabic-reshaper">python-arabic-reshaper</a></li>
                    <li><a href="https://discourse.psychopy.org/t/reshaping-english-text-to-arabic/4235/5">Reshaping English Text to Arabic</a></li>
                </ul>

                <p>Similar Websites:</p>
                <ul>
                    <li><a href="http://www.arabic-text.com/">Arabic-text.com</a></li>
                    <li><a href="https://reshaper.mpcabd.xyz/">Online Arabic Reshaper</a></li>
                </ul>
            </div>
        </div>
    );
}

export default HowItWorks