export default function functionalComponentRefactor() {
    
    return (
        <div>
            <h1 className="title">Refactoring the site</h1>
            <h3 className="title">Why I'm refactoring the site</h3>
            <div className="content">
                <p>So, I have worked with react.js for about a year now (since May 2020) at my current position. A lot of the work I do in it is class-based. I'm not sure 
                    if that was an intentional decision by my team before I joined or not. I suspect it was just legacy use of the SPA they use as a template for spinning up 
                    new projects. </p>
                <p>Normally, this wouldn't be a huge deal, except as of React 16.8, we have been introduced to <a href="https://reactjs.org/docs/hooks-overview.html">hooks</a>.
                    Not only that, but a lot of development in react OSS projects is using hooks and functional components primarily. Personally it feels like a pretty big 
                    paradigm shift, but I think it's worth keeping up on it as I can to ensure that I can write effective react going forward.</p>
                <p>So I'll be rewritting this website as purely functional components with react hooks as needed</p>
            </div>
            <h3 className="title">Journey, hiccups, &c</h3>
            <div className="content">
                <p>First things first, we need a list of all the components that need refactoring. I've already started this post as a functional component (peak behind the 
                    scenes, this blog is written in react cause I'm too lazy to learn a blogging platform). Next there's components, pages, and the top level app. Luckily this
                    site is still really small, so we don't have to work too hard at the moment.</p>
                <p>First bump is with the navbar - we have some state and we have some routing. State seems easy enough with the <code>useState</code> hook. I assume there is
                    some corresponding <code>useRoutes</code> hook or something like that for react router. There's also a ref for aligning the blog menu to it's label. 
                    Luckily I found this handy <a href="https://dev.to/carlosrafael22/using-refs-in-react-functional-components-part-1-useref-callback-ref-2j5i">blog post</a> 
                    describing how to use ref hooks! The navigation was easy as well, there's <a href="https://reactrouter.com/web/api/Hooks/usehistory">a hook</a> for 
                    <code>useHistory</code> as well. Seems like there's a hook for everything! So far , the transition has been easy. Admittedly, I don't have a super complex
                    use case, but in my experience, starting with something this simple is always a good way to dig into something new. It's also worth noting that this has 
                    seemed to reduce boiler plate</p>
                <p>Posts were easy, they really don't have anything in them that's interesting</p>
                <p>Next is the blog page itself which basically just finds the correct blog and renders it. We do use a prop here, so that's unfamiliar territory, but it looks
                    to be as easy as using <code>function(props)</code>... And it appears you can strongly type it too (which is always good in my opinion). I ended up 
                    refactoring the way I do page title setting to use <code>document.title = "title"</code> instead of Helmet, a 3rd party OSS react package that sets the 
                    document title with a dom element. This refactor was interesting because I used <code>useState</code> and <code>useEffect</code> in conjunction in a cool
                    way! An interesting effect is that we have to pass the state as a dependency in <code>useEffect</code>.</p>
                <p>Everything else was easy as well. The only thing worth noting is setting the page title in App.tsx with <code>useEffect</code> hook (which is literally the 
                    example the give in the hooks overview, so...).</p>
            </div>
            <div className="content">
                <p>Welp, that was easy! I'm glad I did it and will definitely be looking forward to working with functional components and hooks in the future. Even just this 
                    short exercise was useful in demistifying the whole concept. Check out the code 
                    <a href="https://github.com/gwillad/adamgwilliam.dev/tree/functional-component-refator">here</a>.</p>
            </div>
        </div>
    );
}