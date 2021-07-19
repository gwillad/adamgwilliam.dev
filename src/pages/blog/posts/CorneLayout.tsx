export default function CorneLayout() {
    return (
        <div>
            <h1 className="title">Experimenting with my Corne Layout</h1>
            <div className="content">
                <p>So for those who don't know (which might be everyone), I am a big fan of <a href="https://www.reddit.com/r/CustomKeyboards/">custom keyboards</a>. I got into the
                    hobby at the beginning of the pandemic. I had just started a new job and was stuck inside in my studio apartment with my partner and my loud ass keyboard 
                    (an old coolermaster with Cherry MX Blues, if you're wondering). The board itself was fine, but it was clear that it wasn't going to work. I was simply making 
                    too much noise. 
                </p>
                <p>My brother had been talking to me about his keyboards and showing me his cool ortholinear boards (all the keys are in rows and columns like a 
                    grid), and telling me about the switches... at the time I kind of just tuned it out. He was clearly much deeper down the rabbit hole than I, and I couldn't
                    keep up. Remembering this, I reached out to him for some advice, and we starting talking about form factors and hot swap and switch types and QMK and.... 
                    Before I knew it, I had bought a $110 keyboard (more than I ever thought I would spend) and was buying new keycap sets and switches to experiment
                    with the sound... I was hooked. Thanks for that, David.
                </p>
                <p>Fast forward a year and change and I'm pretty deep in it at this point. I have several boards, several more that I have bought, built, and sold. I am a member
                    of several keyboard focused discords and consider some of those folks in those spheres my friends. I even got my partner into it (she's a big fan of the case 
                    design and keycap aspects). It has been, in my opinion, really important for my mental health during the pandemic. I was stuck inside, but I was exploring a 
                    new hobby and making new friends the whole time. I am really grateful to the community because of that.
                </p>       
                <p>Plus, the keyboards are dope.</p>
                <img className="img" src="https://imgur.com/Nl2m144.jpg" alt="polycarbonate keyboard with colorful keycaps"/>      
                <img className="img" src="https://imgur.com/nrpp47P.jpg" alt="small polycarbonate keyboard with dark keycaps"/>
                <img className="img" src="https://imgur.com/vGf7MwJ.jpg" alt="all black keyboard with purple accents"/> 
                <img className="img" src="https://imgur.com/njIxRa2.jpg" alt="split keyboard"/> 
                <p>That final photo is called a CRKBD or Corne. Specifically, a black aluminum <a href="https://imkulio.com/">IMK Corne</a> (a custom case for the typical
                    fr4 sandwich corne, which is what most cornes are), with lubed (205g0) and spring swapped (100g progressive 
                    sprits) <a href="https://novelkeys.xyz/collections/switches/products/novelkeys-cream-switches">NK Creams</a>, 
                    and <a href="https://drop.com/buy/drop-matt3o-mt3-susuwatari-custom-keycap-set?utm_source=linkshare&referer=XPCNQT">MT3 Susuwatari</a>. It's a lovely little 
                    keyboard, and as you can see has some interesting features:
                </p>
                <ul>
                    <li>Columnar stagger - the keys are aligned by column instead of by row, like with standard layouts. This means your fingers only move up and down, 
                        not side to side. It takes a bit to get used to, but ultimately is a more comfortable typing experience.
                    </li>
                    <li>
                        Those screens with the bongo cat on them bongo at the same speed that I type. It's extremely cute. 
                    </li>
                    <li>40% layout - this board is missing <i>a lot</i> of keys compared to a typical full sized keyboard. No numpad, no nav keys like arrows, no F row, very few 
                        of the normal modifier keys like control or alt... there isn't even a num row.
                    </li>
                    <li>Split in half! This allows you to type with hands apart which is much more comfortable for shoulders, back, and wrists. Seriously. It's hard to go back now.</li>
                </ul>
                <p>So, how do you type on these you might ask? Layers! The two keys next to the big boys where the thumbs go are called layer keys. They act a lot like a "fn" key
                    you see on some laptop keyboards which change the functionality of other keys when held. So basically I have memorized a secondary layout that's mapped to the 
                    same keys as the alphas. Just have to hold the "LWR" (lower) and/or "RSE" (raise) key to access them. With that I have all the functionality I need. Numbers, 
                    symbols, navigation, and F row!
                </p>
                <p>One of the many appeals of the hobby is the personalization and customization of things like keymap layout. It's a lot of fun to try to optimize your
                    keystrokes and make sure you're typing efficiently. The reason I wanted to write this post was to document a change from an old layout to a new one. Here's the 
                    old layout.
                </p>
                <img className="img" src="https://imgur.com/FYrDQjP.jpg" alt="keymap of old layer zero"/>      
                <img className="img" src="https://imgur.com/RyRVd2T.jpg" alt="keymap of old layer one"/>
                <img className="img" src="https://imgur.com/WMCvb53.jpg" alt="keymap of old layer two"/> 
                <img className="img" src="https://imgur.com/FkuxKms.jpg" alt="keymap of old layer three"/> 
                <p>These screenshots are from a program called <a href="https://caniusevia.com/">Via</a>. It's a semi-open source project that uses QMK, a common custom keyboard firmware 
                    to map keys on the fly without having to reflash the hardware. The upside triangles mean "no key here". M1 and M0 are macros (which automatically type multiple 
                    keys at once) and ADV keys are special commands in QMK. MO(1) and MO(2) are the special layer keys I spoke about above. 
                </p>
                <p>The issues I was having with the layout were three-fold: </p>
                <ol>
                    <li>Because I have to hit the lower key so frequently - MO(1) in layer 0 - I often accidentally hit the windows key, which is super disrupting.</li>
                    <li>The arrow cluster on layer 2 is unintuitive. I never really grokked where to put my fingers. I use arrows a lot navigating around code, so I thought
                        this would start to come naturally, but as you can see I have several board and for the most part they all have the arrows in different locations. It can 
                        be hard to build muscle memory for it when switching boards regularly (which I do).
                    </li>
                    <li>This is a minor issue, but I use delete key fairly regularly, and in this layout it's paired with the right shift. You can't see it in the layout, because 
                        it's using something called "Mod Tap" which is a functionality in the keyboard which allows you to press one key (a modifier, specifically) when held, and 
                        another key when tapped. In this case, it's the ADV key on the bottom right where right shift would be normally, and that has right shift on hold, delete on 
                        tap. 
                    </li>
                </ol>
                <p>So, because it's so easy to experiment, I went for it! Here's the new layout.</p>
                <img className="img" src="https://imgur.com/z6aTzrt.jpg" alt="keymap of new layer zero"/>      
                <img className="img" src="https://imgur.com/ZIFKdyr.jpg" alt="keymap of new layer one"/>
                <img className="img" src="https://imgur.com/MfLrE7E.jpg" alt="keymap of new layer two"/> 
                <img className="img" src="https://imgur.com/3aPCXiX.jpg" alt="keymap of new layer three"/> 
                <p>A handful of major changes:</p>
                <ul>
                    <li>Probably the biggest change - all the symbols including numbers have been moved to one layer. The idea I had is to have one layer for all symbols and 
                        another layer just for navigation. This let me put the arrow cluster in a much more intuitive place, and I think this will also help with typing strings of 
                        symbols and numbers (which I do more than you might think...)
                    </li>
                    <li>Delete has been moved to where windows key was and windows was moved to a layer. Frankly, I don't use windows key a ton anyway. I mostly 
                        use <a href="https://www.launchy.net/">Launchy</a>. I am hoping I will end up with a lot fewer interruptions while typing. 
                    </li>
                    <li>The macros (which were used to launch common programs like launchy and a command prompt) are now in the function layer, which I think makes a little more 
                        sense to me. 
                    </li>
                </ul>
                <p>The biggest issue with changes like this is just getting used to it. And, assuming I do get used to it (which is extremely likely to happen, just takes 
                    time) then porting it over to my other 40% boards!
                </p>
                <p>As always, feel free to hit me up if you have any questions!</p>
            </div>
        </div>
    );

}
